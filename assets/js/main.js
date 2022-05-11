

let inputRange = document.getElementById('inputRange');
let outputConcern = document.getElementById('outputConcern');
let outputEffect = document.getElementById('outputEffect');
let rangeValue = document.getElementById('rangeValue');


function changeRange() {
    rangeValue.innerHTML = "AQE : " + inputRange.value;
    if (inputRange.value <= 50) {
        outputConcern.innerHTML = "Level of health concern: Good";
        outputEffect.innerHTML = "Level of health effect: Little or no risk";
        document.body.style.backgroundColor = "green";
    } else if (inputRange.value > 50 && inputRange.value <= 100) {
        outputConcern.innerHTML = "Level of health concern: Moderate";
        outputEffect.innerHTML = "Level of health effect: Acceptable quality";
        document.body.style.backgroundColor = "yellow";
    } else if (inputRange.value > 100) {
        outputConcern.innerHTML = "Level of health concern: Unhealthy for sensitive groups";
        outputEffect.innerHTML = "Level of health effect: Generable publics not likely affected";
        document.body.style.backgroundColor = "orange";
    }
}