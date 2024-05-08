/*import React, { useState, useEffect } from 'react';
import axios from 'axios';


/*const API_KEY = 'fynctw2s67bvisdtc8fvbxdtxyjq3meb6pwnl70h';
const API_URL = 'https://www.meteosource.com/api/v1/free';
import { Card } from "@mui/material";

/*const MeteoCard = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const findPlacesResponse = await axios.get(`${API_URL}/find_places`, {
          params: {
            text: "Tunis",
            key: API_KEY
          }
        });

        const placeId = findPlacesResponse.data.find(place => place.country === 'Tunisian Republic').place_id;

        const pointResponse = await axios.get(`${API_URL}/point`,{
          params: {
            place_id: placeId,
            sections: 'current',
            timezone: 'UTC',
            language: 'en',
            units: 'metric',
            key: API_KEY
          }
        });

        setWeatherData(pointResponse.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

    fetchWeatherData();
  }, []);

  

  const currentWeather = weatherData.current;

  console.log(weatherData);
  return (
   <Card> </Card>

  );
}

export default MeteoCard;*/