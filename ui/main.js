var button= document.getElementById('counter');
var counter =0;
button.onclick = function (){

counter =counter+1;
var span =document.getElementById('count');
span.innerHTML = counter.toString();
};

var nameInput =document.getElementById('name');
var name = nameInput.value;
var submit =document.getElementById('submit_btn');
submit.onclick = function(){
    var names=["name1","name2","name3","name4"];
    var list ='';
    for(var i=0;i=names,length;i++){
        list +- '<li>' + names[i] +'<li>';
        
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
    
};

