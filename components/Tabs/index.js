// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// Grab the entry point div we're going to attach the new topics
const trendingTopics = document.querySelector(".topics");

// Get the data and create a tab for each topic
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then((response) => {
    const topics = response.data.topics;
    topics.forEach((topic) => {
      trendingTopics.appendChild(createTab(topic));
    });
  })
  .catch((error) => {
    console.log("There's an error: ", error);
  });

// Create a Tab-making machine
function createTab(tabName) {
  // Create the HTML elements
  const tabDiv = document.createElement("div");

  // Match the corresponding class
  tabDiv.classList.add("tab");

  // Add the data inside the tab
  tabDiv.textContent = tabName;

  return tabDiv;
}
