// 20251212 insub

// 미션 1
const compare = (a, b) => {
  return b.length - a.length;
};
const items = ["apple", "kiwi", "banana", "fig", "watermelon"];

items.sort(compare);
console.log(items);

//출력 결과 : ["watermelon", "banana", "apple", "kiwi", "fig"]

// 미션 2
const products = [
  { id: 1, name: "모니터", price: 300000, stock: 12 },
  { id: 2, name: "키보드", price: 50000, stock: 5 },
  { id: 3, name: "노트북", price: 1200000, stock: 3 },
];

const [firstProduct, secondProduct, thirdProduct] = products;
const { name, stock } = secondProduct;
console.log(`${name}의 재고는 ${stock}입니다.`);

// 미션 3
const arr1 = [1, 2];
const arr2 = [3, 4];

// 1) spread 문법을 사용하여 두 배열을 합친 newArr을 만드세요.
const newArr = [...arr1, ...arr2];

const user = {
  name: "효빈",
  age: 26,
  hobby: "게임",
};

// 2) rest 문법을 사용해 name만 따로 분리하고 나머지를 restUser에 담으세요.
const { name, ...rest } = user;
const restUser = rest;

console.log(newArr); // [1, 2, 3, 4]
console.log(name); // "효빈"
console.log(restUser); // { age: 26, hobby: "게임" }
