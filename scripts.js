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

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const MOB_PSYCHO_100_URL =
  "https://kommodo.ai/i/2f4uYNn8gmm2TkKjg8mu";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// Array of TV shows with titles and image URLs
let shows = [
  { title: "One Piece", imageURL: FRESH_PRINCE_URL },
  { title: "Mob Psycho 100", imageURL: MOB_PSYCHO_100_URL },
  { title: "Dr. Stone", imageURL: EAST_LOS_HIGH_POSTER_URL },
  { title: "Steins; Gate", imageURL: "" }, // fallback will be used
  { title: "Vinland Saga", imageURL: "" }, // fallback will be used
];

// This function adds cards to the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear previous cards

  const templateCard = document.querySelector(".card");
  if (!templateCard) {
    console.error("Template card not found in HTML!");
    return;
  }

  for (let i = 0; i < shows.length; i++) {
    let { title, imageURL } = shows[i];

    // Fallback image if none provided
    imageURL = imageURL || "https://via.placeholder.com/340";

    const nextCard = templateCard.cloneNode(true); // Copy the template
    editCardContent(nextCard, title, imageURL); // Set title and image
    cardContainer.appendChild(nextCard); // Add card to container
  }
}

// Helper function to update a single card
function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block"; // Make the cloned card visible

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  console.log("Added card:", newTitle);
}

// Called when the page loads
document.addEventListener("DOMContentLoaded", showCards);

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