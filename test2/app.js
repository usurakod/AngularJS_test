(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.inject = ["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService){
  var list1 = this;
  list1.items = ShoppingListCheckOffService.getItems();

  list1.deleteItem = function(itemIndex){
    ShoppingListCheckOffService.deleteItem(itemIndex);
  };
  list1.message = function(){
    return (list1.items == "");
  }
}

AlreadyBoughtController.inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var list2 = this;
  list2.boughtList = ShoppingListCheckOffService.bought;
  list2.message = function(){
    return (list2.boughtList == "");
  };
}

  function ShoppingListCheckOffService(){
    var service = this;
    service.toBuy = [];
    service.bought = [];
    var item;
    service.myItem = [
         {name: "chocolates", quantity: 1},
         {name: "cookies", quantity: 1},
         {name: "pens", quantity: 2},
         {name: "books", quantity: 2},
         {name: "laptops", quantity: 3},
         {name: "pencils", quantity: 3}];

   service.getItems = function(){
     service.toBuy = service.myItem;
     return service.toBuy;
   };
   service.deleteItem = function(itemIndex){
     var itemBought = service.toBuy.splice(itemIndex,1)[0];
     service.bought.push(itemBought);
     return service.bought;
   };
  }

})();
