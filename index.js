const display = document.getElementById("display");

function tampil(input) {
    display.value += input;
}

function hapus() {
    display.value = "";
}

function calc() {
    try {
        display.value = eval(display.value);
    } 
    catch(error) {
        display.value = "E";
    }
    
}