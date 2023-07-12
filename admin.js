const list = document.querySelector(".js-form-list");

function serviceRequests() {
  const BASE_URL = "http://127.0.0.1:3000/";
  const END_POINT = "/requests";
  const url = BASE_URL + END_POINT;

  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error("ERROR GET");
    }
    return res.json();
  });
}
serviceRequests().then((data) => {
  console.log(data);
  const markup = data
    .map(({ name, phone, message }) => {
      return `<li>
    <h3>${name}</h3>
    <h3>${phone}</h3>
    <h3>${message}</h3>
  </li>`;
    })
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
});
