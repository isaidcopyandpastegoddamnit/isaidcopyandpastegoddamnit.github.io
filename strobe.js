var text1=document.body.style.backgroundColor;
var text2=document.body.style.color;
var boolean_value1=true;
var boolean_value2=true;
function strobe()
{
 if (boolean_value2)
 {
  document.body.style.backgroundColor = boolean_value1 ? 'black' : 'white';
  document.body.style.color = boolean_value1 ? 'white' : 'black';
  boolean_value1=!boolean_value1;
  setTimeout(strobe, 70); //in milliseconds
 }
 else
 {
  document.body.style.backgroundColor=text1;
  document.body.style.color=text2;
  alert("The else statement was executed...boolean_value2 evaluates to false");
 }
}

function stop_strobe()
{
 boolean_value2=false;
}

strobe();


window.onclick = stop_strobe;
