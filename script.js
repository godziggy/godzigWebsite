function flashRandomNumber() {

  const elementIds = ["element1", "element2", "element3"];

  for (let id of elementIds) {
    let randomNumber = Math.floor(Math.random() * 8) + 1;

    document.getElementById(id).textContent = randomNumber;

  }
  setTimeout(flashRandomNumber, 1000);

  // let randomNumber = Math.floor(Math.random() * 8) + 1; // Generate random number between 1 and 100

  // document.getElementById("random-number").textContent = randomNumber;

  // setTimeout(flashRandomNumber, 1000); // Update every 100 milliseconds

}


 // Start flashing on page load
 flashRandomNumber();