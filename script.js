const parkingZoneImage = document.getElementById("parkingZoneImage");
const parkingZoneOverlay = document.getElementById("parkingZoneOverlay");

parkingZoneImage.addEventListener("click", function(event) {
  if (event.target === parkingZoneImage) {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.top = `${event.clientY}px`;
    dot.style.left = `${event.clientX}px`;
    parkingZoneOverlay.appendChild(dot);
    parkingZoneOverlay.style.opacity = "1";
    parkingZoneOverlay.style.pointerEvents = "auto";
    dot.addEventListener("click", function() {
      const vehicleType = prompt("Enter type of vehicle:");
      const parkingTime = prompt("Enter time period of parking:");
      const parkingDate = prompt("Enter date of parking:");
      const vehicleNumber = prompt("Enter vehicle number:");
      dot.style.backgroundColor = "red";
      dot.title = `Vehicle Type: ${vehicleType}\nParking Time: ${parkingTime}\nParking Date: ${parkingDate}\nVehicle Number: ${vehicleNumber}`;
    });
  }
});

parkingZoneOverlay.addEventListener("click", function(event) {
  if (event.target === parkingZoneOverlay) {
    parkingZoneOverlay.style.opacity = "0";
    parkingZoneOverlay.style.pointerEvents = "none";
    while (parkingZoneOverlay.firstChild) {
      parkingZoneOverlay.removeChild(parkingZoneOverlay.firstChild);
    }
  }
});
