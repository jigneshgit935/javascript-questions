console.log('1');
console.log('2');
setTimeout(() => console.log('3'), 1000);
setTimeout(() => console.log('4'), 5000);
console.log('5');

// javascript-script-engines , asynschronos concepts
// set timeout is an asynchronos function   == js engine does not execute
// js runtime executes asynchronos set timeout
// in js runtime k andr ek concept which we call it webapi ,which handles our asynchronus request
