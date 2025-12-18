// 20251216 insub

// 미션 1
/*
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DOM API Quiz</title>
    </head>
    <body>
        <p id="text">기본 텍스트</p>
        <button id="changeTextButton">텍스트 변경</button>
        <script src="src/index.js"></script>
    </body>
</html>
*/

const func = () => {
  const $changeText = document.getElementById("text");
  const $changeButton = document.querySelector("button");

  $changeButton.addEventListener("click", () => {
    $changeText.textContent = "변경!!";
  });
};
func();

// 미션 2
/*
<!DOCTYPE html>
<html>
    <head>
        <title>Select Tag Quiz</title>
        <meta charset="UTF-8" />
    </head>
    <body>
        <div id="app">
            <!-- 여기에 요소들을 추가 -->
        </div>
        <script src="src/index.js"></script>
    </body>
</html>

<select id="skills">
    <option value="javascript">Javascript</option>
    <option value="next">Next.js</option>
    <option value="react">React.js</option>
    <option value="typescript">TypeScript</option>
</select>
*/

const $selectElement = document.createElement("select");
$selectElement.id = "skills";
const $option1 = document.createElement("option");
$option1.value = "javascript";
$option1.text = "Javascript";
const $option2 = document.createElement("option");
$option2.value = "next";
$option2.text = "next.js";
const $option3 = document.createElement("option");
$option3.value = "react";
$option3.text = "react.js";
const $option4 = document.createElement("option");
$option4.value = "typescript";
$option4.text = "Typescript";

$selectElement.appendChild($option1);
$selectElement.appendChild($option2);
$selectElement.appendChild($option3);
$selectElement.appendChild($option4);

const $div = document.getElementById("app");
$div.appendChild($selectElement);
