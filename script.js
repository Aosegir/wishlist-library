// array that stores wishlist item objects
let wishlist = [];

// wishlist item object
function item(name, price, isPurchased) {
    this.name = name;
    this.price = price;
    this.isPurchased = isPurchased;
};

// DOM wishlist container div that will store the items visually
const wishlistContainer = document.getElementById('wishlist-container');

