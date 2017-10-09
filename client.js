console.log('js in');

$(document).ready(goQuery);

//main jquery function
function goQuery(){
  console.log('query went');
  $('button').on('click', buttonClicked);
  $('#divplace').on('click', '#swap', swapButton);
  $('#divplace').on('click', '#delete', deleteButton);
}
//universal variable
var buttonCounter = 0;
//function to count button clicks & create divs
function buttonClicked(){
  buttonCounter += 1;
  $('#divplace').append('<div><p>'+ buttonCounter + '</br> </br><button id="swap">Swap</button><button id="delete">Delete</button></p></div>');
}

function swapButton(e){
  var $targetDiv = $(e.target).parent();
$($targetDiv).toggleClass('yellow');
}

function deleteButton(e){
 var $targetDiv = $(e.target).parent();
 $($targetDiv).parent().remove();
}
