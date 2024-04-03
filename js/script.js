document.getElementById('bmi-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value / 100;
    const bmi = (weight / (height * height));

    let bmiCategory = '';
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {