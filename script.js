const wrapper = document.querySelector(".wrapper"),
editableInput = wrapper.querySelector(".editable"),
readonlyInput = wrapper.querySelector(".readonly"),
placeholder = wrapper.querySelector(".placeholder"),
counter = wrapper.querySelector(".counter"),
button = wrapper.querySelector("button");
editableInput.onfocus = ()=>{
  placeholder.style.color = "#c5ccd3";
}
editableInput.onblur = ()=>{
  placeholder.style.color = "#98a5b1";
}
editableInput.onkeyup = (e)=>{
  let element = e.target;
  validated(element);
}
editableInput.onkeypress = (e)=>{
  let element = e.target;
  validated(element);
  placeholder.style.display = "none";
}
function validated(element){
  let text;
  let maxLength = 255;
  let currentlength = element.innerText.length;
  if(currentlength <= 0){
    placeholder.style.display = "block";
    counter.style.display = "none";
    button.classList.remove("active");
  }else{
    placeholder.style.display = "none";
    counter.style.display = "block";
    button.classList.add("active");
  }
  counter.innerText = maxLength - currentlength;
}

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