// alert("Welcome");

function updateTime() {
  //   // Brighton
  let brightonElement = document.querySelector("#brighton");
  if (brightonElement) {
    let brightonDateElement = brightonElement.querySelector(".date");
    let brightonTimeElement =
      brightonElement.querySelector(".time .time-hours");
    let brightonAmPmElement = brightonElement.querySelector(".time .am-pm");
    let brightonTimezone = moment().tz("Europe/London");

    brightonDateElement.innerHTML = brightonTimezone.format("MMMM Do YYYY");
    brightonTimeElement.innerHTML = brightonTimezone.format("h:mm:ss");
    brightonAmPmElement.innerHTML = brightonTimezone.format("A");
  }

  //   // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement =
      losAngelesElement.querySelector(".time .time-hours");
    let losAngelesAmPmElement = losAngelesElement.querySelector(".time .am-pm");
    let losAngelesTimezone = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTimezone.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTimezone.format("h:mm:ss");
    losAngelesAmPmElement.innerHTML = losAngelesTimezone.format("A");
  }
}

function updateCity(event) {
  clearInterval(intervalID);

  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  let cityTime = moment().tz(cityTimezone);
  citiesElement.innerHTML = `
    <div class="city" id="brighton">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">
            <div class="time-hours">${cityTime.format("h:mm:ss")}</div>
            <div class="am-pm">${cityTime.format("A")}</div>
          </div>
        </div>
        <div>
           <a
        class="home-link"
        href="https://github.com/luciadesperati/world-clock"
        target="_blank"
      >
       < Go back
      </a>
          </div>
  `;
}

updateTime();
let intervalID = setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-selector");

citySelectElement = addEventListener("change", updateCity);
