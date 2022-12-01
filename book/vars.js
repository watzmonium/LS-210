function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

vars: bar, arg1, arg2, foo, qux, result
  C

object_props: abc, def, ghi, jkl, mno, pqr 0-3 for arr indexes


primitives: 'hello', 1-6, null, NaN, 'victor', 'antonia'

objetcs: qux{}, [456], [123[]], bar()