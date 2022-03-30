export const getData = (setState) => {
  fetch("https://62440bbe3da3ac772b0a142d.mockapi.io/Lessons")
    .then((response) => response.json())
    .then((data) => setState(data));
};
