const newSetWithAddMethod = new Set();
newSetWithAddMethod.add('1');
newSetWithAddMethod.add('2');
newSetWithAddMethod.add('3');

// newSetWithAddMethod.forEach((val) => console.log(val));

const newSetWithArray = new Set([1, 2, 3, 4, 5]);

newSetWithArray.forEach((val) => console.log(val));

newSetWithArray.delete(1);
