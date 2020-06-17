(function () {
'use strict';

angular.module('data')
.controller('CategoriesListController', CategoriesListController);


// CategoriesListController.$inject = ['ShoppingListService'];
// function CategoriesListController(ShoppingListService) {
CategoriesListController.$inject = ['categories'];
function CategoriesListController(categories) {
  var categoryCtrl = this;
  categoryCtrl.categories = categories;

  // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
}

})();
