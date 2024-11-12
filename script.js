
        function checkAnswer() {
            // Get the user's input
            const userAnswer = document.getElementById("userAnswer").value.toLowerCase();
            const resultElement = document.getElementById("result");

            // Correct answer
            const correctAnswer = "new delhi";

            // Condition to check the user's answer
            if (userAnswer === correctAnswer) {
                resultElement.innerHTML = "Correct! 🎉";
                resultElement.style.color = "green";
            } else if (userAnswer === "") {
                resultElement.innerHTML = "Please enter an answer.";
                resultElement.style.color = "orange";
            } else {
                resultElement.innerHTML = "Wrong answer. Try again.";
                resultElement.style.color = "red";
            }
        }