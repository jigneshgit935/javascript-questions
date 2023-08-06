// Hoisting= it is js concept , jo variable declaration and functions ko top pr move krdeta h - to the top of the scopee
// hoisting concept works with only var, not with let and const
// var
// let
// const

// example 1
// {var name = 'Jignesh Sharma';
// var name = 'Jinu Sharma';
// console.log(name)};

// example 2

//We have 2 hoisting ,  one is partially hoisted and second one is fully hoisted = var we have are partially hoisted and functions we have fully hoisted
// 1.Partially , it moves var to top and assigned it to undefined
// 2.Fully , it moves  to top and assigned the actual value under functions

// {console.log(name());
// function name() {
//   console.log('Sharma jignesh');
//   return true;
// }

// example 3

// console.log(name());
// (function name() {
//   console.log('Sharma jignesh');
//   return true;
// });

// its output will give us error , that name is not a function ,becouse it doesnt found function,hoisting want a function should be a start at any cost
// it means line ka first word should be function but we have assigned () this bracket  or any const, is this hoisting will not work anyway, so its showing us error

// example 4

// when we declare any function into an variable we call it function expression

// console.log(name());
// const name = () => {
//   console.log('Jinu sharma');
// };

// console.log(name);
// var name = () => {   this will give us undefined becoz we have a var as a variable, becoz it is a partially hoisted
//   console.log('Jinu sharma');
// };

// here even if we put var let const , it will give us error becoz hoisting requires function word should be
