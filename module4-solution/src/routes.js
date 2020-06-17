/*(function () {
'use strict';

angular.module('ShoppingList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      items: ['ShoppingListService', function (ShoppingListService) {
        return ShoppingListService.getItems();
      }]
    }
  })

  //state for showing clickable item description
  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    controller: 'itemDetailController as itemdetail',
    resolve: {
      item: ['$stateParams', 'ShoppingListService',
            function($stateParams, ShoppingListService){
              return ShoppingListService.getItems()
              .then(function(items){
                return items[$stateParams.itemId];
              });
            }]
    }
  });

  //using itemDetail as nested view
  
}

})();
*/

(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/Data/templates/home.template.html'
  })

  // Premade list page
  .state('CategoriesList', {
    url: '/categories',
    templateUrl: 'src/Data/templates/main-category.template.html',
    controller: 'CategoriesListController as categoryCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
        .then(function(result){
          return result.data;
        });
      }]
    }
  })

  //state for showing clickable item description
  .state('itemsList', {
    url: '/items/{shortname}',
    templateUrl: 'src/Data/templates/main-menuitems.template.html',
    controller: 'itemsListController as itemCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function($stateParams, MenuDataService){
              return MenuDataService.getItemsForCategory($stateParams.shortname)
              .then(function(result){
                return result.data.menu_items;
              });
            }]
    }
  });

  //using itemDetail as nested view
  
}

})();
