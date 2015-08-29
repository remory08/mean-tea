app.directive('caffeineMeter', function() {
  return {
    templateUrl: 'partials/caffeine-gauge.html',
      scope: {
        caffeinemg: '@'
      }
  }
})
