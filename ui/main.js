console.log('Loaded!');
//changing text
var element =document.getElementById('main.text');
element.Innerhtml = 'New value';
//move the image
var img = document.getElementById('madi.png');
var marginleft =0;
function moveright () {
    marginleft = marginleft + 10;
    img.style.marginleft = marginleft ='px';
}
img.onclick = function(){
    var interval = setInterval(moveright,100);
    
};
