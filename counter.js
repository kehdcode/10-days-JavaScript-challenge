let a = 1;
let b = 50
function increaseMe(){
    let display = document.getElementById('numba');
    display.textContent = a;
    a++;
    
}
function decreaseMe(){
    let display = document.getElementById('number');
    display.textContent = b;
    b--;

}

function addAll(){
    let c = a + b;

    console.log(c);

}