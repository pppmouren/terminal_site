var commands = document.getElementById("commands");
var user_input = document.getElementById("user_input");
var terminal_output = document.getElementById("terminal_output");

function execute(input){
    let output;
    input = input.toLowerCase();
    output = `<div>→ testing the input is ${input}</div>`;
    terminal_output.innerHTML = `${terminal_output.innerHTML+output}`;
}

function key(e){
    const input = user_input.value;

    if (e.key == "Enter"){
        execute(input);
        user_input.value = "";
        return;
    }

    user_input.innerHTML = input + e.key;
}

document.addEventListener("keypress", key);