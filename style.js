// var items = [
//   {Item: "Bread", Price:3.00},
//   {Item: "Bananas"},
//   {Item: "Milk"},
//   {Item: "Waffels"},
//   {Item: "Vitamins"},
// ];
var items = [];
//var itemName = ["Bread", "Bananas","Milk","Waffels","Vitamins" ];
//var itemPrice = [2.99, 1.50, 3.00, 2.49, 10.50];
var itemPrice = [];


function addItem(item, price) {
  // for (var i = 0; i < itemPrice.length; i++) {
    items.push(item);
    itemPrice.push(price);
    console.log(items + " " + itemPrice);
  //}
  // console.log(items);
}

var sum = 0;
function sumOfItems(){
  for (var i = 0; i < itemPrice.length; i++) {
    document.write(items[i] + " " + itemPrice[i].toFixed(2) + "Total: ");
    document.write(sum = sum + itemPrice[i]);
  //console.log();
}
}
