const menu = document.querySelector("#mobile-menu");
const menuOptions = document.querySelector("#options");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuOptions.classList.toggle("active");
  document.body.classList.toggle("active");
});

const api_URL = "";
const cardImage = document.querySelectorAll("l-card-image");
// const container = document.querySelectorAll(".image");
let counter = 0;
// console.log(adImage);

async function setImage(url) {
const response=[];
for (let i = 0; i < cardImage.length; i++) {
  response[i]=await fetch()
}










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

setAdImage(api_URL);
// adImage.src = element[0].resolutions.medium.url;
