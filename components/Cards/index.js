// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

// Create the entry point to attach articles
const articles = document.querySelector(".cards-container");

// Get info for API and create every article for each topic
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(function (response) {
    const articlesObject = response.data.articles;
    const articleTopicsArray = Object.keys(articlesObject);
    articleTopicsArray.forEach((articleTopic) => {
      const topicArticles = articlesObject[articleTopic];
      topicArticles.forEach((article) => {
        const newArticle = createArticle(article);
        articles.appendChild(newArticle);
      });
    });
  })
  .catch(function (error) {
    console.log("There's an error somewhere: ", error);
  });

// Create an Article-making machine
function createArticle(articleObject) {
  // Grab the elements from the articleObject parameter and save for later
  const headline = articleObject.headline;
  const authorName = articleObject.authorName;
  const authorPhoto = articleObject.authorPhoto;

  // Create HTML elements where data is going to be placed
  const articleDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const authorImageDiv = document.createElement("div");
  const authorImage = document.createElement("img");
  const authorNameSpan = document.createElement("span");

  // Add corresponding classes to each element
  articleDiv.classList.add(".card");
  headlineDiv.classList.add(".headline");
  authorDiv.classList.add(".author");
  authorImageDiv.classList.add(".img-container");

  // Nest HTML elements appropriately
  articleDiv.appendChild(headlineDiv);
  articleDiv.appendChild(authorDiv);
  authorDiv.appendChild(authorImageDiv);
  authorDiv.appendChild(authorNameSpan);
  authorImageDiv.appendChild(authorImage);

  // Insert text in the correct places
  headlineDiv.textContent = headline;
  authorImage.src = authorPhoto;
  authorNameSpan.textContent = `By ${authorName}`;

  return articleDiv;
}

// Test the component is working
// const testArticle = {
//   headline: "Emilio's headline",
//   authorName: "Emilio the Author",
//   authorPhoto: "https://picsum.photos/200",
// };
