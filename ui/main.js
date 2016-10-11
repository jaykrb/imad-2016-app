console.log('Loaded!');
//changing text
var element =document.getElementByid('main.text');
element.Inourhtml = 'New value';
//move the image
var img = document.getElementByid('img');
img.onclick = function(){
    img.style.marginleft = '100px';
    
};
