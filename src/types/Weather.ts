export type Weather = {
  coordinates: Coordinates;
  sys: Sys;
  weather: WeatherType;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  weatherdata: WeatherData;
  weatherresponse: WeatherResponse;
};

type Coordinates = {
  lon: number;
  lat: number;
};

type Sys = {
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
};

type WeatherType = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
};

type Wind = {
  speed: number;
  deg: number;
};

type Clouds = {
  all: number;
};

type WeatherData = {
  coord: Coordinates;
  sys: Sys;
  weather: Weather[];
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  id: number;
  name: string;
};

type WeatherResponse = {
  cnt: number;
  list: WeatherData[];
};
