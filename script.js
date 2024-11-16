// Grant Access Logic (Owner)
document.getElementById("grant-access-btn")?.addEventListener("click", () => {
  const valetAddress = document.getElementById("valet-address").value;
  const accessTime = document.getElementById("access-time").value;

  if (valetAddress && accessTime) {
    alert(`Access granted to ${valetAddress} until ${accessTime}`);
    console.log("Grant Access Details:", { valetAddress, accessTime });
    // Call backend or blockchain interaction here
  } else {
    alert("Please fill in all details.");
  }
});

// Unlock/Lock Car Logic (Valet)
let carStatus = "Locked";

document.getElementById("unlock-btn")?.addEventListener("click", () => {
  carStatus = "Unlocked";
  document.getElementById("car-status").innerText = "Car is Unlocked";
  console.log("Car Unlocked");
  // Blockchain interaction logic goes here
});

document.getElementById("lock-btn")?.addEventListener("click", () => {
  carStatus = "Locked";
  document.getElementById("car-status").innerText = "Car is Locked";
  console.log("Car Locked");
  // Blockchain interaction logic goes here
});
