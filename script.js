var body = document.getElementById('body'); 
var header = document.getElementById('header'); 
var main = document.getElementById('main'); 
var footer = document.getElementById('footer'); 

var min = 0;
var max = 255;


window.addEventListener('load',colorPickerBody,false);
window.addEventListener('load',colorPickerHeader,false);
window.addEventListener('load',colorPickerMain,false);
window.addEventListener('load',colorPickerFooter,false);
 
function colorPickerBody(){
  var i = 0;
  var colorArray = [];
 
  while(i<3){
    var num =Math.floor( Math.random() * (max + 1 - min) ) + min ;
    colorArray.push(num);
    i++;
  body.style.background  = 'rgb('+colorArray+')';
}
};

function colorPickerHeader(){
    var i = 0;
    var colorArray = [];
   
    while(i<3){
      var num =Math.floor( Math.random() * (max + 1 - min) ) + min ;
      colorArray.push(num);
      i++;
    header.style.background  = 'rgb('+colorArray+')';
  }
  };

   
function colorPickerMain(){
    var i = 0;
    var colorArray = [];
   
    while(i<3){
      var num =Math.floor( Math.random() * (max + 1 - min) ) + min ;
      colorArray.push(num);
      i++;
    main.style.background  = 'rgb('+colorArray+')';
  }
  };
  
 
function colorPickerFooter(){
    var i = 0;
    var colorArray = [];
   
    while(i<3){
      var num =Math.floor( Math.random() * (max + 1 - min) ) + min ;
      colorArray.push(num);
      i++;
    footer.style.background  = 'rgb('+colorArray+')';
  }
  };

