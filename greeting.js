function greet(){
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    document.getElementById("greeting").textContent = "Hello, " + name + "! Welcome to the JavaScript world!";
}