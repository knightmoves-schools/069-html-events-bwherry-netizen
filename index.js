function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');

    //add code here
    if (value == nan) {
        document.getElementById("result").innerHTML = 'Invalid, please enter a number';
    } else {
        document.getElementById("result").innerHTML = multi;
    }

    let multi = value * value;
    
    
}
