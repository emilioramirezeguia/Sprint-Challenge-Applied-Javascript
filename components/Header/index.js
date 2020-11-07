// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  // Create the HTML elements
  const headerDiv = document.createElement("div");
  const dateSpan = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const tempSpan = document.createElement("span");

  // Attach the appropriate classes to each element
  headerDiv.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  // Nest elements appropriately to match example above
  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(headerTitle);
  headerDiv.appendChild(tempSpan);

  // Insert text in their corresponding places
  dateSpan.textContent = "MARCH 28, 2019";
  headerTitle.textContent = "Lambda Times";
  tempSpan.textContent = "98°";

  return headerDiv;
}

// Create the header by calling the function and saving it to a reusable variable
const header = Header();

// Grab the entry div where we'll attach the created header
const headerContainer = document.querySelector(".header-container");

// Append that header to the entry div
headerContainer.appendChild(header);
