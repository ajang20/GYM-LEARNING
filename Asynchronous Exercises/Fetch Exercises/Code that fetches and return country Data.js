// <!-- 1. You are building a web application that fetches data 
// from multiple APIs to display information about different countries.
//  You need to fetch the country details from one API 
// and the weather information for the capital city from another API.

// **Here are the requirements:**

// - Use the fetch API to get the country details from 
// [https://restcountries.com/v3.1/name/{countryName}]
// (https://restcountries.com/v3.1/name/%7BcountryName%7D).
// - Use the fetch API to get the weather details from 
// [https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true]
// (https://api.open-meteo.com/v1/forecast?latitude=%7Blat%7D&longitude=%7Blon%7D&current_weather=true).
// - The weather API requires the latitude and longitude of the capital city, 
// which you will get from the country details.
// - Display the country's name, capital city, and current temperature in the console.

// **Example:**

// If the user searches for "France", your application should:

// - Fetch country details from [https://restcountries.com/v3.1/name/France]
// (https://restcountries.com/v3.1/name/France).
// - Extract the capital city and its coordinates (latitude and longitude).
// - Fetch the current weather for the capital city from the weather API.

// **Display the results in the console as follows:**

// Country: France
// Capital: Paris
// Current Temperature: 18°C 


function FetchCountryData(countryName){
  return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then(response=>{
    if(!response.ok){
      throw new Error(`Server Error ${response.status}`)
    }

    const contentType = response.headers.get('content-type');
    if(!contentType || !contentType.includes('application/json')){
      throw new Error(`ContentType not JSON but ${contentType}`);
    }
    return response.json()
  })
  .then(data=>{
  const [name,city,[lat,lon]] = [data[0].name.common,data[0].capital.join(""),data[0].latlng]
    return [name,city,lat,lon]
  })//end of thedata
  .then((arr)=>{
    const [name,city,lat,lon] = arr
     let Promise = fetchLatLon(lat,lon)
     return Promise.then(d=>[name,city,d])  })
  .then(data=>{
    const [name,city,obj]= data;
    // console.log(obj)
    const temp = obj.current_weather.temperature;
     const unit = obj.current_weather_units.temperature;
    console.log(`Country: ${name}\n City:${city} \n Temperature:${temp}${unit}`)
  })
  .catch(error=>console.log(`Error ${error}`))
}



// latittude and longittude api
function fetchLatLon(lat,lon){
  return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
  .then(response =>{
    if(!response.ok){
      throw new Error(`Server Error ${response.status}`);
    }
    return response.json()
  })
  .then(data=>data)
  .catch(error=>console.log(error))
}
FetchCountryData("Rwanda")





//ASYNC AND AWAIT VERSIONS

async function FetchCountryData(countryName){
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    if (!response.ok) {
      throw new Error(`Server Error ${response.status}`)
    }
    const data = await response.json()
    const [name, city, [lat, lon]] = [data[0].name.common, data[0].capital.join(""), data[0].latlng]
    const arr = [name, city, lat, lon]
    const [name_1, city_1, lat_1, lon_1] = arr
    let Promise = fetchLatLon(lat_1, lon_1)
    const d = await Promise
    const data_2 = [name_1, city_1, d]
    const [name_2, city_2, obj] = data_2
    // console.log(obj)
    const temp = obj.current_weather.temperature
    const unit = obj.current_weather_units.temperature
    console.log(`Country: ${name_2}\n City:${city_2} \n Temperature:${temp}${unit}`)
  } catch (error) {
    return console.log(`Error ${error}`)
  }
}



// latittude and longittude api
async function fetchLatLon(lat,lon){
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
    if (!response.ok) {
      throw new Error(`Server Error ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    return console.log(error)
  }
}
FetchCountryData("Rwanda")