class Storage{
    constructor(){
        this.city;
        this.country;
        this.defaultCity = 'Los Angeles'; //default city and country in case of there is no city or country in ls
        this.defaultCountry = 'US';
    }

    getLocalStorage(){
        //This method will grab the city and country stored in the local storage
        if(localStorage.getItem('city') === null){
            //If there is no city in ls, then the city will be the default city
            this.city = this.defaultCity;
        }else{
            //Otherwise, the city will be the one stored
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('country') === null){
            //The same will be for the country
            this.country = this.defaultCountry;
        }else{
            this.country = localStorage.getItem('country');
        }

        return{
            //Then an object with the city and country is returned
            city: this.city,
            country: this.country
        }
    }

    setLocalStorage(city, country){
        //This method will just save the current city and country in local storage
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);

    }
}