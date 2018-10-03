class UI{
    constructor(){
        //The constructor will grab all the html tags which will show the informations about the weather
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.temp = document.getElementById('w-str');
        this.icon = document.getElementById('w-icon');
        this.tempMin = document.getElementById('w-tempMin');
        this.tempMax = document.getElementById('w-tempMax');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');

      }

    paint(weather){
        //This method will use the object "weather", which contains all the informations about the weather
        //And display all of them in the card
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].description;
        this.temp.textContent = `${weather.main.temp} °C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.tempMin.textContent = `Minimum temperature: ${weather.main.temp_min} °C`;
        this.tempMax.textContent = `Maximum temperature: ${weather.main.temp_max} °C`; 
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed} m/s`;
    }

    showAlert(message){
        //This method just builds an alert which desapears after 3 secs
        const divAlert = document.getElementById('show-alert');
        divAlert.classList = 'alert alert-danger';
        divAlert.textContent = message;

        setTimeout(() =>{
            document.querySelector('.alert').remove();
        }, 3000);
    }

    clearModal(){
        //It jus clears the modal once it is submited
        document.getElementById('city').value = '';
        document.getElementById('country').value = '';
    }
}