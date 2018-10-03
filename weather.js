class Weather{
    constructor(){
        this.city;
        this.country;
        this.api_key = 'c9891699c9555941019bbc7b48e9639d';
    }

    async get(){
        //This method will make a get request to the server with the desired city an country
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&id=524901&APPID=${this.api_key}&units=metric`);
        const resData = await response.json();
        //this method returns a promise 
        return resData;
    }

    changeLocation(city, country){
        //This method will just change the current city and country
        this.city = city;
        this.country = country;
    }
}