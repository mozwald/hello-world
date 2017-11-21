var myArray = [
  'blue',
  'brown',
  'sepia',
];
var item;
for (var i = 0; i < myArray.length; i++) {
  item = myArray[i];
  if (item === 'blue') {
    console.log(item);
  } else {
    console.log('not blue!');
  }
}
