
var colors = ["red", "blue", "black", "green", "azure", "grey", "pink"]
var idx = 0;
function strobe()
{
    document.body.style.backgroundColor = colors[Math.floor((Math.random()*7))];
    document.getElementById('blah').style.color = colors[Math.floor(Math.random()*7)];
    idx++;
    setTimeout(strobe, 300); //in milliseconds
    
}

