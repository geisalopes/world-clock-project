function updtadeTime() {
  // Brisbane
  let brisbaneElement = document.querySelector("#brisbane");
  if (brisbaneElement) {
    let brisbaneDateElement = brisbaneElement.querySelector(".date");
    let brisbaneTimeElement = brisbaneElement.querySelector(".time");
    let brisbaneTime = moment().tz("Australia/Brisbane");

    brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM Do YYYY");
    brisbaneTimeElement.innerHTML = brisbaneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Oslo
  let osloElement = document.querySelector("#oslo");
  if (osloElement) {
    let osloDateElement = osloElement.querySelector(".date");
    let osloTimeElement = osloElement.querySelector(".time");
    let osloTime = moment().tz("Europe/Oslo");

    osloDateElement.innerHTML = osloTime.format("MMMM Do YYYY");
    osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>]A[</small>]");
  }
  // Sao Paulo
  let saoPauloElement = document.querySelector("#sao-paulo");
  if (saoPauloElement) {
    let saoPauloDateElement = saoPauloElement.querySelector(".date");
    let saoPauloTimeElement = saoPauloElement.querySelector(".time");
    let saoPauloTime = moment().tz("America/Sao_Paulo");

    saoPauloDateElement.innerHTML = saoPauloTime.format("MMMM Do YYYY");
    saoPauloTimeElement.innerHTML = saoPauloTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updtadeTime();
setInterval(updtadeTime, 1000);

function updateCity(event) {
  setInterval(function () {
    let cityTimezone = event.target.value;
    if (cityTimezone === "current") {
      cityTimezone = moment.tz.guess();
    }

    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = ` <div class="city">
     <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
     </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
    </div>`;
  }, 1000);
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

let buttonSelection = document.querySelector("button");
buttonSelection.addEventListener("click", function () {
  window.location.href = "https://shecodes-world-clock.netlify.app/";
});
