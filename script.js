//var body = document.getElementById('body'); 
var header = document.getElementById('header'); 
var main = document.getElementById('main'); 
var bottom = document.getElementById('bottom'); 
var footer = document.getElementById('footer'); 


var min = 0;
var max = 255;


//window.addEventListener('load',colorPickerBody,false);
window.addEventListener('load',colorPickerHeader,false);
window.addEventListener('load',colorPickerMain,false);
window.addEventListener('load',colorPickerBottom,false);
window.addEventListener('load',colorPickerFooter,false);

/*function colorPickerBody(){
  var i = 0;
  var colorArray = [];
 
  while(i<3){
    var num =Math.floor( Math.random() * (max + 1 - min) ) + min ;
    colorArray.push(num);
    i++;
  body.style.background  = 'rgb('+colorArray+')';
}
};*/



function colorPickerHeader(){
    var i = 0;
    var colorArray = [];
   
    while(i<3){
      var num =Math.floor( Math.random() * (max + 1 - min) ) + min ;
      colorArray.push(num);
      i++;
    header.style.background  = 'rgb('+colorArray+')';
  }
  let paletteOne = document.getElementById('palette-one');
  paletteOne.innerHTML = header.style.background;
  paletteOne.style.background ='rgb('+colorArray+')';
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
  let paletteTwo = document.getElementById('palette-two');
  paletteTwo.innerHTML = main.style.background;
  paletteTwo.style.background ='rgb('+colorArray+')';
  };

  
  function colorPickerBottom(){
    var i = 0;
    var colorArray = [];
   
    while(i<3){
      var num =Math.floor( Math.random() * (max + 1 - min) ) + min ;
      colorArray.push(num);
      i++;
    bottom.style.background  = 'rgb('+colorArray+')';
  }
  let paletteThree = document.getElementById('palette-three');
  paletteThree.innerHTML = bottom.style.background;
  paletteThree.style.background ='rgb('+colorArray+')';
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
  let paletteFour = document.getElementById('palette-four');
  paletteFour.innerHTML = footer.style.background;
  paletteFour.style.background ='rgb('+colorArray+')';
  };

  window.addEventListener('load',function(){
    this.console.log(body.style.background)
},false);
 
$('#showcolorpalette').click(function(){
  $('#palette-all').show();
});