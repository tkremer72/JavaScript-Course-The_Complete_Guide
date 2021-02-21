import { Modal } from "./UI/Modal";
import { Map } from "./UI/Map";
import { getCoordsFromAddress, getAddressFromCoords } from "./Utility/Location";

class PlaceFinder {
  constructor() {
    //get acess to the two DOM elements and store them in a local reference
    const addressForm = document.querySelector("form");
    const locateUserButton = document.getElementById("locate-btn");
    this.shareButton = document.getElementById('share-btn');

    locateUserButton.addEventListener(
      "click",
      this.locateUserHandler.bind(this)
    );
    this.shareButton.addEventListener('click', this.sharePlaceHandler);
    addressForm.addEventListener("submit", this.findAddressHandler.bind(this));
  }
  sharePlaceHandler() {
    const sharedLinkInputElement = document.getElementById('share-link');
    if(!navigator.clipboard) {
      sharedLinkInputElement.select();
      return; 
    }
    navigator.clipboard.writeText(sharedLinkInputElement.value)
    .then(() => {
      alert('Copied address into clipboard!')
    })
    .catch(error => {
      console.log(error);
      sharedLinkInputElement.select();
    });
  }
  //Get the location on the map
  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
    this.shareButton.disabled = false;
    const sharedLinkInputElement = document.getElementById('share-link');
    sharedLinkInputElement.value = `${location.origin}/my-place?address=${encodeURI(address)}&lat=${coordinates.lat}&lng=${coordinates.lng}`;
  }

   locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        "Location feature is not available in your browser - please use a more modern browser or enter an address manually."
      );
      return;
    }
    const modal = new Modal(
      "loading-modal-content",
      "Loading location - please wait!"
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      async (successResult) => {
        //console.log(successResult);
        const coordinates = {
          //instructor uses the math.random to keep his location a secret
          lat: successResult.coords.latitude /*  + Math.random() * 50 */,
          lng: successResult.coords.longitude /*  + Math.random() * 50 */,
        };
        //console.log(coordinates);
        const address = await getAddressFromCoords(coordinates);
                modal.hide();
this.selectPlace(coordinates, address);
      },
      (error) => {
        modal.hide();
        alert(
          "Unfortunately I could not find your location.  Please enter an address manually!"
        );
      }
    );
  }
  //get access to the user input, prevent the submit default and get access to google maps
  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector("input").value;
    if (!address || address.trim().length === 0) {
      alert("Invalid address entered - please try again!");
      return;
    }
    const modal = new Modal(
      "loading-modal-content",
      "Loading location - please wait!"
    );
    modal.show();
    try {
      const coordinates = await getCoordsFromAddress(address);
      this.selectPlace(coordinates, address);
    } catch (error) {
      alert(error.message);
    }
    modal.hide();
  }
}

const placeFinder = new PlaceFinder();
