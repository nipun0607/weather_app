const inputBox=document.querySelector('.input_box');
const searchBtn=document.querySelector('#search_btn');
const weather_img=document.querySelector('.wheatherImage');
const temperature=document.querySelector('.temp');
const description=document.querySelector('.description');
const humidity=document.querySelector('#humidity');
const wind_speed=document.querySelector('#wind_speed');
const error=document.querySelector(".location-not-found");
const wheather_body=document.querySelector(".wheather_body");

async function checkWeather(city){
    const apiKey="b5af65d6d80cf720dfa1e43415a447aa";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const weatherData= await fetch(`${url}`).then(response=>response.json());
    // console.log(weatherData);
    if(weatherData.cod===`404`){
        error.style.display="flex";
        wheather_body.style.display="none";
        
        return;
    }
    error.style.display="none";
    wheather_body.style.display="flex";
    temperature.innerHTML=`${Math.round(weatherData.main.temp-273.15 )}°C`;
    description.innerHTML=`${weatherData.weather[0].description}`
    humidity.innerHTML=`${weatherData.main.humidity}%`
    wind_speed.innerHTML=`${weatherData.wind.speed}Km/H`
    wheather_body.style.display="flex";

    switch(weatherData.weather[0].main){
        case "Clear":weather_img.src="./assets/clear.png";
        break;  
        case "Clouds":weather_img.src="./assets/cloud.png";
        break;
        case "Mist":weather_img.src="./assets/mist.png";
        break;
        case "Rain":weather_img.src="./assets/rain.png";
        break;
        case "Snow":weather_img.src="./assets/snow.png";
       
    }
}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})
