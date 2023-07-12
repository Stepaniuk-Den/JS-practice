const refs = {
  form: document.querySelector(".js-form"),
};

refs.form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.currentTarget);

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  serviceContact(data);
  refs.form.reset();
}

function serviceContact(data) {
  const BASE_URL = "http://127.0.0.1:3000";
  const END_POINT = "/contact";
  const url = BASE_URL + END_POINT;

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };
  return fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error("ERROR POST");
      }
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
}
