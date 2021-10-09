var title;
var inputBox;
var searchButton;
var imageLink;
var inputValue;
function setup() {
  createCanvas(1310,600);
  title=createElement("h2","POCKET DICTIONARY")
  title.position(510,100)
  title.style("color","white")
  
  inputBox=createInput("type a word")
  inputBox.position(550,190)
 
  searchButton=createButton("Search")
  searchButton.position(600,250)
 // searchButton.style('background-color',"blue")

 

  } 
  //imageLink=https://www.google.com/search?q=+"sad"+&rlz=1C1CHBD_enIN883IN883&sxsrf=AOaemvK8vQITBVBludtPBa8Q5oQwN2j0HQ:1633163963446&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjpkZrvqavzAhWuIbcAHdA8ABQQ_AUoAXoECAEQAw&biw=1366&bih=657&dpr=1

  function draw() 
{

  background("black");
   inputValue = inputBox.value()
 //console.log(inputValue)
 dictionaryApi();
}

 async function dictionaryApi(){
 var response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+inputValue)
 var responseJSON = await response.json();
 console.log(responseJSON)

}


