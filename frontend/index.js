baseURL = "http://localhost:3000/workouts"

const workoutsContainer = document.querySelector('#workouts-container')
const workoutForm = document.querySelector('.create-workout')
const logMessage = document.querySelector('.log-message')
const logoutButton = document.querySelector('.logout-button')

logoutButton.addEventListener("click", () => {
    localStorage.removeItem("token")
    location.replace("index.html")
})

if(localStorage.getItem("token")){
    logMessage.textContent = "You are logged in!"
} else {
    logMessage.textContent = "You are not logged in!"
}

fetch(baseURL)
    .then(response => response.json())
    .then(workouts => {
        workouts.forEach(workout =>  {createCard(workout)}
    )})

function createCard(workout) {
    const workoutCard = document.createElement('div')
    const workoutDate = document.createElement('h2')
    const workoutDuration = document.createElement('h3')
    const workoutDescription = document.createElement('h3')
    const deleteButton = document.createElement('button')
    const likeButton = document.createElement('img')

    workoutCard.classList.add("workout-card")
    workoutDate.textContent = dateUnscramble(workout.date)
    workoutDuration.textContent = workout.duration
    workoutDescription.textContent = workout.description
    deleteButton.textContent = "Delete"
    deleteButton.classList.add("button")
    deleteButton.classList.add("delete-button")
    likeButton.classList.add("like-button")

    if(workout.favorite == true){
        likeButton.src = "/img/red-heart.png"
        likeButton.alt = "Empty heart button"
    } else {
        likeButton.src = "/img/blank-heart.png"
        likeButton.alt = "Full heart button"
    }

    workoutsContainer.append(workoutCard)
    workoutCard.append(workoutDate, workoutDuration, workoutDescription, deleteButton, likeButton)

    deleteButton.addEventListener("click", () => {
        fetch(`${baseURL}/${workout.id}`, {
            method: "DELETE", 
        }).then(response => response.json())
        workoutCard.remove()
    })

    likeButton.addEventListener("click", () => {
        let workoutObject 
        console.log(likeButton.src)
        if(likeButton.src == "http://localhost:3001/img/red-heart.png") {
            likeButton.src = "/img/blank-heart.png"

            workoutObject = {
                "favorite": false
            }

        } else {
            likeButton.src = "/img/red-heart.png"

            workoutObject = {
                "favorite": true
            }
    
        }

        fetch(`${baseURL}/${workout.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workoutObject)
        }).then(response => response.json())
    })
}

function dateUnscramble(string){
    let arrayOfNumbers = string.split("-")
    let date = arrayOfNumbers[1] + "/" + arrayOfNumbers[2] + "/" + arrayOfNumbers[0]
    return date
   }
    
workoutForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const date = formData.get('date')
    const duration = formData.get('duration')
    const description = formData.get('description')

    const workout = {
        date: date,
        duration: duration,
        description: description
        }

    fetch(baseURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(workout)
    })
        .then(response => response.json())
        .then(result => createCard(result))

    workoutForm.reset() 
})








