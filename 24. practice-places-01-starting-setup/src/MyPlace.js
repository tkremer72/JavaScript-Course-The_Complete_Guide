import { Map } from './UI/Map';

class LoadedPlace {
     constructor(coordinates, address) {
          new Map(coordinates);
          const headerTitleElement = document.querySelector('header h1');
          headerTitleElement.textContent = address;
     }
}
const url = new URL(location.href);
const queryParams = url.searchParams;
const coords = {//convert to a number using parseFloat or the +
     lat: parseFloat(queryParams.get('lat')),
     lng: +queryParams.get('lng')
};
const address = queryParams.get('address')
new LoadedPlace(coords, address);