var restaurent={
	adress:'Via Aldo Manuzio 66 C Nuovo Mercato di Testaccio, Box 22, 0 0 153 Rome Italy+',
	openingtime:'10am',
    closingtime:'22pm'

}


var meal1={
	type:" Pizza Napoletana ",
	ingredient:["pizza sause" ,"cheese"],
    price:"$5.95"
}

var meal2={
	type:"Pizza al padellino",
	ingredient:["pizza sause","ham","cheese"],
    price: "$14.95"
}

var meal3={
	type:"Pizza Fritta",
	ingredient:["pizza sause","fried","cheese"],
    price: "$8.49"
}
var meal4={
	type:"Pizza Siciliana",
	ingredient:["vegetables","cheese"],
    price:"$10.49"
}

var menu=[meal1,meal2,meal3,meal4]





function display2(){
	window.alert('10am');
}

function display3(){
	window.alert('22pm') 
}

function display4(){
	window.alert('meal1' + '\n' + 'meal2' + '\n' + 'meal3' + '\n' + 'meal4') 
} 

function displayx(){
	window.alert(' Pizza Napoletana' + '\n' + ["pizza sause" ,"cheese"] + '\n' + "$5.95") 
} 

function display5(){ 
	window.alert(' Pizza al padellino' + '\n' + ["pizza sause" , "ham","cheese"] + '\n' + "$14.95")
}
function display6(){
	window.alert(' Pizza Fritta' + '\n' + ["pizza sause","fried","cheese"] + '\n' + "$8.49" ) 
}

function display7(){
	window.alert('Pizza Siciliana' + '\n' + ["vegetables","cheese"] + '\n' + "$10.49");
}


function myFunction() {
  $("#Adress").append("<p id = 'newElement'> Via Aldo Manuzio 66 C Nuovo Mercato di Testaccio, Box 22, 0 0 153 Rome Italy</p>"); 
                }

function myFunctions() {
  $("#Opening-time").append($("<p>10am</p>")); 
               }
function myFunctionp() {
  $("#Closing-time").append($("<p>22pm</p>")); 
}

$(document).ready(function(){ 

$("#Menubutton").click(function(){
  $("#Menu").append("<button type='button' onclick = 'displayx()'>Pizza1</button> <br> <button type='button'onclick = 'display5()''>Pizza2</button><br> <button type='button' onclick = 'display6()'>Pizza3</button><br><button type='button' onclick = 'display7()'>pizza4</button>")

$("#Menu").append("<p></p>")

})
})