// alert("Welcome");

function updateTime() {
  // Brighton
  let brightonElement = document.querySelector("#brighton");
  let brightonDateElement = brightonElement.querySelector(".date");
  let brightonTimeElement = brightonElement.querySelector(".time .time-hours");
  let brightonAmPmElement = brightonElement.querySelector(".time .am-pm");
  let brightonTimezone = moment().tz("Europe/London");
  brightonDateElement.innerHTML = brightonTimezone.format("MMMM Do YYYY");
  brightonTimeElement.innerHTML = brightonTimezone.format("h:mm:ss");
  brightonAmPmElement.innerHTML = brightonTimezone.format("A");

  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement =
    losAngelesElement.querySelector(".time .time-hours");
  let losAngelesAmPmElement = losAngelesElement.querySelector(".time .am-pm");
  let losAngelesTimezone = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTimezone.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTimezone.format("h:mm:ss");
  losAngelesAmPmElement.innerHTML = losAngelesTimezone.format("A");
}

updateTime();
setInterval(updateTime, 1000);
