// TODO: add code here
function init() {
   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
   return response.json();
 
   })
 
   .then(function(json) {
     let containerTag = document.getElementById("container");
 
     for(let i = 0; i < json.length; i++){
      let astronautTag = `<div class= "astronaut"><div class="bio"><h3>${json[i].firstName + ' ' + json[i].lastName}</h3><ul><li>${'Hours in space: ' + json[i].hoursInSpace}</li>
      <li>${'Active: ' + json[i].active}</li><li>${'Skills: ' + json[i].skills}</li></ul></div>
      <img src="${json[i].picture}" class="avatar"></div>`;
      containerTag.innerHTML += astronautTag;
     }
   });
 
 }
 
 window.onload = init;