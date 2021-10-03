/*---------------Event Handler Change Bg Color----------- */

let sayGoodMorning = () => {
  let h1Tag = document.querySelector("#msg-1");
  h1Tag.innerText = "Good Morning";
  h1Tag.style.padding = "15px";
  h1Tag.style.backgroundColor = "red";
};
// sayGoodMorning();// once sript get loaded 

let sayGoodAfternoon = () => {
  let h1Tag = document.querySelector("#msg-1");
  h1Tag.innerText = "Good Afternoon";
  h1Tag.style.padding = "15px";
  h1Tag.style.backgroundColor = "Blue";
};

// sayGoodAfternoon();

let sayGoodEvening = () => {
  let h1Tag = document.querySelector("#msg-1");
  h1Tag.innerText = "Good Evening";
  h1Tag.style.padding = "15px";
  h1Tag.style.backgroundColor = "Green";
};
// sayGoodEvening();

let sayGoodNight = () => {
  let h1Tag = document.querySelector("#msg-1");
  h1Tag.innerText = "Good Night";
  h1Tag.style.padding = "15px";
  h1Tag.style.backgroundColor = "Yellow";
};
// sayGoodNight();