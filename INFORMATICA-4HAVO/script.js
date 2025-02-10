const searchInputWrapper = document.querySelector(".search-input-wrapper");
const searchInput = document.querySelector(".search-input input");
const searchIcon = document.querySelector(".search-icon i");
const closeIcon = document.querySelector(".search-input i ");

searchIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.add("change");
  searchInputWrapper.classList.add("change");

  setTimeout(() => {
    searchInput.focus();
  }, 1000);
});

closeIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.remove("change");
  searchInputWrapper.classList.remove("change");
});
// Controleer of er items in localStorage staan
let items = JSON.parse(localStorage.getItem('items')) || [
];

// Functie om de lijst van items weer te geven op de homepagina
function displayItems(filteredItems) {
  const itemListElement = document.getElementById('item-list');
  itemListElement.innerHTML = ''; // Clear the list before updating

  filteredItems.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.classList.add('item');
      listItem.innerHTML = `
          <strong>${item.name}</strong> (${item.type}): ${item.description}
          <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      `;
      itemListElement.appendChild(listItem);
  });
}


// Zoekfunctie om de items te filteren op naam
function searchItems() {
    const input = document.getElementById('search').value.toLowerCase();
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(input));

    // Maak de lijst opnieuw met gefilterde items
    displayItems(filteredItems);
}

// Functie om een nieuw item toe te voegen
function addItem(event) {
    event.preventDefault(); // Voorkom dat het formulier zichzelf verstuurt

    const name = document.getElementById('item-name').value;
    const type = document.getElementById('item-type').value;
    const description = document.getElementById('item-description').value;

    // Maak een nieuw item object
    const newItem = { name, type, description };

    // Voeg het nieuwe item toe aan de items array
    items.push(newItem);

    // Sla de items op in localStorage
    localStorage.setItem('items', JSON.stringify(items));

    // Wis het formulier
    document.getElementById('item-form').reset();

    // Werk de lijst opnieuw bij
    displayItems(items);
}

// Toon de items wanneer de pagina laadt (alle items bij de eerste keer)
window.onload = () => {
    displayItems(items); // Toon alle items bij de eerste keer
};

// Functie om boeken te verwijderen
function removeItem(index) {
  items.splice(index, 1); // Remove item from array
  localStorage.setItem('items', JSON.stringify(items)); // Update localStorage
  displayItems(items); // Refresh list
}
