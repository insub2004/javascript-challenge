// api를 호출하고, 반환하는 역할

const API_URL = "https://animal-api-two.vercel.app/";

// API
export const request = async () => {
  let res = await fetch(API_URL);
  try {
    if (res) {
      let data = await res.json();
      return data.phothos;
    }
  } catch (error) {
    console.log(error);
  }
};
