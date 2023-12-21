const searchBtn =document.getElementById('searchBtn')
const locationBtn =document.getElementById('locationBtn')
const detailsCard = document.getElementById('currentWeather')
const weatherCards = document.getElementById('weatherCards')
const weatherData = document.querySelector('.weather-data')

const API_KEY='a65eccb9a2fc2d70d88820fd509163a1'

// const getDate = (timeStamp) =>{
//     const date = new Date(timeStamp * 1000)
//     const day =date.getDate()
//     const month = date.getMonth()+1
//     const year = date.getFullYear()

//     return `${day}/${month}/${year}`
// }

function convertFahrenheitTocelsius(temp){
    return (temp - 273.15).toFixed(2)
}

function createWeatherCard(name,data, index){
    weatherData.style.visibility="visible"
   if(index===0){
        return `
            <div>
                <h2>${name} ( ${data.dt_txt.split(" ")[0]})</h2>
                <h6>Temperature: ${convertFahrenheitTocelsius(data.main.temp)}°C</h6>
                <h6>Wind: ${data.wind.speed} M/S</h6>
                <h6>Humidity: ${data.main.humidity}%</h6>
            </div>
            <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="weather-icon">
                <h6>${data.weather[0].description}</h6>
            </div>
        `
   }else{
    return `
            <li class="card">
                <h3>( ${data.dt_txt.split(" ")[0]} )</h3>
                <h6>Temp: ${convertFahrenheitTocelsius(data.main.temp)} °C</h6>
                <h6>Wind: ${data.wind.speed} M/S</h6>
                <h6>Humidity: ${data.main.humidity}%</h6>
             </li>
    `

   }

}

function getWeatherDetails(name,lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(res=>res.json())
    .then(data=>{
        const uniqueForecastDays =[]

        const fiveDaysForecast = data.list.filter(forecast =>{
            const forecastDate = new Date(forecast.dt_txt).getDate()
            if(!uniqueForecastDays.includes(forecastDate)){
                 uniqueForecastDays.push(forecastDate)
                 return true
            }
            return false
        })

        fiveDaysForecast.forEach((eachDayData, index) => {
            if(index===0){
                detailsCard.innerHTML = createWeatherCard(name,eachDayData, index)
               
            }else{

                const html = createWeatherCard(name,eachDayData, index)

                weatherCards.insertAdjacentHTML('beforeend', html)

            }
                
        });

    })
    .catch(error=>{
        console.error('Error fetching weather details:', error);
        alert('An error occurred while fetching the coordinates!')
    })
}


function getCityCoordinates(){
    const cityName =document.getElementById('cityName').value.trim()
    if(cityName==="") return alert('Enter a City Name')
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
        if(!data.length) return alert(`No coordinates found for ${cityName}`);
        const {name, lat, lon} = data[0]
        getWeatherDetails(name, lat, lon)
    })
    .catch(error=>{
        console.error('Error fetching city coordinates:', error);
        alert('An error occurred while fetching the coordinates!')
    })
}

function getUserCoordinates(){
    navigator.geolocation.getCurrentPosition(
        position=>{
        const {latitude, longitude} =position.coords
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(res=>res.json())
        .then(data=>{
            const { name } = data.city;
            console.log(data);
            getWeatherDetails(name, latitude, longitude)
        },

        error=>{
            if (error.code === error.PERMISSION_DENIED) {
                alert("Geolocation request denied. Please reset location permission to grant access again.");
            } else {
                alert("Geolocation request error. Please reset location permission.");
            }
        }
        )
    });
}

searchBtn.addEventListener('click', getCityCoordinates)
locationBtn.addEventListener('click', getUserCoordinates)