// invite button
const addGuestButton = document.querySelector(".invite");

// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");

// text input box
const guestInput = document.querySelector(".add-guest input");

// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");

// span class for number of guests attending
const guestCount = document.querySelector(".attendance");

// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

// button to click to assign items
const assignButton = document.querySelector(".assign");

// unordered list where assigned items are displayed
const assignedItems = document.querySelector(".assigned-items");

// event listener for "add guest" button
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;

  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

// clear input box after inviting a guest
const clearInput = function () {
  guestInput.value = "";
};

// function to add guest to list
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

// limit guest invites
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");

  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

// assign dishes to guests
const assignItems = function () {
  // create array of dishes
  const potluckItems = [
    "potato salad",
    "hummus",
    "fruit",
    "cookies",
    "baguette",
    "cheese",
    "sparkling water",
    "chips",
    "charcuterie",
    "salsa",
    "carrot sticks",
    "lemonade"
  ];
  // create list of all invited guests
  const allGuests = document.querySelectorAll(".guest-list li");

  // loop through guest list and assign a random dish
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} - ${randomPotluckItem}`;

    // add the assigned dish to the list
    assignedItems.append(listItem);

    // remove the random dish from the array to prevent double assignments
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

// add click event to assign dishes button
assignButton.addEventListener("click", function () {
  assignItems();

  // disable button after it is clicked
  assignButton.disabled = true;
});
