import axios from 'axios';
import { Loader } from '@googlemaps/js-api-loader';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY as string;
const loader = new Loader({
  apiKey: GOOGLE_API_KEY,
  version: "weekly"
});

/*
loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});
*/

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  
  axios.get<GoogleGeocodingResponse>(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
    enteredAddress
    )}&key=${GOOGLE_API_KEY}`
  ).then(response => {
    if (response.data.status !== 'OK') {
      throw new Error('Could not fetch location!');
    }
    const coordinates = response.data.results[0].geometry.location;
    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: coordinates.lat, lng: coordinates.lng},
        zoom: 16,
      })
      console.log(map)
    })
  }).catch(err => {
    alert(err.message);
    console.log(err);
  });
}

form?.addEventListener('submit', searchAddressHandler);