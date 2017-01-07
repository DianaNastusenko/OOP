//Create class Item
function Item(place, price, weight) {
    this.place = place;
    this.price = price;
    this.weight = weight;
}

//Set value
function setPlace(arrayPlace) {
    var place = arrayPlace[Math.floor(Math.random() * (arrayPlace.length))];
    return place;
}

function setPrice() {
    var price = Math.floor(Math.random() * 100);
    return price;
}

function setWeight() {
    var weight = Math.floor(Math.random() * 10);
    return weight;
}

//Get value
Item.prototype.getPrice = function() {
    return this.price;
}
Item.prototype.getWeight = function() {
    return this.weight;
}

//Create items
function generate() {
    var arrayItem = [];
    var arrayPlace = ['food', 'drink', 'clothes', 'bakery', 'toys', 'tools'];
    var arrayPrice = [];
    var arrayWeight = [];
    var sumbill = 0;
    for (var i = 0; i < 15; i++) {
        var item = new Item(setPlace(arrayPlace), setPrice(), setWeight());
        arrayPrice.push(item.getPrice());
        arrayWeight.push(item.getWeight());
        console.log(item);
        sumbill += item.getPrice();
    }
    console.log('Price of each item: ' + arrayPrice);
    console.log('Weight of each item: ' + arrayWeight);
    console.log('Total spend: ' + sumbill);
};

generate();