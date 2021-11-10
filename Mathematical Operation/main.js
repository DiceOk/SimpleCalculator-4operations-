function equal() {
    let input = document.getElementById('inputInteger').value;
    let output = eval(input);
    document.getElementById('output').value = output;

}
function dis(val) {
    document.getElementById('inputInteger').value += val;
    document.getElementById('inputInteger').focus();
}



