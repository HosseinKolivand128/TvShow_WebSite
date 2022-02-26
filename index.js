const menu = document.querySelector("#mobile-menu");
const menuOptions = document.querySelector("#options");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuOptions.classList.toggle("active");
  document.body.classList.toggle("active");
});

const api_URL = "";
const cardImage = document.querySelectorAll(".l-card-image");
const cards = document.querySelectorAll(".l-card");
const rCardImage = document.querySelectorAll(".r-card-image");
const rCards = document.querySelectorAll(".r-card");

const shows = [82, 527, 22036, 5, 582, 179, 379, 4729, 369];
async function setInfoLeft(shows) {
  const response = [];
  // const counter = 0;
  for (let i = 0; i < shows.length; i++) {
    response[i] = await fetch(`https://api.tvmaze.com/shows/${shows[i]}`);
    const data = response[i].json();

    // console.log(cards[i].children[1].children[0]);
    try {
      data.then((element) => {
        // console.log(element);
        // console.log(cards[i].children[1]);
        cardImage[i].setAttribute("src", element.image.medium);

        cards[i].children[1].children[0].textContent = `${element.name}`;
        cards[i].children[1].children[1].textContent = `Rate:${
          element.rating.average !== null ? element.rating.average : "-"
        }\n
          // Language:${element.language} Status:${element.status} \n
          // Genre:${element.genres.length !== 0 ? element.genres : "-"}`;
        /*Call Create function*/
        addButton(cards[i].children[1], element);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
setInfoLeft(shows);

const rShows = [2, 1871, 138, 171, 216, 55138];
async function setInfoRight() {
  const response = [];

  const counter = 0;
  for (let i = 1; i <= rCardImage.length; i++) {
    response[i] = await fetch(`https://api.tvmaze.com/shows/${rShows[i - 1]}`);
    const data = response[i].json();
    try {
      data.then((element) => {
        rCardImage[i - 1].setAttribute("src", element.image.medium);
        rCards[i - 1].children[1].children[0].textContent = `${element.name}`;
        rCards[i - 1].children[1].children[1].textContent = `Rate:${
          element.rating.average
        }\n
        // Language:${"\n" + element.language} Status:${" " + element.status} \n
        // Genre:${" " + element.genres} `;

        /*Call Create function*/
        addButton(rCards[i - 1].children[1]);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
setInfoRight();

function addButton(container, data) {
  const infoBtn = document.createElement("button");
  infoBtn.textContent = "Show more";
  infoBtn.classList.add("card-button", "btn-warning");
  infoBtn.addEventListener("click", (e) => {
    showEpisodes(data);
  });
  container.append(infoBtn);
}

function showEpisodes(data) {
  const showName = document.querySelector(".ShowName");
  console.log(data);
  showName.textContent = data.name;
  const showImg = document.querySelector("#showImg");
  showImg.setAttribute("src", data.image.medium);
  const descabout = document.querySelector("#desc-about");
  descabout.innerHTML = data.summary;

  
}

// setImage();

//   const response = [];
//   for (let i = 0; i < 3; i++) {
//     response[i] = await fetch(`https://api.tvmaze.com/shows/${i + 3}/images`);
//     const data = response[i].json();
//     const section = document.createElement("section");
//     const container = document.querySelector(".carousel-item");
//     try {
//       data.then((element) => {
//         section.style.background = `url(${element[0].resolutions.medium.url})`;
//         section.style.backgroundColor = "red";
//         section.style.height = "100px";
//         container.append(section);
//       });
//     } catch (error) {}
//   }
// }

// async function setAdImage(url) {
//   const response = [];
//   for (let i = 0; i < adImage.length; i++) {
//     response[i] = await fetch(`https://api.tvmaze.com/shows/${i + 3}/images`);
//     const data = response[i].json();
//     try {
//       data.then((element) => {
//         adImage[i].src = element[0].resolutions.medium.url;
//       });
//     } catch (error) {
//       console.log(error);
//     }
// try {
//   data.then((element) => {
//     console.log(container[i]);

//     container[
//       i
//     ].style.background = `url(${element[0].resolutions.medium.url})`;
//   });
// } catch (error) {
//   console.log(error);
// }
//   }
//   console.log(response);
// }

// adImage.src = element[0].resolutions.medium.url;
