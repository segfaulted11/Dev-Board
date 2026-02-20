/* 

// when the completed button is clicked ---
i)it shows an alert sayin "board updated successfully"
ii) task assigned number (which is six) gets reduced by 1
iii) the nav number (which is 23) gets incresed by 1
iv) the button should get disabled
v)a new content should be showed on the activity log sayin 'you have completed the task {xyz} at the current date.'


// other tasks ---
i) when the clear histry button is clicked it should clear all the contents
ii) when the 'discover something' section is clicked it should take you to another page consisting the q/a. and that page should have the navbar and on the right side it should have a button called 'back to desk' that takes the user to the main page again.


//challange part ---
i) when the 'skip' button is clicked, it should change the page's background dynamically 
ii)the calender section should show the current date
iii) when all the six buttons are clicked it should alert "congrats! yoou have completed all the current task"

*/

// main five tasks-->

// shopEase button (card-1)
let shopEaseButton = document.getElementById("shopEase");

shopEaseButton.addEventListener("click", () => {
  let taskAssignNumber = document.getElementById("task-assign-number");
  let currentAssignedNumber = taskAssignNumber.innerText;

  let navNumber = document.getElementById("nav-number");
  let currentNavNumber = navNumber.innerText;

  //i
  alert("board updated successfully");

  //ii
  taskAssignNumber.innerText = Number(currentAssignedNumber) - 1;

  //iii
  navNumber.innerText = Number(currentNavNumber) + 1;

  // iv
  shopEaseButton.setAttribute("disabled", "true");

  // v

  let shopEase = document.getElementById("shopEaseH1").innerText;

  let container = document.getElementById("aside-container");

  let newMessage = document.createElement("p");
  newMessage.textContent = `You have completed the task ${shopEase} at ${new Date().toLocaleString()}.`;

  newMessage.style.padding = "20px"
  newMessage.style.borderBottom = "2px solid black"

  container.appendChild(newMessage);
});

// cloudSync button (card-2)
let cloudSyncButton = document.getElementById("cloudSync");

cloudSyncButton.addEventListener("click", () => {
  let taskAssignNumber = document.getElementById("task-assign-number");
  let currentAssignedNumber = taskAssignNumber.innerText;

  let navNumber = document.getElementById("nav-number");
  let currentNavNumber = navNumber.innerText;

  //i
  alert("board updated successfully");

  //ii
  taskAssignNumber.innerText = Number(currentAssignedNumber) - 1;

  //iii
  navNumber.innerText = Number(currentNavNumber) + 1;

  // iv
  cloudSyncButton.setAttribute("disabled", "true");

  // v
  let cloudSync = document.getElementById("cloudSyncH1").innerText;

  let container = document.getElementById("aside-container");

  let newMessage = document.createElement("p");
  newMessage.textContent = `You have completed the task ${cloudSync} at ${new Date().toLocaleString()}.`;

  newMessage.style.padding = "20px"
  newMessage.style.borderBottom = "2px solid black"
  container.appendChild(newMessage);
});

// swiftPay button (card-3)
let swiftPayButton = document.getElementById("swiftPay");

swiftPayButton.addEventListener("click", () => {
  let taskAssignNumber = document.getElementById("task-assign-number");
  let currentAssignedNumber = taskAssignNumber.innerText;

  let navNumber = document.getElementById("nav-number");
  let currentNavNumber = navNumber.innerText;

  //i
  alert("board updated successfully");

  //ii
  taskAssignNumber.innerText = Number(currentAssignedNumber) - 1;

  //iii
  navNumber.innerText = Number(currentNavNumber) + 1;

  // iv
  swiftPayButton.setAttribute("disabled", "true");

  // v
  let swiftPay = document.getElementById("swiftPayH1").innerText;

  let container = document.getElementById("aside-container");

  let newMessage = document.createElement("p");
  newMessage.textContent = `You have completed the task ${swiftPay} at ${new Date().toLocaleString()}.`;
  newMessage.style.padding = "20px"
    newMessage.style.borderBottom = "2px solid black"
  container.appendChild(newMessage);
});

// emoji button (card-4)
let emojiButton = document.getElementById("emoji");

emojiButton.addEventListener("click", () => {
  let taskAssignNumber = document.getElementById("task-assign-number");
  let currentAssignedNumber = taskAssignNumber.innerText;

  let navNumber = document.getElementById("nav-number");
  let currentNavNumber = navNumber.innerText;

  //i
  alert("board updated successfully");

  //ii
  taskAssignNumber.innerText = Number(currentAssignedNumber) - 1;

  //iii
  navNumber.innerText = Number(currentNavNumber) + 1;

  // iv
  emojiButton.setAttribute("disabled", "true");

  // v
  let emoji = document.getElementById("emojiH1").innerText;

  let container = document.getElementById("aside-container");

  let newMessage = document.createElement("p");
  newMessage.textContent = `You have completed the task ${emoji} at ${new Date().toLocaleString()}.`;
  newMessage.style.padding = "20px"
    newMessage.style.borderBottom = "2px solid black"
  container.appendChild(newMessage);
});

// google button (card-5)
let googleButton = document.getElementById("google");

googleButton.addEventListener("click", () => {
  let taskAssignNumber = document.getElementById("task-assign-number");
  let currentAssignedNumber = taskAssignNumber.innerText;

  let navNumber = document.getElementById("nav-number");
  let currentNavNumber = navNumber.innerText;

  //i
  alert("board updated successfully");

  //ii
  taskAssignNumber.innerText = Number(currentAssignedNumber) - 1;

  //iii
  navNumber.innerText = Number(currentNavNumber) + 1;

  // iv
  googleButton.setAttribute("disabled", "true");

  // v
  let google = document.getElementById("googleH1").innerText;

  let container = document.getElementById("aside-container");

  let newMessage = document.createElement("p");
  newMessage.textContent = `You have completed the task ${google} at ${new Date().toLocaleString()}.`;
  newMessage.style.padding = "20px"
    newMessage.style.borderBottom = "2px solid black"
  container.appendChild(newMessage);
});

// glassdoar button (card-6)
let glassdoarButton = document.getElementById("glassDoar");

glassdoarButton.addEventListener("click", () => {
  let taskAssignNumber = document.getElementById("task-assign-number");
  let currentAssignedNumber = taskAssignNumber.innerText;

  let navNumber = document.getElementById("nav-number");
  let currentNavNumber = navNumber.innerText;

  //i
  alert("board updated successfully");

  //ii
  taskAssignNumber.innerText = Number(currentAssignedNumber) - 1;

  //iii
  navNumber.innerText = Number(currentNavNumber) + 1;

  // iv
  glassdoarButton.setAttribute("disabled", "true");

  // v
  let glassDoar = document.getElementById("glassDoarH1").innerText;

  let container = document.getElementById("aside-container");

  let newMessage = document.createElement("p");
  newMessage.textContent = `You have completed the task ${glassDoar} at ${new Date().toLocaleString()}.`;
  newMessage.style.padding = "20px"
    newMessage.style.borderBottom = "2px solid black"
  container.appendChild(newMessage);
});




