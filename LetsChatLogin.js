function Login() {
    user_name= document.getElementById("Username_inputbox").value;
    localStorage.setItem("user name", user_name);
    window.location="LetsChat.html";
}