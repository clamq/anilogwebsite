/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const ONE_PIECE_URL =
  "https://preview.redd.it/if-u-had-to-describe-luffy-in-one-sentence-what-would-that-v0-73l9fu17ynbf1.jpeg?width=640&crop=smart&auto=webp&s=5bd8d9713dda742e75c19b0604ff21fa6129e831";
const MOB_PSYCHO_100_URL =
  "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/mobpsycho100.png";
const DR_STONE_URL =
  "https://substackcdn.com/image/fetch/$s_!zKdV!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7b606a04-48f4-48a4-8551-a715e4823dec_425x600.jpeg";
  const STEINS_GATE_URL =
  "https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg";
  const VINLAND_SAGA_URL =
  "https://substackcdn.com/image/fetch/$s_!SqGk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F48f29ebe-ad6d-422e-9be1-21834a3d7b46_640x918.jpeg";

  const REZE_URL =
  "https://preview.redd.it/chainsaw-man-the-movie-reze-arc-new-key-visual-v0-4wz87x2oz0tf1.jpeg?width=640&crop=smart&auto=webp&s=5c8e786e72bb9d3747fc7b0f0564d107a822a516";
  const MARIO_GALAXY_URL =
  "https://www.santacruzcinema.com/wp-content/uploads/sites/2/2026/01/HO00002126.jpeg?w=1213";
  const PROJECT_HAIL_MARY_URL =
  "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/122/2026/02/09153701/1Sheet_Hero_DOM_AW_ProjectHailMary-copy-scaled.jpeg";
  const SPIDERVERSE_URL =
  "https://loyolamaroon.com/wp-content/uploads/2023/09/Across-the-Spiderverse-IMDb.jpeg";



// Array of TV shows with titles and image URLs
let shows = [
  { title: "One Piece", imageURL: ONE_PIECE_URL, score: 10.0, status: "Watching"},
  { title: "Mob Psycho 100", imageURL: MOB_PSYCHO_100_URL, score: 9.5, status: "Completed" },
  { title: "Dr. Stone", imageURL: DR_STONE_URL, score: 8.8, status: "Watching" },
  { title: "Steins; Gate", imageURL: STEINS_GATE_URL, score: 9.8, status: "Completed" }, 
  { title: "Vinland Saga", imageURL: VINLAND_SAGA_URL, score: 9.2, status: "Completed", }, 
];

let recentlyWatched = [
  { title: "Chainsaw Man: Reze Movie", imageURL: REZE_URL, score: 8.4, status: "Completed"},
  { title: "Super Mario Galaxy", imageURL: MARIO_GALAXY_URL, score: 7.2, status: "Completed"},
  { title: "Project Hail Mary", imageURL: PROJECT_HAIL_MARY_URL, score: 8.6, status: "Completed" },
   { title: "Spider-Man: Across the Spider-Verse", imageURL: SPIDERVERSE_URL, score: 8.5, status: "Completed"},
];

// This function adds cards to the page to display the data in the array
function showCards(data = shows) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear previous cards

  const templateCard = document.querySelector(".card");
  if (!templateCard) {
    console.error("Template card not found in HTML!");
    return;
  }

  for (let i = 0; i < data.length; i++) {
    let { title, imageURL, score, status} = data[i];

    // Fallback image if none provided
    imageURL = imageURL || "https://via.placeholder.com/340";

    const nextCard = templateCard.cloneNode(true); // Copy the template
    editCardContent(nextCard, title, imageURL, score, status); // Set title and image
    cardContainer.appendChild(nextCard); // Add card to container
  }
}

function showRecentCards(data = recentlyWatched) {
  const recentContainer = document.getElementById("recent-card-container");
  recentContainer.innerHTML = "";

  const templateCard = document.querySelector(".card");

  for (let i = 0; i < data.length; i++) {
    let { title, imageURL, score, status } = data[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, title, imageURL, score, status);
    recentContainer.appendChild(nextCard);
  }
}

// Helper function to update a single card
function editCardContent(card, newTitle, newImageURL, newScore, newStatus) {
  card.style.display = "block"; // Make the cloned card visible

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // score
  const listItems = card.querySelectorAll("li");
  listItems[0].textContent = "Score: " + newScore + " / 10";
  listItems[1].textContent = "Status: " + newStatus;

  // color of status
const statusText = newStatus.toLowerCase().replace(/\s+/g, '-');
listItems[1].className = `status-${statusText}`;

  console.log("Added card:", newTitle);
}

// Called when the page loads
document.addEventListener("DOMContentLoaded", () => {
  showCards();
  showRecentCards();
});

// Example button function
function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

// Remove the last card from the array and refresh the display
function removeLastCard() {
  shows.pop(); // Remove last item
  showCards(); // Refresh cards
}

// Optional: Add a new card dynamically
function addCard(title, imageURL) {
  shows.push({ title, imageURL });
  showCards();
}

function sortByScore() {
  const order = document.getElementById("score-filter").value;

  const sortedShows = [...shows].sort((a, b) =>
    order === "asc" ? a.score - b.score : b.score - a.score
  );
  const sortedRecent = [...recentlyWatched].sort((a, b) =>
    order === "asc" ? a.score - b.score : b.score - a.score
  );

  showCards(sortedShows);
  showRecentCards(sortedRecent);
}

function filterByStatus() {
  const selected = document.getElementById("status-filter").value;

  const filteredShows = selected === "all" ? shows : shows.filter(s => s.status === selected);
  const filteredRecent = selected === "all" ? recentlyWatched : recentlyWatched.filter(s => s.status === selected);

  showCards(filteredShows);
  showRecentCards(filteredRecent);
}