const content = document.querySelector(".content");
const h1 = document.createElement("h1");
const img = document.createElement("img");
img.src = "https://plus.unsplash.com/premium_photo-1675344317686-118cc9f89f8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGhvbWVwYWdlfGVufDB8fDB8fHww"; // Set the src attribute correctly
h1.innerText = "This is Home Page";

export function createHomePage() {
  content.innerText = ""; // Clear the content before adding new elements
  content.appendChild(h1);
  content.appendChild(img);
}
