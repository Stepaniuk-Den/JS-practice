//=== Films 1 variant ==============================================
//key = 345007f9ab440e5b86cef51be6397df1
//https://developer.themoviedb.org/docs/getting-started
//https://developer.themoviedb.org/reference/trending-movies
//https://developer.themoviedb.org/docs/image-basics

// const BASE_URL = "https://api.themoviedb.org/3";
// const END_POINT = "/trending/movie/week";
// const API_KEY = "345007f9ab440e5b86cef51be6397df1";
// const IMG_PATH = "https://image.tmdb.org/t/p/w400";
// const lists = document.querySelector(".js-films");
// // const btnLoad = document.querySelector(".js-btn");

// let page = 1;

// function serviceMovies(page = 1) {
//   return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`).then(
//     (resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.status);
//       }
//       return resp.json();
//     }
//   );
// }

// serviceMovies().then((data) => {
//   lists.insertAdjacentHTML("beforeend", createMarkup(data.results));
//   btnLoad.hidden = false;
// });

// btnLoad.addEventListener("click", handlerClick);

// function handlerClick() {
//   page += 1;
//   serviceMovies(page).then((data) => {
//     lists.insertAdjacentHTML("beforeend", createMarkup(data.results));
//     btnLoad.hidden = false;
//     if (data.page >= 500) {
//       btnLoad.hidden = true;
//     }
//   });
// }

// function createMarkup(arr) {
//   return arr
//     .map(({ overview, id, title, poster_path }) => {
//       return `<li class="js-item" data-id="${id}">
//     <img class="js-img" src="${IMG_PATH}${poster_path}" alt="${title}">
//     <h3 class="">${title}</h3>
//     <p class="">${overview}</p>
//   </li>`;
//     })
//     .join("");
// }

// === Films 2 variant ================================================
const BASE_URL = "https://api.themoviedb.org/3";
const END_POINT = "/trending/movie/week";
const API_KEY = "345007f9ab440e5b86cef51be6397df1";
const IMG_PATH = "https://image.tmdb.org/t/p/w400";
const lists = document.querySelector(".js-films");
const guard = document.querySelector(".js-guard");

let page = 1;

function serviceMovies(page = 1) {
  return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`).then(
    (resp) => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      return resp.json();
    }
  );
}

serviceMovies().then((data) => {
  lists.insertAdjacentHTML("beforeend", createMarkup(data.results));
  observer.observe(guard);
});

function createMarkup(arr) {
  return arr
    .map(({ overview, id, title, poster_path }) => {
      return `<li class="js-item" data-id="${id}">
    <img class="js-img" src="${IMG_PATH}${poster_path}" alt="${title}">
    <h3 class="">${title}</h3>
    <p class="">${overview}</p>
  </li>`;
    })
    .join("");
}

let options = {
  root: null,
  rootMargin: "500px",
  threshold: 0,
};

function loadMore(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      page += 1;
      serviceMovies(page).then((data) => {
        lists.insertAdjacentHTML("beforeend", createMarkup(data.results));
        if (data.page >= 500) {
          observer.unobserve(guard);
        }
      });
    }
  });
}
let observer = new IntersectionObserver(loadMore, options);
//==========================================================
