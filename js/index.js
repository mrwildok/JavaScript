var element = document.createElement("p");
var content = document.createTextNode("I am learning Java Script");

element.appendChild(content);

document.getElementById("color").appendChild(element);

var liElement = document.createElement("li");
var liText = document.createTextNode("i'm here madafakas");

liElement.appendChild(liText);

var dad = document.getElementsByTagName("li")[0].parentNode;

dad.appendChild(liElement);

/*var liBox = document.createElement("li");
var liBoxText = document.createTextNode("I'm finally here...");

libox.appendChild(liBoxText);*/
 var addBox = document.getElementById("firtsbox");

 addBox.innerHTML = "<li class='new-text'>I'm here too fokers, I'm here too fokers, I'm here too fokers, I'm here too fokers </li>";

addBox.setAttribute("class","hide-content");


var newBox = document.createElement("li"),
    textBox = document.createTextNode("new text here, new text here, new text here");
newBox.appendChild(textBox);
newBox.setAttribute("class" , "box-red");
var daddy = document.getElementById("boxs");
var child = document.getElementById("firtsbox");
daddy.insertBefore(newBox, child);

(function (){
  var changeColor = document.getElementById("color");
  var botonColor = document.getElementById("change");
  botonColor.addEventListener("click", function (){
    changeColor.setAttribute("class", "rojo");
  });

}())


var changeColor = document.getElementById("color");
var botonColor = document.getElementById("change");


// function to change color

(function(){
botonColor.addEventListener("click", function(){
  changeColor.classList.toggle("perro");
});
}())



// main whit js

var nameMain = document.getElementById("main");
var mainContainer = document.createElement("ul");
var mainList = document.createElement("li");
var mainLinks = document.createElement("a");
//var tagLink = document.createTextNode("Item");
var numberItem = 6;


/*var multiplicar = function(){
  return(mainList * numberItem);
};

multiplicar();*/


nameMain.appendChild(mainContainer);
mainContainer.appendChild(mainList);
mainList.appendChild(mainLinks);
