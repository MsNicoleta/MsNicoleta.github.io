

// /* (event.which);  event.keycode  also works */
var input=document.getElementById("userinput");
var button=document.getElementById("enter");
var ul=document.querySelector("ul");
var listItems=document.getElementsByTagName("li"); 


function inputLength(){
	return input.value.length;
}


function createListElement(){
var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

		var btn = document.createElement("button");
     	btn.appendChild(document.createTextNode("❌"));
 		li.appendChild(btn);
 		btn.onclick = removeParent;
}


function addListAfterClick(){
    if (inputLength()>0){
    	createListElement();

    }
}


function addListAfterKeypress(event){
	  if (inputLength()>0 && event.keyCode===13){
	  	createListElement();
	  }
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);


ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

//below: is another way for the same result
// document.querySelector("li").classList.toggle("done");

// var list = document.getElementsByTagName("li");
// for(var i=0; i<list.length; i++){
//  list[i].addEventListener("click", liClick);
// }
// function liClick(){
//   this.classList.toggle("done");
// }

function listLength(){
	return listItems.length;
}

function deleteButton(){
	var btn=document.createElement("button");
btn.appendChild(document.createTextNode("❌"));
listItems[i].appendChild(btn);
btn.onclick=removeParent;
}

for( i=0;i<listLength();i++){

deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
}
