
let username = "";
let password = "";
let message;

// window.onload = () => {
//     if(!localStorage.username){
//         location.href = '/';
//     };
// };

document.querySelector('#loginform').addEventListener("submit", send); 

function send (e) {
   e.preventDefault();
   
   if (!username || !password) {
     document.querySelector(".alertContainer").style.display = "block";
   } else {

        try {
            fetch("http://localhost:3000/login", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({ username: username, password: password })   
            }).then(response => response.json())
            .then(response => {
                console.log("Login result=> ", response[0])
                if (!JSON.stringify(response[0].username)) {
                    document.querySelector(".alertContainer").style.display = "block";
                    document.querySelector(".alertContainer").innerText = JSON.stringify(response[0].message);
                    return;
                }
                localStorage.setItem("username", JSON.stringify(response[0].username));
                location.href = '/home.html';
            });

        } catch(e) {
            console.log(e)
            document.querySelector(".alertContainer").style.display = "block";
            document.querySelector(".alertContainer").innerText = JSON.stringify(response[0].message);
            return;

        }
     
    }   
}


document.querySelectorAll('.formValue').forEach( item => item.addEventListener('blur', test));

function test(e) {
    console.log(e.target)
    if (e.target.id == "username"){
        username = e.target.value;
        if (/\d/.test(username) && !/\d$/.test(username)) {
            message = false;
        } else {
            message = true;
        }
    } else {
        password = e.target.value;
        if (!/(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{4,})/.test(password)) {
            message = false;
        } else {
            message = true;
        }
    }
}