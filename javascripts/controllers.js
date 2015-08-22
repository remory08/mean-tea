app.controller("getTeas", function($scope, $http) {
  $http.get('teaData.json').then(function(data) {
    $scope.teaData = data.data;
    $scope.teaData.forEach(function(tea) {
      tea.price = tea.price/100;
    })
  })
})

app.controller("cart", function() {
  
})
