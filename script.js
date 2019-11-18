// Write your JavaScript code here

window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
   let pilotNameField = document.querySelector("input[name= pilotName]");
   let copilotNameField = document.querySelector("input[name= copilotName]");
   let fuelLevelField = document.querySelector("input[name= fuelLevel]");
   let cargoMassField = document.querySelector("input[name= cargoMass]");
      if (pilotNameField.value === "" || copilotNameField.value === "" || isNaN(fuelLevelField.value) || isNaN(cargoMassField.value)){
      alert("Make sure to enter valid information for each field!");
      event.preventDefault();
      }
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
