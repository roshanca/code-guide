var values = [1, 2, 3, 4, 5, 6, 7];
var i = 0;
var len;

for (i = 0, len = values.length; i < len; i++) {
  process(values[i]);
}

var prop;

for (prop in object) {
  if (object.hasOwnProperty(prop)) {
    console.log('Property name is ' + prop);
    console.log('Property value is ' + object[prop]);
  }
}

