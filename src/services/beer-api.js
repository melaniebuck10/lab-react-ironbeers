import axios from 'axios';

export const allBeers = async () => {
  const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
  const body = response.data;
  return body;
};

export const loadSingleBeer = async (id) => {
  const response = await axios.get(
    `https://ih-beers-api2.herokuapp.com/beers/${id}`
  );
  const body = response.data;
  return body;
};
