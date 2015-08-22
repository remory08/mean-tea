app.controller("getTeas", function($scope, $http) {
  $scope.totalItems = 0;
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
    console.log(tea);
    $scope.cart.push(tea)
    console.log($scope.cart);
  }
})

// app.controller("cart", function() {
//
// })
