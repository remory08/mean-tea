app.filter ('inStock', function() {
  return function (input) {
    input = input || ''
    if (input === true) {
      input = 'Yes'
    }
    else {
      input = 'No'
    }
    return input
  }
})
