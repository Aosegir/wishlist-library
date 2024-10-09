// array that stores wishlist item objects
let wishlist = [];

// wishlist item object
function Item(name, price, isPurchased) {
    this.name = name;
    this.price = price;
    this.isPurchased = isPurchased;
};

// DOM wishlist container div that will store the items visually
const wishlistContainer = document.getElementById('wishlist-container');

// create button that will be used to add items
const create = document.getElementById('create');

// event listener that will look for form items when clicked and add item if able
create.addEventListener('click', () => {
    event.preventDefault();
    if(create.parentElement[0].value && create.parentElement[1].value) {
        let newItem = new Item(create.parentElement[0].value, create.parentElement[1].value, false);
        create.parentElement[0].value = '';
        create.parentElement[1].value = '';
        wishlist.push(newItem);
        populateWishlist(wishlist);
    } else {
        console.log("error: You need to input values for the item!");
    };
});

// function that will populate the page with wishlist items
function populateWishlist(wishArray) {
    emptyWishlistContainer();

    for(let obj of wishArray) {
        let wishDiv = document.createElement('div');
        let wishName = document.createElement('h3');
        let wishPrice = document.createElement('h5');
        let buy = document.createElement('button');

        wishName.innerHTML = obj.name;
        wishPrice.innerHTML = obj.price;
        buy.innerHTML = "Bought!";

        wishDiv.appendChild(wishName);
        wishDiv.appendChild(wishPrice);
        wishDiv.appendChild(buy);

        wishDiv.classList.add('wishlist-item');

        wishlistContainer.appendChild(wishDiv);
    };
};

// function that will empty duplicate entries to the wishlist
function emptyWishlistContainer() {
    console.log("Hello Odin");
    while(wishlistContainer.contains(wishlistContainer.lastChild)) {
        console.log("Heyo");
        wishlistContainer.lastChild.remove();
    };
};