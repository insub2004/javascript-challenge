// 20251217

// 미션 1
function fakeApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John Doe", age: 30 });
    }, 2000);
  });
}

const fetchUserData = async () => {
  fakeApiCall().then((res) => {
    // promise 객체를 리턴하기 때문에 then 사용 가능
    console.log(res);
  });
};

// fetchUserData 함수 완성
fetchUserData();

// 미션 2
const API_URL = "https://pokemon-api-ecru-eta.vercel.app";

const getData = async () => {
  try {
    let response = await fetch(API_URL);
    let data = await response.json();

    let arr = data["data"];

    // foreach 사용
    // let greenPokemons = [];
    // arr.forEach((element) => {
    //   if (element.color === "green") {
    //     greenPokemons.push(element);
    //   }
    // });

    let greenPokemons = arr.filter((elm) => elm.color === "green");

    console.log(greenPokemons); // 9마리 출력됨
  } catch (error) {
    console.log(error);
  }
};

getData();
