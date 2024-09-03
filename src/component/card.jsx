import React, { useEffect, useState } from "react";
import searchicon from "../assets/search.png";
import drizzle from "../assets/drizzle.png";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import axios from "axios";
import { useSelector ,useDispatch} from "react-redux";
import { setWeather } from "../features/weather";
const card = () => {
  /* const options = {
        method: 'GET',
        url: 'https://meteostat.p.rapidapi.com/stations/daily',
        params: {
          station: '10637',
          start: '2020-01-01',
          end: '2020-01-31'
        },
        headers: {
          'x-rapidapi-key': 'c5175a5edfmshb17d4a5edb0f8abp184409jsna4bddf5fd5e8',
          'x-rapidapi-host': 'meteostat.p.rapidapi.com'
        }
      };

  useEffect(()=>{
    const run =async()=>{
        const response = await axios.request(options);
        console.log(response.data.data.tmax);
    }
    run()
},[]) */
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const [city, setCity] = useState("london");
  let place;
  const KEY = "6969bbd48fe69a8173561054670ccbf9";

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
        );
        dispatch(setWeather({
          city: response.data.name,
          temp: Math.floor(response.data.main.temp - 273.15),
          humidity: response.data.main.humidity,
          speed: response.data.wind.speed,
        }))
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [city]);
  return (
    <>
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              place = e.target.value;
            }}
          />
          <img
            src={searchicon}
            onClick={() => {
              setCity(place)
            }}
          />
        </div>
        <div className="weather">
          {weather.temp >= 35 ? (
            <img src={clear} />
          ) : weather.temp >= 30 ? (
            <img src={cloud} />
          ) : weather.temp >= 25 ? (
            <img src={drizzle} />
          ) : weather.temp >= 15 ? (
            <img src={rain} />
          ) : (
            <img src={snow} />
          )}
          <h1 className="temp">{weather.temp}°C</h1>
          <h2 className="city">{weather.name}</h2>
        </div>
        <div className="footer">
          <div className="col">
            <img src={humidity} />
            <div className="content">
              <p>{weather.humidity}%</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={wind} />
            <div className="content">
              <p>{weather.speed} km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
