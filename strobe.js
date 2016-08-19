
var colors = ["red", "blue", "black", "green", "azure", "grey", "pink"]
var bg_idx = 0;
var params = new URLSearchParams(location.search.slice(1));
var delay_back = 300;
var delay_front = 300;
if (params.has('fg')) {
    delay_front = params.get('fg');
}
if (params.has('bg')) {
    delay_back = params.get('bg');
}
if (params.has('seizureMode') ) {
    delay_back = 100;
    delay_front = 0;
}
function strobe_back(){
    var idx = Math.floor((Math.random()*colors.length));
    document.body.style.backgroundColor = colors[idx];
    setTimeout(strobe_back, delay_back); //in milliseconds
}
function strobe_front() {
    var idx = Math.floor((Math.random()*colors.length));
    document.getElementById('blah').style.color = colors[idx];
    setTimeout(strobe_front, delay_front); //in milliseconds
}
