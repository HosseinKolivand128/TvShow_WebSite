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
        addButton(rCards[i - 1].children[1], element);
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
    // console.log(data);
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
  const episodes = getEpisodes(data.id);
  
  const thead = document.querySelector("thead");
  removeAllChildNodes(thead);

  const tBody = document.querySelector("#table-Body");
  removeAllChildNodes(tBody);
  try {
    const trH = document.createElement("tr");
    trH.classList.add("table-secondary");
    const text = ["Image", "Episode Info", "Summary", ""];
    for (let i = 0; i < 4; i++) {
      const th = document.createElement("th");
      th.textContent = text[i];
      th.classList.add("table-primary", "fs-5");
      trH.appendChild(th);
    }
    thead.appendChild(trH);
    episodes.then((element) => {
      console.log(element);
      // console.log(element.length);
      // tBody.removeChild();
      if (tBody.childElementCount === 0) {
        for (let i = 0; i < element.length; i++) {
          console.log(element[i]);
          const imgTd = document.createElement("td");
          const infTd = document.createElement("td");
          const sumTd = document.createElement("td");
          const btnTd = document.createElement("td");
          const tr = document.createElement("tr");

          const img = document.createElement("img");
          if (element[i].image !== null) {
            img.setAttribute("src", element[i].image.medium);
            imgTd.appendChild(img);
            tr.appendChild(imgTd);
          } else {
            imgTd.textContent = "No Image";
            tr.appendChild(imgTd);
          }

          const p = document.createElement("p");
          p.textContent = `Episode Name: ${element[i].name}`;
          const p2 = document.createElement("p");
          p2.textContent = `S${element[i].season} E${element[i].number}`;
          infTd.appendChild(p);
          infTd.appendChild(p2);
          tr.appendChild(infTd);

          const p3 = document.createElement("p");
          p3.innerHTML = element[i].summary;
          sumTd.appendChild(p3);
          tr.appendChild(sumTd);

          const btn = document.createElement("button");
          btn.textContent = "more details";
          btn.classList.add("btn-warning");
          btnTd.appendChild(btn);
          tr.appendChild(btnTd);

          tBody.appendChild(tr);
        }
      } else {
        removeAllChildNodes(tBody);
        console.log(tBody.childElementCount);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
async function getEpisodes(id) {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
  const data = response.json();
  return data;
}

