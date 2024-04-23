const content = document.querySelector(".content");
const h1=document.createElement("h1");

const img = document.createElement("img");
img.src = "https://images.unsplash.com/photo-1599250300435-b9693f21830d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnV8ZW58MHwwfDB8fHww";
h1.innerText="This is Menu Page";
export function createMenuPage() {
    content.innerText = ""; // Clear the content before adding new elements
    content.appendChild(h1);
    content.appendChild(img);

}