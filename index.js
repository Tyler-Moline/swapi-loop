let info;

async function fetchData() {
  try {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();
    info = data["results"];
    console.log(info);
  } catch (error) {
    console.log("error:", error);
  }
}

fetchData();

const parentElement = document.body;

function attachToDom() {
  for (let i = 0; i < info.length; i++) {
    const newP = document.createElement("p");
    newP.textContent = `${info[i].name}`;
    parentElement.appendChild(newP);
  }
}

start.addEventListener("click", attachToDom);
