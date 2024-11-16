document.getElementById("owner-btn").addEventListener("click", () => {
  document.getElementById("owner-section").classList.remove("hidden");
  document.getElementById("valet-section").classList.add("hidden");
});

document.getElementById("valet-btn").addEventListener("click", () => {
  document.getElementById("valet-section").classList.remove("hidden");
  document.getElementById("owner-section").classList.add("hidden");
});

let map;
let selectedLocation;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 12.971598, lng: 77.594566 },
    zoom: 14,
  });

  map.addListener("click", (event) => {
    selectedLocation = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    new google.maps.Marker({
      position: selectedLocation,
      map: map,
    });
    console.log("Selected Location:", selectedLocation);
  });
}

window.initMap = initMap;

document.getElementById("grant-access-btn").addEventListener("click", () => {
  const valetAddress = document.getElementById("valet-address").value;
  const accessTime = document.getElementById("access-time").value;

  if (valetAddress && accessTime && selectedLocation) {
    console.log("Granting access...");
    console.log("Valet Address:", valetAddress);
    console.log("Access Time:", accessTime);
    console.log("Parking Location:", selectedLocation);
    // Call backend or blockchain interaction here
  } else {
    alert("Please fill in all details and select a location.");
  }
});

let carStatus = "Locked";

document.getElementById("unlock-btn").addEventListener("click", () => {
  carStatus = "Unlocked";
  document.getElementById("car-status").innerText = "Car is Unlocked";
  console.log("Car Unlocked");
  // Call blockchain to unlock car
});

document.getElementById("lock-btn").addEventListener("click", () => {
  carStatus = "Locked";
  document.getElementById("car-status").innerText = "Car is Locked";
  console.log("Car Locked");
  // Call blockchain to lock car
});
