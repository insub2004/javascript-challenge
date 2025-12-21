// 미션 1

const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요?
  },
  arrowFunction: () => {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요?
  },
};

obj.regularFunction(); // 출력: 42
// 42가 출력될 수 있는 이유는 일반 함수 호출이기 때문에
// "함수가 어떻게 호출 되었는지?"에 따라 this에 바인딩되는 값이 달라진다.
// obj.regularFunction(); 에서 obj가 호출했기 때문에 this는 obj에 바인딩 된다.

obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요)
// undefined가 호출되는 이유는 화살표 함수는 렉시컬 스코프를 따르기 때문이다.
// 함수가 정의된 위치의 "상위 스코프에 있는 this를 사용"
// 그러나, 객체를 만드는 중괄호 `{...}`는 스코프(유효범위)를 생성하지 않는다.
// 따라서 결과적으로 window를 가리키게 되고 window 객체에는 value라는 속성값이
// 없기 때문이다.

