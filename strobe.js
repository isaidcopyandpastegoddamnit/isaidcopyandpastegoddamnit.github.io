
var colors = ["red", "blue", "black", "green", "azure", "grey", "pink"]
var idx = 0;
var params = new URLSearchParams(location.search.slice(1))
var delay = 300
if (params.has('delay')) {
    delay = params.get('delay')
}
function strobe()
{
    document.body.style.backgroundColor = colors[Math.floor((Math.random()*7))];
    document.getElementById('blah').style.color = colors[Math.floor(Math.random()*7)];
    idx++;
    setTimeout(strobe, delay); //in milliseconds
}

