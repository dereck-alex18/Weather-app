//Instantiate all objects to be used
const weather = new Weather();
const ui = new UI();
const storage = new Storage();

//Wait for an event. If the page loads or the modal button is pressed, then one of the events will fire.
document.getElementById('w-changeBtn').addEventListener('click', changeLocation);
document.addEventListener('DOMContentLoaded', loadLocalStorage);

function loadLocalStorage(){
    //When the page is loaded, the program will check the local storage and use it to set the weather conditions.
    
    const weatherLocation = storage.getLocalStorage(); //The variable will contain the city and country stored in ls
    
    weather.changeLocation(weatherLocation.city, weatherLocation.country); //It will set the city and country in ls as the city and country which will be displayed

    weather.get()
    //The method get will make a request to the server and return a promise
    .then(data => {
    //The json will be passed as an argument to the method paint. This method will just display all informations about the weather    
    ui.paint(data);
    })
    .catch(err => {
    console.log(err);
    });
}

function changeLocation(){
    //When the "submit" button in the modal is pressed, this method is executed
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    
    if(city === '' || country === ''){
        //if any field in the modal is empty, then an error message will be displayed
        ui.showAlert('Please, fill in all the fields and try again');
    }else{
        //Otherwise, the program will pass the city and the country as an argument to get the informations about the weather
        weather.changeLocation(city, country);
        weather.get()
        .then(data => {
        //If everything goes right, the informations about the chosen city and country will be displayed
        ui.paint(data);
        //And also the city and country will be stored in local storage
        storage.setLocalStorage(city, country);
        })
        .catch(err => {
        //If something goes wrong, an error message will be displayed
        ui.showAlert('City or Country not found! Please enter a valid city and country and try again!');
        });
    }
    //This method will clear the fields in the modal
    ui.clearModal();
}

