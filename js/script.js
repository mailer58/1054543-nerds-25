function changeInput(input) {
  var range=document.getElementById('range-input');
  var input=document.getElementById('to-field');
  input.value=range.value;
}
function changeSlider(range) {
  var range=document.getElementById('range-input');
  var input=document.getElementById('to-field');
  range.value=input.value;
}
