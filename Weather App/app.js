const showWeatherBtn = document.getElementById('show-weather'); 
const cityInput = document.getElementById('city');
const weatherContainer = document.getElementById('weather-container');
const showForecastBtn = document.getElementById('show-forecast'); 
const forecastContainer = document.getElementById('forecast-container');

showWeatherBtn.addEventListener('click', showWeather); 
showForecastBtn.addEventListener('click', showForecast);

const API_KEY = '69518b1f8f16c35f8705550dc4161056';
const URL_CURRENT_WEATHER = 
'https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q='; 
const URL_FORECAST_WEATHER = 
'https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=';

async function showWeather () {
    const city = cityInput.value; 
    const response = await fetch (`${URL_CURRENT_WEATHER}${city}`); 
    const weather = await response.json(); 

    const iconCode = weather.weather[0].icon; 
    const iconImageUrl = `http://openweathermap.org/img/w/${iconCode}.png`; 

    weatherContainer.innerHTML = `
    <div>
    <img src=${iconImageUrl}  />
    <p>Descriere: ${weather.weather[0].description}</p>
    <p>Umiditate: ${weather.main.humidity}</p>
    <p>Presiune: ${weather.main.pressure}</p>
    <p>Temperatura curenta: ${weather.main.temp}</p>
    <p>Maxima zilei: ${weather.main.temp_max}</p>
    <p>Minima zilei: ${weather.main.temp_min}</p>
    </div>
    `;
}
   
async function showForecast() {
    const city = cityInput.value; 
    const response = await fetch(`${URL_FORECAST_WEATHER}${city}`);
    const forecast = await response.json();
    forecastContainer.innerHTML = '';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const today = now.toISOString().split('T')[0]; // Current date string (YYYY-MM-DD)

    let dailyForecasts = {};

    forecast.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toISOString().split('T')[0]; // Group by date string (YYYY-MM-DD)

        if (!dailyForecasts[day]) {
            dailyForecasts[day] = [];
        }
        dailyForecasts[day].push(item);
    });

    let displayedDays = 0;

    Object.keys(dailyForecasts).forEach(day => {
        const dayForecasts = dailyForecasts[day];
        
        if (day === today) {
            // Filter forecasts for today to start from the current time
            dailyForecasts[day] = dayForecasts.filter(item => {
                const itemDate = new Date(item.dt * 1000);
                return itemDate >= now;
            });
        }

        if (dailyForecasts[day].length > 0 && displayedDays < 6) {
            const date = new Date(dailyForecasts[day][0].dt * 1000);
            const dayName = days[date.getDay()]; // Correctly display the day name

            const dayContainer = document.createElement('div');
            dayContainer.classList.add('day-forecast');

            const dayTitle = document.createElement('h3');
            dayTitle.classList.add('date');
            dayTitle.textContent = dayName;
            dayContainer.appendChild(dayTitle);

            dailyForecasts[day].forEach(item => {
                const iconCode = item.weather[0].icon;
                const iconImageUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

                const time = document.createElement('p');
                time.classList.add('time');
                time.textContent = new Date(item.dt * 1000).toLocaleTimeString();

                const temp = document.createElement('p');
                temp.classList.add('current-temp');
                temp.innerHTML = `Temperatura: ${item.main.temp} &deg;C`;

                const icon = document.createElement('img');
                icon.src = iconImageUrl;
                icon.classList.add('icon');

                const description = document.createElement('p');
                description.classList.add('conditions');
                description.textContent = `Descriere: ${item.weather[0].description}`;

                const humidity = document.createElement('p');
                humidity.classList.add('humidity');
                humidity.textContent = `Umiditate: ${item.main.humidity}%`;

                const forecastCard = document.createElement('div');
                forecastCard.classList.add('forecast-card');

                forecastCard.appendChild(time);
                forecastCard.appendChild(icon);
                forecastCard.appendChild(temp);
                forecastCard.appendChild(description);
                forecastCard.appendChild(humidity);

                dayContainer.appendChild(forecastCard);
            });

            forecastContainer.appendChild(dayContainer);
            displayedDays++;
        }
    });
}