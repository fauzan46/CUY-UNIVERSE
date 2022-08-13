function onSignUP() {

let username = document.getElementById('username').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;


if (username == "" || password == "" || email == "") {
    alert("diisi lah kalau mau daftar")
} else {
    location.href = "login.html"
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    localStorage.setItem('username', username)
}

}


function onSignIn() {
    let usernameL = document.getElementById('emailSignIn').value;
    let passwordL = document.getElementById('pwSignIn').value;


    localStorage.getItem('email')
    localStorage.getItem('password')



    if (usernameL == "" || passwordL == "") {
        alert("kalau udah daftar diisi dong!!")
    }

    if (usernameL == localStorage.getItem('email') && passwordL == localStorage.getItem('password')) {
        location.href = "fakezone.html"


        // alert("anda berhasil login")
    } else {
        alert("mungkin anda typo pada username atau password")
    }

}


const h1 = document.getElementById('h1Content')
let name = localStorage.getItem('username')
// name = prompt('who wants to be called: ')
h1.innerHTML = `hello ${name}!`

if(location.reload){
    localStorage.getItem('role')
    localStorage.getItem('password')
}