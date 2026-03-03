function CheckLotto() {
    A = Math.floor(Math.random() * 5) + 1;
    console.log("Generated Lottery Number: " + A);
    const lotteryNumber = document.getElementById("lottery").value;
    let name = document.getElementById("name").value;
    if (name === "") {
        
    } else {
        name = ", " + name + "";
        
    }
    if (isNaN(lotteryNumber) || lotteryNumber < 1 || lotteryNumber > 5) {
        alert("Please enter a valid number between 1 and 5.");
        return;
    }
    if (lotteryNumber === A.toString()) {
        document.getElementById("lotteryResult").textContent = "Congratulations" + name + "! You won the lottery!";
    } else {
        document.getElementById("lotteryResult").textContent = "Sorry" + name + ", better luck next time.";
    }
}