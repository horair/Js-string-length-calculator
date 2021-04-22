function calculate() {
    var a = document.getElementById("input").value;
    var c = 0;
    for (let index = 0; index < a.length; index++) {
        if (a[index] !== " ") {
            c++;
        }
        
    }
    document.getElementById("result").innerHTML = "The length of the string is " + c;
}