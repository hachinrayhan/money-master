function getInputValue(id) {
    const element = document.getElementById(id);
    const valueString = element.value;
    const value = parseInt(valueString);
    return value;
}

function setValue(id, value) {
    let element = document.getElementById(id);
    element.innerText = value;
}