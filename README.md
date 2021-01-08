# Workout Tracker
  This app is designed to help users record the dates, durations, and types of workouts in one convenient place for their reference.  Users log in, and submit information about workouts, and then they have lifelong access to that information.  They can also favorite workouts they enjoyed the most.
  
  ## Inspiration
    It is January, and I was thinking about what type of app would really help me keep track of my workouts in a simple, user-friendly way.  This app puts all the information in one convenient place.  It combines simplicity, useability, and personal accountability in order to track workouts.
    
  ## Technologies
  
  💻Ruby <br />
  💻Rails <br />
  💻Javascript <br />
  💻SQLite3 <br />
  💻Active Record <br />
  
  ## Demo Video
  
  [Workout Tracker Intro Video]
  
  ## Setup
  
  - In order to experience this app, users must clone this Github repository and open it in their code editor. 
  - Install the Ruby gems by running "bundle install". 
  - Create your local database by running "rails db:migrate". 
  - Seed the database by running "rails db:seed". 
  - After doing all of that, start up the back-end by running "rails s", and the front-end by running "lite-server", which will open the app in your browser. 
  
 ## Instructions
 
  Interface with this app by first signing up for an account with a username and password.  Then, log in to your account.  From there, you can add as many workouts as you'd like using the form, and they'll appear on your account with the workout information on cards that are displayed.  Any workouts you particularly liked, you can favorite by clicking the heart.
  
 ## Code Sample
 
 ```
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
 ```
 
 ## Status
 
 I am consistently trying to improve the user's experience with this app.  I value feedback from our community.  On that note, I have some ideas for improving this app:
 
 🦾 Connecting the auth information to the functionality of the website <br />
 🦾 Adding a favorites page that only displays favorite workouts <br />
 🦾 Displaying the workouts in chronological order, in spite of what order they're added in <br />
 🦾 Making the website responsive to different screen sizes <br />
 
 ## Contact
 
 [Linkedin](https://www.linkedin.com/in/cassandra-whitty-0a184a1a4/) Cassandra Whitty
 
  
