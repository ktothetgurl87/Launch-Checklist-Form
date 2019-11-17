// Write your JavaScript code here

window.addEventListener("submit", function(event){
   let pilotNameField = document.getElementById("pilotName");
   let copilotNameField = document.getElementById("copilotName");
      if (pilotNameField || copilotNameField != ""){
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      }
   });
window.addEventListener("submit", function(event){
   let fuelLevelField = document.getElementById("fuelLevel");
   let cargoMassField = document.getElementById("cargoMass");
   if (fuelLevelField.isNaN() || cargoMassField.isConnected.NaN() == false){
      alert("Make sure to enter valid information for each field!")
      event.preventDefault();
   }
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
