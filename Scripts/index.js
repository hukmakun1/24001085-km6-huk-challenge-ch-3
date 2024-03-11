import mobil from "./search.js";

const landingPage = document.getElementById("landing-page-information");
const buttonSewa = document.getElementById("button-sewa");
const buttonMulai = document.getElementsByClassName("btn btn-success");
const searchBar = document.getElementById("search-bar");
const searchSubmit = document.getElementById("search-submit");
const typeInput = document.getElementById("type-input");
const dateInput = document.getElementById("date-input");
const timeInput = document.getElementById("time-input");
const searchInput = document.getElementById("search-input");
const mobilCard = document.getElementById("mobil-card");

for (let i = 0; i < buttonMulai.length; i++) {
  buttonMulai[i].addEventListener("click", function () {
    landingPage.style.display = "none";
    buttonSewa.style.display = "none";
    searchBar.style.display = "flex";
  });
}

searchSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  const allMobil = mobil.getAllMobil();
  const searchedMobil = mobil.searchMobil(
    typeInput.value,
    dateInput.value,
    searchInput.value,
    searchInput.value,
    searchInput.value
  );
  let mobilCardWithMobilData = "";
  searchedMobil.map((mobil) => {
    mobilCardWithMobilData += `<div class="col-md-4">
                                <div class="card">
                                  <img src="${mobil.image}" alt="" />
                                  <div class="card-body">
                                    <p class="card-name">${mobil.manufacture}/${mobil.type}</p>
                                    <h5 class="card-title">Rp ${mobil.rentPerDay}/hari</h5>
                                    <p class="description">
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a
                                      molestiae numquam vel itaque. Tempore in sit quis eligendi minima
                                      obcaecati labore quae quam ducimus at, omnis illum nostrum explicabo.
                                    </p>
                                    <div>
                                      <p class="card-capacity p-2">${mobil.capacity} orang</p>
                                      <p class="card-transmission p-2">${mobil.transmission}</p>
                                      <p class="card-year p-2">${mobil.year}</p>
                                    </div>
                                    <button type="button" class="btn btn-primary">Pilih Mobil</button>
                                  </div>
                                </div>
                              </div>`;
  });
  mobilCard.innerHTML = mobilCardWithMobilData;
});
