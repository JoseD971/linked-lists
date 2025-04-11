import LinkedList from './script.js';

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.size());
console.log(list.insertAt("monkey", 1));
console.log(list.toString());
console.log(list.size());
console.log(list.removeAt(0));
console.log(list.toString());
console.log(list.size());