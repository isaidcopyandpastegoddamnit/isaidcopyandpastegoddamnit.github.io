
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
    delay_back = 0;
    delay_front = 1000;
}
function strobe_back(){
    var idx = Math.floor((Math.random()*colors.length));
    bg_idx++;
    if (bg_idx % 1000 == 0) {
        document.body.style.backgroundImage = 'url(http://allhdwallpapers.com/wp-content/uploads/2015/04/the-exorcist-5.jpg)';
    } else if (bg_idx % 1000 == 10) {
        document.body.style.backgroundImage = null;
    } else {
        document.body.style.backgroundColor = colors[idx];
    }
    setTimeout(strobe_back, delay_back); //in milliseconds
}
function strobe_front() {
    var idx = Math.floor((Math.random()*colors.length));
    document.getElementById('blah').style.color = colors[idx];
    setTimeout(strobe_front, delay_front); //in milliseconds
}
