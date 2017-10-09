console.log('js in');

$(document).ready(goQuery);

//main jquery function
function goQuery(){
  console.log('query went');
  $('button').on('click', buttonClicked);
}
//universal variable
var buttonCounter;
//function to count button clicks & create divs
function buttonClicked(){
  buttonCounter += 1;
  $('divplace').append('<div><p>'+ buttonCounter + '</p></div>');
}
