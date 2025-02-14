function flashRandomNumber() {

  const elementIds = ["element1", "element2", "element3"];

  for (let id of elementIds) {
    let randomNumber = Math.floor(Math.random() * 8) + 1;

    document.getElementById(id).textContent = randomNumber;

  }
  setTimeout(flashRandomNumber, 1500);

}


function dateTime() {

  const d = new Date();
  const dateString = d.toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});

document.getElementById("demo").innerHTML = dateString;

setTimeout(dateTime, 1000);

}



 flashRandomNumber();
 dateTime();