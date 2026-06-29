// =========================
// PRODUKTE
// =========================

const products = [
    {
        name: "Produkt 1",
        brand: "Marke",
        category: "Kategorie",
        price: "Preis",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com",
        badge: "HOT"
    },
    {
        name: "Produkt 2",
        brand: "Marke",
        category: "Kategorie",
        price: "Preis",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com",
        badge: "NEW"
    },
    {
        name: "Produkt 3",
        brand: "Marke",
        category: "Kategorie",
        price: "Preis",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com"
    },
    {
        name: "Produkt 4",
        brand: "Marke",
        category: "Kategorie",
        price: "Preis",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com"
    },
    {
        name: "Produkt 5",
        brand: "Marke",
        category: "Kategorie",
        price: "Preis",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com"
    },
    {
        name: "Produkt 6",
        brand: "Marke",
        category: "Kategorie",
        price: "Preis",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com"
    },
    {
        name: "Produkt 7",
        brand: "Marke",
        category: "Kategorie",
        price: "Preis",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com"
    },
    {
        name: "Produkt 8",
        brand: "Marke",
        category: "Kategorie",
        price: "Preis",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com"
    },
    {
        name: "Produkt 9",
        brand: "Marke",
        category: "Kategorie",
        price: "Preis",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com"
    },
    {
        name: "Produkt 10",
        brand: "Marke",
        category: "Kategorie",
        price: "Preis",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com"
    },
    {
        name: "Produkt 11",
        brand: "Marke",
        category: "Kategorie",
        price: "Preis",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com"
    },
    {
        name: "Produkt 12",
        brand: "Marke",
        category: "Kategorie",
        price: "Preis",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com"
    },
    {
        name: "Produkt 13",
        brand: "Marke",
        category: "Kategorie",
        price: "Preis",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com"
    },
    {
        name: "Produkt 14",
        brand: "Marke",
        category: "Kategorie",
        price: "Preis",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com"
    },
    {
        name: "Produkt 15",
        brand: "Marke",
        category: "Kategorie",
        price: "Preis",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com"
    }
];


// =========================
// PRODUKTE ANZEIGEN
// =========================

const grid = document.getElementById("productGrid");

function renderProducts(list) {

    grid.innerHTML = "";

    list.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <div class="price">
                ${product.brand} • ${product.category}<br>
                ab ${product.price}
            </div>

            <a href="${product.link}" target="_blank" class="product-btn">
                Zum Produkt →
            </a>
        `;

        grid.appendChild(card);
    });

}


// =========================
// SUCHE
// =========================

function searchItems() {

    const input = document.getElementById("searchInput").value.toLowerCase();

    const filtered = products.filter(product =>

        product.name.toLowerCase().includes(input) ||

        product.brand.toLowerCase().includes(input) ||

        product.category.toLowerCase().includes(input)

    );

    renderProducts(filtered);

}


// =========================
// START
// =========================

renderProducts(products);
