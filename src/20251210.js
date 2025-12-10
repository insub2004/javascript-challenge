// 20251210 insub

// 미션 1

let x = 1;

function test() {
  console.log(x); // undefined
  var x = 2;
  console.log(x); // 2
}

test();
console.log(x); // 1

// 출력 순서
// undefined
// 2
// 1

// 미션 2
const person = {
  name: "효빈",
  sayName: function () {
    console.log(this.name);
  },
};

const run = () => {
  person.sayName();
};

run();
