//Libs
import { ScrollView, RefreshControl, Alert,Text } from 'react-native';
import { API_KEY } from '@env';
import useFetch from '../../libs/useFetch';
import * as Location from 'expo-location';
import getTheme from '../../libs/getTheme';

//Context
import { useState, useEffect, useContext } from 'react';
import ThemeContext from '../../context/theme';

//Components
import AdditionalInfo from '../../components/AdditionalInfo';
import WeatherCard from '../../components/WeatherCard';
import HourlyWeather from '../../components/HourlyWeather';
import { StatusBar } from 'expo-status-bar';

//Styles
import styles from './Home.styles';

const data = {
  "location": {
    "name": "Lewes",
    "region": "East Sussex",
    "country": "United Kingdom",
    "lat": 50.877,
    "lon": 0.01,
    "tz_id": "Europe/London",
    "localtime_epoch": 1740337059,
    "localtime": "2025-02-23 18:57"
  },
  "current": {
    "last_updated_epoch": 1740336300,
    "last_updated": "2025-02-23 18:45",
    "temp_c": 9.7,
    "temp_f": 49.5,
    "is_day": 0,
    "condition": {
      "text": "Light drizzle",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/266.png",
      "code": 1153
    },
    "wind_mph": 23.3,
    "wind_kph": 37.4,
    "wind_degree": 195,
    "wind_dir": "SSW",
    "pressure_mb": 1019,
    "pressure_in": 30.09,
    "precip_mm": 0.45,
    "precip_in": 0.02,
    "humidity": 88,
    "cloud": 100,
    "feelslike_c": 5.8,
    "feelslike_f": 42.4,
    "windchill_c": 5.8,
    "windchill_f": 42.4,
    "heatindex_c": 9.7,
    "heatindex_f": 49.5,
    "dewpoint_c": 7.9,
    "dewpoint_f": 46.2,
    "vis_km": 2,
    "vis_miles": 1,
    "uv": 0,
    "gust_mph": 36.8,
    "gust_kph": 59.2
  },
  "forecast": {
    "forecastday": [
      {
        "date": "2025-02-23",
        "date_epoch": 1740268800,
        "day": {
          "maxtemp_c": 10,
          "maxtemp_f": 49.9,
          "mintemp_c": 6.9,
          "mintemp_f": 44.5,
          "avgtemp_c": 8.7,
          "avgtemp_f": 47.6,
          "maxwind_mph": 25.5,
          "maxwind_kph": 41,
          "totalprecip_mm": 2.41,
          "totalprecip_in": 0.09,
          "totalsnow_cm": 0,
          "avgvis_km": 7.3,
          "avgvis_miles": 4,
          "avghumidity": 89,
          "daily_will_it_rain": 1,
          "daily_chance_of_rain": 85,
          "daily_will_it_snow": 0,
          "daily_chance_of_snow": 0,
          "condition": {
            "text": "Patchy rain nearby",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
            "code": 1063
          },
          "uv": 0.3
        },
        "astro": {
          "sunrise": "06:56 AM",
          "sunset": "05:31 PM",
          "moonrise": "04:51 AM",
          "moonset": "11:27 AM",
          "moon_phase": "Waning Crescent",
          "moon_illumination": 28,
          "is_moon_up": 0,
          "is_sun_up": 0
        },
        "hour": [
          {
            "time_epoch": 1740268800,
            "time": "2025-02-23 00:00",
            "temp_c": 6.9,
            "temp_f": 44.5,
            "is_day": 0,
            "condition": {
              "text": "Mist",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png",
              "code": 1030
            },
            "wind_mph": 7.2,
            "wind_kph": 11.5,
            "wind_degree": 219,
            "wind_dir": "SW",
            "pressure_mb": 1023,
            "pressure_in": 30.22,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 94,
            "cloud": 17,
            "feelslike_c": 4.7,
            "feelslike_f": 40.5,
            "windchill_c": 4.7,
            "windchill_f": 40.5,
            "heatindex_c": 6.9,
            "heatindex_f": 44.5,
            "dewpoint_c": 6.1,
            "dewpoint_f": 43,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 2,
            "vis_miles": 1,
            "gust_mph": 14.3,
            "gust_kph": 23,
            "uv": 0
          },
          {
            "time_epoch": 1740272400,
            "time": "2025-02-23 01:00",
            "temp_c": 6.9,
            "temp_f": 44.5,
            "is_day": 0,
            "condition": {
              "text": "Mist",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png",
              "code": 1030
            },
            "wind_mph": 7.2,
            "wind_kph": 11.5,
            "wind_degree": 211,
            "wind_dir": "SSW",
            "pressure_mb": 1024,
            "pressure_in": 30.23,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 95,
            "cloud": 20,
            "feelslike_c": 4.7,
            "feelslike_f": 40.4,
            "windchill_c": 4.7,
            "windchill_f": 40.4,
            "heatindex_c": 6.9,
            "heatindex_f": 44.5,
            "dewpoint_c": 6.2,
            "dewpoint_f": 43.1,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 2,
            "vis_miles": 1,
            "gust_mph": 14.1,
            "gust_kph": 22.8,
            "uv": 0
          },
          {
            "time_epoch": 1740276000,
            "time": "2025-02-23 02:00",
            "temp_c": 6.9,
            "temp_f": 44.5,
            "is_day": 0,
            "condition": {
              "text": "Partly Cloudy ",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
              "code": 1003
            },
            "wind_mph": 7.8,
            "wind_kph": 12.6,
            "wind_degree": 209,
            "wind_dir": "SSW",
            "pressure_mb": 1024,
            "pressure_in": 30.23,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 95,
            "cloud": 27,
            "feelslike_c": 4.5,
            "feelslike_f": 40.1,
            "windchill_c": 4.5,
            "windchill_f": 40.1,
            "heatindex_c": 6.9,
            "heatindex_f": 44.5,
            "dewpoint_c": 6.2,
            "dewpoint_f": 43.2,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 15.1,
            "gust_kph": 24.4,
            "uv": 0
          },
          {
            "time_epoch": 1740279600,
            "time": "2025-02-23 03:00",
            "temp_c": 7.1,
            "temp_f": 44.8,
            "is_day": 0,
            "condition": {
              "text": "Partly Cloudy ",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
              "code": 1003
            },
            "wind_mph": 8.3,
            "wind_kph": 13.3,
            "wind_degree": 200,
            "wind_dir": "SSW",
            "pressure_mb": 1024,
            "pressure_in": 30.23,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 95,
            "cloud": 26,
            "feelslike_c": 4.6,
            "feelslike_f": 40.3,
            "windchill_c": 4.6,
            "windchill_f": 40.3,
            "heatindex_c": 7.1,
            "heatindex_f": 44.8,
            "dewpoint_c": 6.4,
            "dewpoint_f": 43.6,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 15.9,
            "gust_kph": 25.6,
            "uv": 0
          },
          {
            "time_epoch": 1740283200,
            "time": "2025-02-23 04:00",
            "temp_c": 7.2,
            "temp_f": 45,
            "is_day": 0,
            "condition": {
              "text": "Clear ",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
              "code": 1000
            },
            "wind_mph": 9.8,
            "wind_kph": 15.8,
            "wind_degree": 205,
            "wind_dir": "SSW",
            "pressure_mb": 1024,
            "pressure_in": 30.24,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 95,
            "cloud": 22,
            "feelslike_c": 4.4,
            "feelslike_f": 39.9,
            "windchill_c": 4.4,
            "windchill_f": 39.9,
            "heatindex_c": 7.3,
            "heatindex_f": 45.1,
            "dewpoint_c": 6.4,
            "dewpoint_f": 43.6,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 18.3,
            "gust_kph": 29.5,
            "uv": 0
          },
          {
            "time_epoch": 1740286800,
            "time": "2025-02-23 05:00",
            "temp_c": 7.5,
            "temp_f": 45.6,
            "is_day": 0,
            "condition": {
              "text": "Partly Cloudy ",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
              "code": 1003
            },
            "wind_mph": 11.2,
            "wind_kph": 18,
            "wind_degree": 204,
            "wind_dir": "SSW",
            "pressure_mb": 1024,
            "pressure_in": 30.23,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 94,
            "cloud": 27,
            "feelslike_c": 4.5,
            "feelslike_f": 40.1,
            "windchill_c": 4.5,
            "windchill_f": 40.1,
            "heatindex_c": 7.6,
            "heatindex_f": 45.6,
            "dewpoint_c": 6.6,
            "dewpoint_f": 43.8,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 19.7,
            "gust_kph": 31.7,
            "uv": 0
          },
          {
            "time_epoch": 1740290400,
            "time": "2025-02-23 06:00",
            "temp_c": 7.7,
            "temp_f": 45.9,
            "is_day": 0,
            "condition": {
              "text": "Clear ",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
              "code": 1000
            },
            "wind_mph": 13,
            "wind_kph": 20.9,
            "wind_degree": 195,
            "wind_dir": "SSW",
            "pressure_mb": 1023,
            "pressure_in": 30.21,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 93,
            "cloud": 23,
            "feelslike_c": 4.4,
            "feelslike_f": 39.9,
            "windchill_c": 4.4,
            "windchill_f": 39.9,
            "heatindex_c": 7.7,
            "heatindex_f": 45.9,
            "dewpoint_c": 6.6,
            "dewpoint_f": 43.9,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 22.2,
            "gust_kph": 35.7,
            "uv": 0
          },
          {
            "time_epoch": 1740294000,
            "time": "2025-02-23 07:00",
            "temp_c": 7.7,
            "temp_f": 45.8,
            "is_day": 1,
            "condition": {
              "text": "Sunny",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
              "code": 1000
            },
            "wind_mph": 14.5,
            "wind_kph": 23.4,
            "wind_degree": 194,
            "wind_dir": "SSW",
            "pressure_mb": 1023,
            "pressure_in": 30.22,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 92,
            "cloud": 20,
            "feelslike_c": 4.1,
            "feelslike_f": 39.4,
            "windchill_c": 4.1,
            "windchill_f": 39.4,
            "heatindex_c": 7.7,
            "heatindex_f": 45.8,
            "dewpoint_c": 6.4,
            "dewpoint_f": 43.6,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 24.2,
            "gust_kph": 39,
            "uv": 0
          },
          {
            "time_epoch": 1740297600,
            "time": "2025-02-23 08:00",
            "temp_c": 8.1,
            "temp_f": 46.5,
            "is_day": 1,
            "condition": {
              "text": "Sunny",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
              "code": 1000
            },
            "wind_mph": 15.7,
            "wind_kph": 25.2,
            "wind_degree": 196,
            "wind_dir": "SSW",
            "pressure_mb": 1024,
            "pressure_in": 30.23,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 90,
            "cloud": 24,
            "feelslike_c": 4.4,
            "feelslike_f": 40,
            "windchill_c": 4.4,
            "windchill_f": 40,
            "heatindex_c": 8.1,
            "heatindex_f": 46.5,
            "dewpoint_c": 6.5,
            "dewpoint_f": 43.7,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 24.6,
            "gust_kph": 39.5,
            "uv": 0.2
          },
          {
            "time_epoch": 1740301200,
            "time": "2025-02-23 09:00",
            "temp_c": 8.7,
            "temp_f": 47.7,
            "is_day": 1,
            "condition": {
              "text": "Partly Cloudy ",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
              "code": 1003
            },
            "wind_mph": 17.2,
            "wind_kph": 27.7,
            "wind_degree": 192,
            "wind_dir": "SSW",
            "pressure_mb": 1024,
            "pressure_in": 30.23,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 89,
            "cloud": 32,
            "feelslike_c": 5.1,
            "feelslike_f": 41.1,
            "windchill_c": 5.1,
            "windchill_f": 41.1,
            "heatindex_c": 8.7,
            "heatindex_f": 47.7,
            "dewpoint_c": 7,
            "dewpoint_f": 44.6,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 24.9,
            "gust_kph": 40.1,
            "uv": 0.5
          },
          {
            "time_epoch": 1740304800,
            "time": "2025-02-23 10:00",
            "temp_c": 9,
            "temp_f": 48.3,
            "is_day": 1,
            "condition": {
              "text": "Partly Cloudy ",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
              "code": 1003
            },
            "wind_mph": 19.5,
            "wind_kph": 31.3,
            "wind_degree": 193,
            "wind_dir": "SSW",
            "pressure_mb": 1023,
            "pressure_in": 30.22,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 89,
            "cloud": 36,
            "feelslike_c": 5.2,
            "feelslike_f": 41.4,
            "windchill_c": 5.2,
            "windchill_f": 41.4,
            "heatindex_c": 9.1,
            "heatindex_f": 48.3,
            "dewpoint_c": 7.3,
            "dewpoint_f": 45.1,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 26.5,
            "gust_kph": 42.6,
            "uv": 1
          },
          {
            "time_epoch": 1740308400,
            "time": "2025-02-23 11:00",
            "temp_c": 9.1,
            "temp_f": 48.3,
            "is_day": 1,
            "condition": {
              "text": "Partly Cloudy ",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
              "code": 1003
            },
            "wind_mph": 20.8,
            "wind_kph": 33.5,
            "wind_degree": 195,
            "wind_dir": "SSW",
            "pressure_mb": 1023,
            "pressure_in": 30.22,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 88,
            "cloud": 45,
            "feelslike_c": 5.1,
            "feelslike_f": 41.2,
            "windchill_c": 5.1,
            "windchill_f": 41.2,
            "heatindex_c": 9.1,
            "heatindex_f": 48.3,
            "dewpoint_c": 7.2,
            "dewpoint_f": 45,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 28.1,
            "gust_kph": 45.1,
            "uv": 1.3
          },
          {
            "time_epoch": 1740312000,
            "time": "2025-02-23 12:00",
            "temp_c": 9.3,
            "temp_f": 48.7,
            "is_day": 1,
            "condition": {
              "text": "Overcast ",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
              "code": 1009
            },
            "wind_mph": 22.8,
            "wind_kph": 36.7,
            "wind_degree": 193,
            "wind_dir": "SSW",
            "pressure_mb": 1022,
            "pressure_in": 30.19,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 86,
            "cloud": 100,
            "feelslike_c": 5.2,
            "feelslike_f": 41.4,
            "windchill_c": 5.2,
            "windchill_f": 41.4,
            "heatindex_c": 9.3,
            "heatindex_f": 48.7,
            "dewpoint_c": 7.2,
            "dewpoint_f": 44.9,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 30.3,
            "gust_kph": 48.7,
            "uv": 1.4
          },
          {
            "time_epoch": 1740315600,
            "time": "2025-02-23 13:00",
            "temp_c": 9.3,
            "temp_f": 48.8,
            "is_day": 1,
            "condition": {
              "text": "Overcast ",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
              "code": 1009
            },
            "wind_mph": 23.3,
            "wind_kph": 37.4,
            "wind_degree": 197,
            "wind_dir": "SSW",
            "pressure_mb": 1022,
            "pressure_in": 30.17,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 86,
            "cloud": 100,
            "feelslike_c": 5.2,
            "feelslike_f": 41.4,
            "windchill_c": 5.2,
            "windchill_f": 41.4,
            "heatindex_c": 9.4,
            "heatindex_f": 48.8,
            "dewpoint_c": 7.2,
            "dewpoint_f": 44.9,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 32.2,
            "gust_kph": 51.8,
            "uv": 1.2
          },
          {
            "time_epoch": 1740319200,
            "time": "2025-02-23 14:00",
            "temp_c": 9.5,
            "temp_f": 49.1,
            "is_day": 1,
            "condition": {
              "text": "Overcast ",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
              "code": 1009
            },
            "wind_mph": 23.3,
            "wind_kph": 37.4,
            "wind_degree": 196,
            "wind_dir": "SSW",
            "pressure_mb": 1021,
            "pressure_in": 30.14,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 85,
            "cloud": 100,
            "feelslike_c": 5.5,
            "feelslike_f": 41.8,
            "windchill_c": 5.5,
            "windchill_f": 41.8,
            "heatindex_c": 9.5,
            "heatindex_f": 49.1,
            "dewpoint_c": 7.1,
            "dewpoint_f": 44.7,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 33.9,
            "gust_kph": 54.5,
            "uv": 0.9
          },
          {
            "time_epoch": 1740322800,
            "time": "2025-02-23 15:00",
            "temp_c": 10,
            "temp_f": 49.9,
            "is_day": 1,
            "condition": {
              "text": "Overcast ",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
              "code": 1009
            },
            "wind_mph": 22.8,
            "wind_kph": 36.7,
            "wind_degree": 196,
            "wind_dir": "SSW",
            "pressure_mb": 1020,
            "pressure_in": 30.13,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 83,
            "cloud": 100,
            "feelslike_c": 6.1,
            "feelslike_f": 43,
            "windchill_c": 6.1,
            "windchill_f": 43,
            "heatindex_c": 10,
            "heatindex_f": 49.9,
            "dewpoint_c": 7.3,
            "dewpoint_f": 45.2,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 32.9,
            "gust_kph": 52.9,
            "uv": 0.5
          },
          {
            "time_epoch": 1740326400,
            "time": "2025-02-23 16:00",
            "temp_c": 9.8,
            "temp_f": 49.7,
            "is_day": 1,
            "condition": {
              "text": "Patchy rain nearby",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
              "code": 1063
            },
            "wind_mph": 22.6,
            "wind_kph": 36.4,
            "wind_degree": 198,
            "wind_dir": "SSW",
            "pressure_mb": 1020,
            "pressure_in": 30.12,
            "precip_mm": 0.04,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 84,
            "cloud": 59,
            "feelslike_c": 6,
            "feelslike_f": 42.7,
            "windchill_c": 6,
            "windchill_f": 42.7,
            "heatindex_c": 9.8,
            "heatindex_f": 49.7,
            "dewpoint_c": 7.3,
            "dewpoint_f": 45.1,
            "will_it_rain": 1,
            "chance_of_rain": 85,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 34.9,
            "gust_kph": 56.2,
            "uv": 0.1
          },
          {
            "time_epoch": 1740330000,
            "time": "2025-02-23 17:00",
            "temp_c": 9.8,
            "temp_f": 49.6,
            "is_day": 1,
            "condition": {
              "text": "Light drizzle",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/266.png",
              "code": 1153
            },
            "wind_mph": 23,
            "wind_kph": 37.1,
            "wind_degree": 195,
            "wind_dir": "SSW",
            "pressure_mb": 1019,
            "pressure_in": 30.1,
            "precip_mm": 0.54,
            "precip_in": 0.02,
            "snow_cm": 0,
            "humidity": 87,
            "cloud": 100,
            "feelslike_c": 5.8,
            "feelslike_f": 42.5,
            "windchill_c": 5.8,
            "windchill_f": 42.5,
            "heatindex_c": 9.8,
            "heatindex_f": 49.6,
            "dewpoint_c": 7.8,
            "dewpoint_f": 46,
            "will_it_rain": 1,
            "chance_of_rain": 100,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 2,
            "vis_miles": 1,
            "gust_mph": 35.9,
            "gust_kph": 57.7,
            "uv": 0
          },
          {
            "time_epoch": 1740333600,
            "time": "2025-02-23 18:00",
            "temp_c": 9.7,
            "temp_f": 49.5,
            "is_day": 0,
            "condition": {
              "text": "Light drizzle",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/266.png",
              "code": 1153
            },
            "wind_mph": 23.3,
            "wind_kph": 37.4,
            "wind_degree": 195,
            "wind_dir": "SSW",
            "pressure_mb": 1019,
            "pressure_in": 30.09,
            "precip_mm": 0.45,
            "precip_in": 0.02,
            "snow_cm": 0,
            "humidity": 88,
            "cloud": 100,
            "feelslike_c": 5.8,
            "feelslike_f": 42.4,
            "windchill_c": 5.8,
            "windchill_f": 42.4,
            "heatindex_c": 9.7,
            "heatindex_f": 49.5,
            "dewpoint_c": 7.9,
            "dewpoint_f": 46.2,
            "will_it_rain": 1,
            "chance_of_rain": 100,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 2,
            "vis_miles": 1,
            "gust_mph": 36.8,
            "gust_kph": 59.2,
            "uv": 0
          },
          {
            "time_epoch": 1740337200,
            "time": "2025-02-23 19:00",
            "temp_c": 9.6,
            "temp_f": 49.3,
            "is_day": 0,
            "condition": {
              "text": "Patchy rain nearby",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/176.png",
              "code": 1063
            },
            "wind_mph": 23.9,
            "wind_kph": 38.5,
            "wind_degree": 195,
            "wind_dir": "SSW",
            "pressure_mb": 1019,
            "pressure_in": 30.08,
            "precip_mm": 0.01,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 88,
            "cloud": 100,
            "feelslike_c": 5.5,
            "feelslike_f": 41.9,
            "windchill_c": 5.5,
            "windchill_f": 41.9,
            "heatindex_c": 9.6,
            "heatindex_f": 49.3,
            "dewpoint_c": 7.8,
            "dewpoint_f": 46,
            "will_it_rain": 0,
            "chance_of_rain": 50,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 37.6,
            "gust_kph": 60.6,
            "uv": 0
          },
          {
            "time_epoch": 1740340800,
            "time": "2025-02-23 20:00",
            "temp_c": 9.6,
            "temp_f": 49.2,
            "is_day": 0,
            "condition": {
              "text": "Light drizzle",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/266.png",
              "code": 1153
            },
            "wind_mph": 25.5,
            "wind_kph": 41,
            "wind_degree": 201,
            "wind_dir": "SSW",
            "pressure_mb": 1019,
            "pressure_in": 30.08,
            "precip_mm": 0.35,
            "precip_in": 0.01,
            "snow_cm": 0,
            "humidity": 87,
            "cloud": 100,
            "feelslike_c": 5.3,
            "feelslike_f": 41.6,
            "windchill_c": 5.3,
            "windchill_f": 41.6,
            "heatindex_c": 9.6,
            "heatindex_f": 49.2,
            "dewpoint_c": 7.4,
            "dewpoint_f": 45.4,
            "will_it_rain": 1,
            "chance_of_rain": 100,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 2,
            "vis_miles": 1,
            "gust_mph": 39.4,
            "gust_kph": 63.4,
            "uv": 0
          },
          {
            "time_epoch": 1740344400,
            "time": "2025-02-23 21:00",
            "temp_c": 9.5,
            "temp_f": 49.1,
            "is_day": 0,
            "condition": {
              "text": "Light drizzle",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/266.png",
              "code": 1153
            },
            "wind_mph": 25.5,
            "wind_kph": 41,
            "wind_degree": 199,
            "wind_dir": "SSW",
            "pressure_mb": 1018,
            "pressure_in": 30.07,
            "precip_mm": 0.48,
            "precip_in": 0.02,
            "snow_cm": 0,
            "humidity": 87,
            "cloud": 100,
            "feelslike_c": 5.3,
            "feelslike_f": 41.5,
            "windchill_c": 5.3,
            "windchill_f": 41.5,
            "heatindex_c": 9.5,
            "heatindex_f": 49.1,
            "dewpoint_c": 7.4,
            "dewpoint_f": 45.4,
            "will_it_rain": 1,
            "chance_of_rain": 100,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 2,
            "vis_miles": 1,
            "gust_mph": 39.7,
            "gust_kph": 63.9,
            "uv": 0
          },
          {
            "time_epoch": 1740348000,
            "time": "2025-02-23 22:00",
            "temp_c": 9.3,
            "temp_f": 48.8,
            "is_day": 0,
            "condition": {
              "text": "Light drizzle",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/266.png",
              "code": 1153
            },
            "wind_mph": 25.1,
            "wind_kph": 40.3,
            "wind_degree": 199,
            "wind_dir": "SSW",
            "pressure_mb": 1018,
            "pressure_in": 30.06,
            "precip_mm": 0.29,
            "precip_in": 0.01,
            "snow_cm": 0,
            "humidity": 88,
            "cloud": 100,
            "feelslike_c": 5.1,
            "feelslike_f": 41.1,
            "windchill_c": 5.1,
            "windchill_f": 41.1,
            "heatindex_c": 9.3,
            "heatindex_f": 48.8,
            "dewpoint_c": 7.5,
            "dewpoint_f": 45.5,
            "will_it_rain": 1,
            "chance_of_rain": 100,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 2,
            "vis_miles": 1,
            "gust_mph": 38.9,
            "gust_kph": 62.6,
            "uv": 0
          },
          {
            "time_epoch": 1740351600,
            "time": "2025-02-23 23:00",
            "temp_c": 9.6,
            "temp_f": 49.3,
            "is_day": 0,
            "condition": {
              "text": "Light drizzle",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/266.png",
              "code": 1153
            },
            "wind_mph": 25.5,
            "wind_kph": 41,
            "wind_degree": 200,
            "wind_dir": "SSW",
            "pressure_mb": 1017,
            "pressure_in": 30.04,
            "precip_mm": 0.25,
            "precip_in": 0.01,
            "snow_cm": 0,
            "humidity": 86,
            "cloud": 100,
            "feelslike_c": 5.4,
            "feelslike_f": 41.6,
            "windchill_c": 5.4,
            "windchill_f": 41.6,
            "heatindex_c": 9.6,
            "heatindex_f": 49.3,
            "dewpoint_c": 7.5,
            "dewpoint_f": 45.4,
            "will_it_rain": 1,
            "chance_of_rain": 100,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 2,
            "vis_miles": 1,
            "gust_mph": 39.3,
            "gust_kph": 63.2,
            "uv": 0
          }
        ]
      }
    ]
  }
}

const Home = ({ route }) => {
  // const [cityAndCountry, setCityAndCountry] = useState({});
  // const { data, error, loading, fetchUrl } = useFetch(
  //   `https://api.openweathermap.org/data/2.5/onecall?lat=${route.params.location.coords.latitude}&lon=${route.params.location.coords.longitude}&units=metric&exclude=minutely&appid=${API_KEY}`
  // );
  // const {
  //   data: coorData,
  //   error: coorError,
  //   loading: coordLoading,
  //   fetchUrl: coordfetchUrl,
  // } = useFetch(
  //   `https://api.openweathermap.org/geo/1.0/reverse?lat=${route.params.location.coords.latitude}&lon=${route.params.location.coords.longitude}&limit=5&appid=${API_KEY}`
  // );

  //Theme from Context
  const theme = useContext(ThemeContext);

  // //Weather states
  // const [current, setCurrent] = useState(null);
  // const [weekly, setWeekly] = useState([]);
  // const [hourly, setHourly] = useState(null);

  //Refresh state
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const loadHomeScreen = async () => {
      askPermision();
      // getCityAndCountry();
      // getWeatherInfo();
    };
    loadHomeScreen();
     }, [refreshing]);
  // }, [data, coorData, refreshing]);

  // const getCityAndCountry = async () => {
  //   setCityAndCountry({
  //     country: coorData[0]?.country,
  //     cityName: coorData[0]?.name,
  //   });
  // };

  // const getWeatherInfo = async () => {
  //   setCurrent(data.current);
  //   setHourly(data.hourly);
  //   setWeekly(data.daily);
  // };

  /* Asking for permission to access the user's location. */
  const askPermision = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission denied',
        'This app needs access to your location to show the weather in your area',
        [{ text: 'OK' }]
      );
    }
  };

  // // When the user pulls down on the screen, the screen will refresh and the data will be fetched again.
  const onRefresh = () => {
    setRefreshing(true);
    fetchUrl();
    coordfetchUrl();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  return (
    <>
      {!data && error?.status === 401 && (
        <ScrollView
          style={[styles.container, styles[getTheme('background', theme)]]}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
            <StatusBar
            hidden={false}
            style="auto"
            backgroundColor={theme === 'light' ? '#f5f5f5' : '#222222'}
          />
          <Text style={styles.light_text}>Ups! Something went wrong</Text>
          <Text style={styles.error_text}>{error.message}</Text>
        </ScrollView>
      )}

      {data && (
        <ScrollView
          style={[styles.container, styles[getTheme('background', theme)]]}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <StatusBar
            hidden={false}
            style="auto"
            backgroundColor={theme === 'light' ? '#f5f5f5' : '#222222'}
          />
          <WeatherCard
            current={data.current}
            // loading={loading}
            cityName={data.location.name}
            countryName={data.location.country}
          />
          {/* <AdditionalInfo current={data.current} loading={loading} /> */}
          <AdditionalInfo current={data.current} forecast={data.forecast}  />
            <HourlyWeather hourly={data.forecast.forecastday[0].hour}  />
          {/* <HourlyWeather hourly={hourly} loading={loading} /> */}
        </ScrollView>
      )}
    </>
  );
};



export default Home;
