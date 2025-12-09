// 2025.12.09 insub

// 1번 문제
function checkAdult(age) {
  switch (true) {
    case age >= 18:
      console.log("성인 입니다.");
      break;

    default:
      console.log("미성년자입니다.");
      break;
  }
}

checkAdult(20);

// 2번 문제
function calculate(num1, num2, operation) {
  switch (operation) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
  }
}

calculate(10, 5, "+");
calculate(10, 5, "-");
calculate(10, 5, "*");
calculate(10, 5, "/");
