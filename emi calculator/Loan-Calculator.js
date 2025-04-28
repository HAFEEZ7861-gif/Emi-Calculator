
        const amountInput = document.getElementById('amount');
        const rateInput = document.getElementById('rate');
        const timeInput = document.getElementById('time');
        const calculateButton = document.getElementById('btn');

        function calculate() {
            let amount = parseFloat(amountInput.value);
            let rate = parseFloat(rateInput.value);
            let time = parseInt(timeInput.value);

            if (isNaN(amount) || isNaN(rate) || isNaN(time) || amount <= 0 || rate < 0 || time <= 0) {
                document.getElementById("output").textContent = "Please enter valid numbers.";
                return;
            }

            let monthlyRate = rate / 12 / 100;
            let emi = (amount * monthlyRate *
                            Math.pow(1 + monthlyRate, time)) /
                        (Math.pow(1 + monthlyRate, time) - 1);
            let result = emi.toFixed(2);
            document.getElementById("output").textContent = result;
        }

        function handleEnter(event) {
            if (event.key === 'Enter') {
                calculateButton.click();
            }
        }

        amountInput.addEventListener('keypress', handleEnter);
        rateInput.addEventListener('keypress', handleEnter);
        timeInput.addEventListener('keypress', handleEnter);
    