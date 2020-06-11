(function(){
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var buy = this;

		buy.buyList = ShoppingListCheckOffService.getBuyList();

		buy.removeItem = function(itemIndex){
			ShoppingListCheckOffService.removeItem(itemIndex);
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){

		var bought = this;

		bought.boughtList = ShoppingListCheckOffService.getBoughtList();

	}

	function ShoppingListCheckOffService(){
		var service = this;

		var tobuyArray = [
		  {
		    name: "Apples",
		    quantity: "2"
		  },
		  {
		    name: "Donuts",
		    quantity: "200"
		  },
		  {
		    name: "Cookies",
		    quantity: "300"
		  },
		  {
		    name: "Chocolate",
		    quantity: "5"
		  },
		  {
		    name: "Pizzas",
		    quantity: "10"
		  }
		];
		var boughtArray = [];

		service.removeItem = function(itemIndex){
			boughtArray.push(tobuyArray[itemIndex]);
			tobuyArray.splice(itemIndex, 1);
		}

		service.getBuyList = function(){
			return tobuyArray;
		}

		service.getBoughtList = function(){
			return boughtArray;
		}
	}


})();