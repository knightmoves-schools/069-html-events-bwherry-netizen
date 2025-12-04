function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');

    //add code here
    if (value == nan) {
        return 'Invalid, please enter a number';
    }

    let multi = value * value;
    
    
}

document.getElementById("result").innerHTML = multi;
