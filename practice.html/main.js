function outer() {
  let name = "outer";
  let str = inner();
  return str;
}

function inner() {
  let name = "inner";
  return "Hello !";
}


async function getWeather(city, info) {
  try {
    if (!Array.isArray(city)) {
      if (info === "all" || typeof info === "undefined") {
        const response = await fetch(`http://localhost:3000/weather?city=${city}`);
        const data = await response.json();
        checkForErrors(data);
        console.log(data);
      } else {
        const validInfoType = ["wind", "clouds", "temp", "precipitation"];
        if (validInfoType.includes(info)) {
          const response = await fetch(`http://localhost:3000/weather?city=${city}&type=${info}`);
          const data = await response.json();
          checkForErrors(data);
          console.log(data);
        } else {
          console.log(`invalid info parameters: ${info}`)
        }
      }
    } else {
      for (const cityItem of city) {
        if (!Array.isArray(city)) {
          if (info === "all" || typeof info === "undefined") {
            const response = await fetch(`http://localhost:3000/weather?city=${cityItem}`);
            const data = await response.json();
            checkForErrors(data);
            console.log(data);
          } else {
            const validInfoType = ["wind", "clouds", "temp", "precipitation"];
            if (validInfoType.includes(info)) {
              const response = await fetch(`http://localhost:3000/weather?city=${cityItem}&type=${info}`);
              const data = await response.json();
              checkForErrors(data);
              console.log(data);
            } else {
              console.log(`invalid info parameters: ${info}`)
            }
          }
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
  function checkForErrors(data) {
    if (data.weather.wind.speed > 15) {
      console.warn("WARNING! Wind speed over 15 m/s");
    }
    if (data.weather.temp < -20) {
      console.warn("WARNING! temperature below -20 degrees")
    }
  }
}


/* create a complete responsive coffee shop front-end website design template using html css 
vanilla javascript the main feature of this website are:
✅ responsive header with toggle menu effect using vanilla javascript.
✅ responsive home section using css flexbox.
✅ responsive about section using css flexbox.
✅ responsive facility section using css grid.
✅ responsive menu section using css grid.
✅ responsive gallery section using css grid.
✅ responsive team section using css grid.
✅ responsive contact section using css flexbox.
✅ responsive footer section using css grid */