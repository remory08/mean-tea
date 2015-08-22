var app = angular.module("meanTea", ['ngRoute']);

function configFn($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/allTeas.html',
    })
    .when('/checkout', {
      templateUrl: 'partials/shoppingCart.html',
    })
    .otherwise({
      redirectTo: '/'
    })
}

app.config(  ['$routeProvider', '$locationProvider', configFn])
