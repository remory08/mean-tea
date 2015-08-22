app.controller("getTeas", function($scope, $http) {
  $scope.totalItems = 0;
  $scope.cartEdit = false;
  $scope.cart = [];
  $scope.total = 0;

  $scope.orderTotal = function () {
    $scope.total = 0;
    for (var i = 0; i < $scope.cart.length; i++) {
      var item = $scope.cart[i];
      $scope.total += item.quantity * item.price
    }
  }

  $http.get('teaData.json').then(function(data) {
    $scope.teaData = data.data;
    $scope.teaData.forEach(function(tea) {
      tea.price = tea.price/100;
      tea.quantity = 0;
    })
  })

  $scope.addToBag = function(tea, quantity) {
    console.log(this.tea.$$hashKey);
    //need to handle duplicates to match the hashkey
    if (quantity === undefined) {
      quantity = 1;
    }
    tea.quantity = quantity;
    $scope.totalItems = $scope.totalItems + parseInt(quantity)
    $scope.cart.push(tea)
    $scope.orderTotal();
  }

  $scope.save = function(newQuantity) {
    this.cartEdit = false;
    $scope.totalItems = $scope.totalItems - parseInt(this.tea.quantity);
    $scope.totalItems = $scope.totalItems + newQuantity;
    this.tea.quantity = newQuantity;
    $scope.orderTotal();
  }

  $scope.remove = function () {
    for (i=0; i < $scope.cart.length; i++) {
      var x = $scope.cart[i]
      if (x._id === this.tea._id) {
        $scope.cart.splice(i, 1)
        $scope.totalItems = $scope.totalItems - parseInt(this.tea.quantity);
      }
    }
    $scope.orderTotal();
  }

  $scope.clearCart = function () {
    $scope.cart = [];
    $scope.total = 0;
    $scope.totalItems = 0;
  }

 })
