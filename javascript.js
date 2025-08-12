let pwd = document.querySelector("#password");
let pwdconf = document.querySelector("#passwordConf");
let submitBtn = document.querySelector(".createAccBtn");
let form = document.querySelector("#signupForm");


form.addEventListener("submit", e => {
    if (pwd.value !== pwdconf.value) {
        e.preventDefault();
        alert("Your passwords must match!");
        return;
    }
    alert("You've created an account");
    location.reload();

});