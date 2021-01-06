const loginForm = document.querySelector(".login-form form")
const loginMessage = document.querySelector(".login-form .message")

loginForm.addEventListener("submit", event => {
    event.preventDefault()
    const formData = new FormData(event.target)

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: formData.get("username"),
            password: formData.get("password"),
        })
    })
    .then(response => {
        if (!response.ok) throw new Error("Bad username or password")
        
        return response.json()
    })
    .then(response => {
        const { username, password_digest } = response.user
        loginMessage.textContent = `Your username is ${username}, 
        and your password hash is ${password_digest}.`
        localStorage.setItem("token", response.token)

        location.replace("index.html")
    }).catch(error => {
        loginMessage.textContent = error.message
    })
    
    event.target.reset()
})