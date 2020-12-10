# AngularWeather

An app for searching for the weather of given country's capital. Search by country name and the app will search for the capital's weather!

The app fetches countries from restcoutnries-api (https://restcountries.eu/) and then fetches weather info from weatherstack (https://weatherstack.com/) for those countries capitals. Angular AND angular material are the tools used in the project (and fontawesome for one icon)

# How to run

In order to run the application locally, you have to add weatherstack.environment.ts-file into /src/environments/ folder. The contents of the file should be the following:

`export const weatherstack = {
  weatherstackAccessKey: "YOUR_API_KEY_STRING_HERE"
};`
