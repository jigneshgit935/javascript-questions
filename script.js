// hoisting a  javascript mechansim
// two phase one is (creation) where we declare all (hoisting is done in creation phase where js compiler see all the declaration) and second is (execution) where our code runs

// example 1
// console.log(name);
// name = 'Junu sharma';

// example 2
// var name = 'Jinu';
// console.log(name);
// var name = 'Sharma';
// console.log(name);

// example 3
// var name = undefined;
// name = 'Jinu';
// console.log(name);
// name = 'Sharma';
// console.log(name);

// example 4

// var name = 'Jinu';
// var name = 'Sharma';
// console.log(name);

// example 5

// var name = 'Jinu';
// let name = 'Sharma';
// console.log(name);

// it will give us error becoz of let

// example 6
// name();
// function name() {
//   console.log('Jignesh');
// }

// example 7
// name();
// function name() {
//   console.log('Jignesh');
// }

// name();
// function name() {
//   console.log('Sharma');
// }

// example 8
// function name() {
//   console.log('Jignesh');
// }

// function name() {
//   console.log('Sharma');
// }
// name();

// example 9
// function name() {
//   console.log('Jignesh');
// }
// name();

// function name() {
//   console.log('Sharma');
// }
// name();

// example 10
function name() {
  console.log('Jignesh');
}

function name() {
  console.log('Sharma');
}
name();
name();
