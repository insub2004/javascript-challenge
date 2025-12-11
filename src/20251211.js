// 20251211 insub

// 미션 1
function Product(name, price) {
  this.name = name;
  this.price = price;
}

const products = [
  new Product("모니터", 300000),
  new Product("키보드", 50000),
  new Product("노트북", 1200000),
];

let mostExpensive = -1;
let name;
products.forEach((elm) => {
  if (elm.price > mostExpensive) {
    name = elm.name;
  }
});

console.log(`가장 비싼 물품은 ${name} 입니다.`);

// 미션 2
const fruits = ["사과", "바나나", "포도", "사과", "체리", "바나나", "망고"];

// foreach
fruits.forEach((elm) => {
  console.log(elm);
});

// includes 사용해서 "망고" 확인
console.log(fruits.includes("망고"));

// findIndex 사용해서 "포도" 첫 index 출력
console.log(fruits.findIndex((elm) => elm === "포도"));

// filter 사용 "사과"만 모으기
let appleArray = fruits.filter((elm) => elm === "사과");
console.log(appleArray);

// slice 사용 앞 요소 3개를 새로운 배열로 만들기
let sliceArray = fruits.slice(0, 3);
console.log(sliceArray);
