function doSomethingWithItems(items) {

  var value = 10;
  var result = value + 10;

  for (var i = 0, len = items.length; i < len; i++) {
    doSomething(items[i]);
  }
}
