app.controller("getTeas", function($scope, $http) {
  $scope.totalItems = 0;
  $scope.cartEdit = false;
  $scope.cart = [];
  $http.get('teaData.json').then(function(data) {
    $scope.teaData = data.data;
    $scope.teaData.forEach(function(tea) {
      tea.price = tea.price/100;
      tea.quantity = 0;
    })
  })
  $scope.addToBag = function(tea, quantity) {
    if (quantity === undefined) {
      quantity = 1;
    }
    tea.quantity = quantity;
    $scope.totalItems = $scope.totalItems + parseInt(quantity)
    $scope.cart.push(tea)
  }


  $scope.save = function(newQuantity) {
    this.cartEdit = false;
    this.tea.quantity = newQuantity;
  }

// app.controller("cart", function() {
//
 })
