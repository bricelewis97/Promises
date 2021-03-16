// Returns a resolve with a random number

function getRandomNumber(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve(Math.random()) , 5000);
    })
}
return promise

function getRandomNumber() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const rand = Math.floor(Math.random() * 1000);
        console.log(rand);
        resolve(rand);
      }, 500);
    });
  }
 
  async function newFunction() {
    let random = await getRandomNumber();
    console.log("Your number is: " + random);
  }
 
  newFunction();
 


// City Name Parameter
function printCityCoords(cityRequest) {
    findACity(cityRequest).then((res) => {
      console.log(
        `Coords of ${cityRequest} = Lat: ${res.latt}, Long: ${res.longt}`
      );
    });
  }
  
  async function findACity(cityName) {
    let cityJson;
  
    console.log("Going to check for a city named " + cityName + "!");
    cityData = await getCityInfo(cityName).then((resJson) => {
      cityJson = resJson;
    });
    return new Promise((resolve) => {
      resolve(cityJson);
    });
  }
  async function getCityInfo(cityName) {
    url = `https://geocode.xyz/${cityName}?json=1`;
  
    let res = await fetch(url);
  
    if (res.status != 200) {
      console.log("Failed the first fetch attempt for " + cityName + "!");
      res = await new Promise((x) =>
        setTimeout(async () => {
          const tmpRes = await fetch(url);
          x(tmpRes);
        }, 3000)
      );
    }
  
    const json = await res.json();
  
    const myPromise = new Promise((resolve) => {
      if (json) {
        resolve(json);
      }
    });
    return myPromise;
  }
  printCityCoords("Dallas");
  printCityCoords("Shreveport");
  printCityCoords("Minneapolis");
  
async function city(cityName) {
    const response = await fetch(`https://geocode.xyz/${cityName}?json=1`)
    const info = await response.json();
    console.log("The latitude is: " + info.longt + ".\nThe longitude is: " + info.latt);
  }
  
  city("san francisco");
