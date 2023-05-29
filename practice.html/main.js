const api_urls = 'https://nominatim.openstreetmap.org/search?country=Norway&city=Oslo&format=json';
const api_url = 'https://services.swpc.noaa.gov/json/ovation_aurora_latest.json';
async function getForecastByPosition({lon, lat}) {
  try {
    const api_url = 'https://services.swpc.noaa.gov/json/ovation_aurora_latest.json';
    const response = await fetch(api_url)// + `lon=${lon}&lat=${lat}`);
    const data = await response.json();
    const [lonIndex, latIndex, auroraIndex] = JSON.parse(data['Data Format'].replace('[','[').replace(']', ']').replace(/Latitude/g, `"lat"`).replace(/Longitude/g, `"lon"`));
    const {coordinates} = data;
    const auroraData = coordinates.find(coordinate => coordinate[lonIndex] === lon && coordinate[latIndex] === lat)[auroraIndex];
    const aurora = auroraData[auroraIndex];
    console.log(`aurora value: ${aurora}`);
    return aurora;
  } catch (error) {
    console.error(`error fetching aurora forecast data: ${error}`) 
  }  
}
getForecastByPosition({lon: 0, lat: -90});



async function getForecastByAddress(){
  const response = await fetch(api_url);
  const data = await response.json()
  console.log(data)
}
getForecastByAddress();
