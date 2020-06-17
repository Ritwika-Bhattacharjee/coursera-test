(function () {
'use strict';

angular.module('data')
.controller('itemsListController', itemsListController);


// itemsListController.$inject = ['ShoppingListService'];
// function itemsListController(ShoppingListService) {
itemsListController.$inject = ['items'];
function itemsListController(items) {
  var itemCtrl = this;
  itemCtrl.items = items;

  // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
}

})();
