const items = document.querySelectorAll('.item')
const cards = document.querySelectorAll('.card-body')

var dragtask
var dragcard

items.forEach(item => {
	item.addEventListener('dragstart', () => {
		item.classList.add('dragging')
		})

	item.addEventListener('dragend',() =>{

		item.classList.remove('dragging')
		address ='/task/'+ dragtask +'/edit/'+ dragcard
		var xhttp = new XMLHttpRequest();
		xhttp.open("GET", address, true);
		xhttp.send();
		})
})

cards.forEach(card =>
{
	card.addEventListener('dragover',e =>{
	e.preventDefault()
	const currentdrag = document.querySelector('.dragging')
	card.appendChild(currentdrag)
	dragcard = card.id
	dragtask = currentdrag.id
	console.log("Dragging")
	})
})

document.getElementById('div1').onload=createform();


function createform()
{
	var divElement  = document.getElementById('div1')
	var newform 	= document.createElement('FORM')
	newform.setAttribute("id",'form1')
	newform.method = "POST";
	divElement.appendChild(newform)

	var csrfinput = document.createElement('INPUT')
	console.log(newform)
	csrfinput.type = "hidden"
	csrfinput.name = "csrfmiddlewaretoken"
	csrfinput.value = csrftoken
	newform.appendChild(csrfinput)

	createinput()

}

function createinput()
{
	var br = document.createElement("br");
	
	document.getElementById("form1").appendChild(br);

	var newinput = document.createElement('INPUT');
	newinput.name = "tasks"
	document.getElementById('form1').appendChild(newinput);
	
	checkForNew()
}

	
function checkForNew()
{	
	var lastinput = document.getElementById('form1').lastElementChild;
	lastinput.addEventListener('input', changeFlag);	
}

function changeFlag()
{
	var lastinput = document.getElementById('form1').lastElementChild;
	lastinput.removeEventListener('input', changeFlag);	
	createinput()
}

function submitFunction()
{
	document.getElementById("form1").submit(); 
}


