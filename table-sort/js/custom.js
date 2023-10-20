// The array of objects, one object for each artist.
const artists = [
  {
    name: "Ms Scandalous",
    birthYear: 1985,
    link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
  },
  {
   name: "Juggy D",
   birthYear: 1981,
   link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
 },
 {
   name: "Sukhbir Singh",
   birthYear: 1969,
   link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
 },
 {
   name: "Abrar-ul-Haq",
   birthYear: 1989,
   link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
 },
 {
   name: "Rishi Rich",
   birthYear: 1970,
   link: "https://www.youtube.com/watch?v=O95-w2gACuA"
 }
]

// Function to populate the table with artists
function populateTable() {
  const listDiv = document.querySelector("#bhangra-artists");
  let contents = "<table border='1'>";
  contents += "<tr><th>Name</th><th>Year of Birth</th><th>Popular Song</th></tr>";

  artists.forEach(function (artist) {
    contents += "<tr>";
    contents += `<td>${artist.name}</td>`;
    contents += `<td>${artist.birthYear}</td>`;
    contents += `<td><a href="${artist.link}" target="_blank">${artist.name}'s Popular Song</a></td>`;
    contents += "</tr>";
  });

  contents += "</table>";

  listDiv.innerHTML = contents;
}

// Function to sort the table by name
function sortByName() {
  artists.sort((a, b) => a.name.localeCompare(b.name));
  populateTable();
}

// Function to sort the table by birth year
function sortByBirth() {
  artists.sort((a, b) => a.birthYear - b.birthYear);
  populateTable();
}

// Function to randomize the table
function randomizeTable() {
  artists.sort(() => Math.random() - 0.5);
  populateTable();
}

// Add event listeners to buttons after the DOM has loaded
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("name-button").addEventListener("click", sortByName);
  document.getElementById("date-button").addEventListener("click", sortByBirth);
  document.getElementById("random-button").addEventListener("click", randomizeTable);

  // Initial population of the table
  populateTable();
});
