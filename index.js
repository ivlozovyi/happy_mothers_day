var overlay = document.querySelector(".overlay");
var notification = document.querySelector(".notification");
var openButton = document.querySelector("#openBtn");
var notificationText = document.querySelector(".notification p");
var notificationButton = document.querySelector(".notification a");
var giftIcon = document.querySelector(".giftIcon");
var giftIconTop = document.querySelector("#giftIconTop");
var giftMessage = document.querySelector(".giftMessage");

setTimeout(() => {
  notification.classList.remove("hidden");
}, 3500);

openBtn.addEventListener("click", async function() {
  // When button is clicked
  notificationText.classList.add("hidden");
  notificationButton.classList.add("hidden");
  await delay(100);
  notification.classList.add("animate");
  giftIcon.classList.add("animate");
  
  await delay(500);
 
  giftIconTop.classList.add("open");
    
  await delay(100);
  
  overlay.classList.remove("hidden");
  
  await delay(200);
  
  giftMessage.classList.remove("hidden");
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}