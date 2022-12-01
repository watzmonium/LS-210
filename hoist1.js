// let a = 'outer';

// function testScope() {
//   a = 'inner';
//   console.log(a);
// }

// console.log(a); outer
// testScope(); inner
// console.log(a); outer

let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  let shop2 = function() {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);
  };

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();