// const wrapper = document.querySelector(".wrapper")
// const editableInput = wrapper.querySelector(".editable")
// const readonlyInput = wrapper.querySelector(".readonly")
// const placeholder = wrapper.querySelector(".placeholder")
// const counter2 = wrapper.querySelector(".counter")
// const button = wrapper.querySelector("button")
// editableInput.onfocus = ()=>{
//   placeholder.style.color = "#c5ccd3";
// }
// editableInput.onblur = ()=>{
//   placeholder.style.color = "#98a5b1";
// }
// editableInput.onkeyup = (e)=>{
//   let element = e.target;
//   validated(element);
// }
// editableInput.onkeypress = (e)=>{
//   let element = e.target;
//   validated(element);
//   placeholder.style.display = "none";
// }
// function validated(element){
//   let text;
//   let maxLength = 255;
//   let currentlength = element.innerText.length;
//   if(currentlength <= 0){
//     placeholder.style.display = "block";
//     counter2.style.display = "none";
//     button.classList.remove("active");
//   }else{
//     placeholder.style.display = "none";
//     counter2.style.display = "block";
//     button.classList.add("active");
//   }
//   counter2.innerText = maxLength - currentlength;
// }

function myModalProfil() {
  var x = document.getElementById("myWrapperProfil");
  if (x.className === "wrapperProfil") {
    x.className += "responsive";
  } else {
    x.className = "wrapperProfil";
  }
}
function myModalMeddelelser() {
  var x = document.getElementById("myWrapperMeddelelser");
  if (x.className === "wrapperMeddelelser") {
    x.className += "responsive";
  } else {
    x.className = "wrapperMeddelelser";
  }
}

// C indsæt

document.getElementById("pipperForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const Brugernavn = document.getElementById("Brugernavn").value;
  const Besked = document.getElementById("Besked").value;
  const Dato = document.getElementById("Dato").value;
  
  const data = {
      Brugernavn: Brugernavn,
      Besked: Besked,
      Dato: new Date().toISOString().slice(0,19)
  };

  console.log(data);

  const url = "http://localhost:8000/pipper";
  const options = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
  };
  
  const response = await fetch(url, options)
  const pipper = await response.json();
  
  console.log(pipper);
  console.log("yayy det virker!");
})
window.addEventListener("load", async (event) => {
  const url = "http://localhost:8000/pipper";
const  response = await fetch(url)
const pips = await response.json();
console.log(pips)

// Get the element where you want to display the pips object
  const displayElement = document.getElementById("pipperResult");
 
  // Convert the pips object to a string and display it
  displayElement.innerText = JSON.stringify(pips);
 
  // Create seperate html classes for Brugernavn and Besked
  const htmlPipList = pips.map(pip => {
    return `
    <div class="pip">
      <p class="brugernavn">Brugernavn:${pip.Brugernavn}</p>
      <p class="besked">${pip.Besked}</p>
    </div>
    `
  }).join("");
  displayElement.innerHTML = htmlPipList;
});

