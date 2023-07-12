//d80992e81a97459aaa4113001231606
const URL = "http://api.weatherapi.com/v1/forecast.json";
const API_KEY = "d80992e81a97459aaa4113001231606";
const refs = {
  form: document.querySelector(".form"),
  addBtn: document.querySelector(".add"),
  inputContainer: document.querySelector(".inputWrapper"),
  weatherCard: document.querySelector(".container"),
};
refs.addBtn.addEventListener("click", onAdd);
refs.form.addEventListener("submit", onSubmit);

function onAdd() {
  const markup = `<input type="text" name="country"/>`;
  refs.inputContainer.insertAdjacentHTML("beforeend", markup);
}

async function onSubmit(evt) {
  evt.preventDefault();
  const userData = new FormData(evt.currentTarget);
  const countries = userData.getAll("country");

  try {
    const responses = countries.map(async (country) => {
      const response = await serviceSearchCountryByName(country);
      return response;
    });
    const data = await Promise.allSettled(responses);
    const capitals = data
      .filter(({ status }) => status === "fulfilled")
      .map(({ value }) => value[0].capital[0]);

    const weatherResp = capitals.map(async (city) => {
      const response = await serviceWeather(city);
      return response;
    });
    const forecastData = await Promise.allSettled(weatherResp);
    const forecast = forecastData
      .filter(({ status }) => status === "fulfilled")
      .map(({ value }) => value);
    refs.weatherCard.innerHTML = createMarkup(forecast);
  } catch (err) {
    console.log(err);
  }
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        location: { name },
        forecast: {
          forecastday: [currentDay],
        },
      }) => {
        const {
          day: {
            avgtemp_c,
            condition: { icon, text },
          },
        } = currentDay;
        const markup = `<li>
      <h2>${name}</h2>
      <img src="${icon}" alt="${text}"/>
      <h3>${avgtemp_c}</h3>
      <h3>${text}</h3>
    </li>`;
        return markup;
      }
    )
    .join();
}

async function serviceWeather(city) {
  const response = await fetch(`${URL}?key=${API_KEY}&q=${city}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
}

async function serviceSearchCountryByName(country) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
}
