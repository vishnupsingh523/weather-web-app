const api= {
    key: "24c1e93f66a80c3e0ef15819620f8975",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('#search');
searchBox.addEventListener('keypress', setQuery);

function setQuery(key){
    
    if(key.keyCode == 13)
    {
        getResults(searchBox.value);
    }
}

// temperature constant
const temp = document.getElementById('temp');
const fill = document.getElementsByClassName('fill');

function getResults(query)
{
    var url = `${api.base}weather?q=${query}&appid=${api.key}`;

    fetch(url)
    .then(weather =>{
        return weather.json();
    })
    .then((result)=>{
        console.log(result);
        temp.textContent = result.main.temp-273;
        
        // feels like temperature
        fill[0].textContent = result.main.feels_like -273;
        // minimum temperature
        fill[1].textContent = result.main.temp_min -273;
        // maximum temperature
        fill[2].textContent = result.main.temp_max -273;
        // humidity
        fill[3].textContent = result.main.humidity;
        // Sea level
        fill[4].textContent = result.main.sea_level;
    })
    .catch(error=>console.log(error))
}