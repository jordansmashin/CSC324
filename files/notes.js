/* unshift is like push but adds the values to the beginning of the array rather than the ending like push does */

// notes over classes and inherritance
class Person {
    constructor(name, age, desire) {
        this.name = name;
        this.age = age;
        this.desire = desire;
        this.greet();
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

let dorothy = new Person("Dorothy", 12, "Kansas");
console.log(dorothy.age)

class Lion extends Person {
    eat() {
        console.log("Yum!");
    }
}

cowardly = new Lion("Coward", 20, "Courage")
cowardly.eat();

// notes on how to make the table for our assignment

<table>
  <tr>
    <th>name</th>
    <th>height</th>
    <th>place</th>
  </tr>
  <tr>
    <td>Kilimanjaro</td>
    <td>5895</td>
    <td>Tanzania</td>
  </tr>
  <tr>
    <td>Everest</td>
    <td>10000</td>
    <td>space</td>
  </tr>
</table>

// this will make the basics of it

const listDiv = document.querySelector("#bhangra-artists");

// make the inner html:
let contents = "<ul>";
artists.forEach(function(artist) {
  contents += `<li>${artist.name}</li>`;
  contents += "<ul>";
  contents += `<li>Year of birth: ${artist.birthYear}</li>`;
  contents += `<li>Here is <a href= "${artist.link}" target="_blank">a popular song by ${artist.name}</a></li>`;
  contents += "</ul>";
})
contents = contents + "</ul>";

//insert unordered list HTML into div:
listDiv.innerHTML = contents;

// essentially it is this but with the above mentioned tr and td