let endpoint = `https://restcountries.eu/rest/v2/all`;
let options = {
    method: "GET",
};
let demoUl = document.querySelector("#users");
fetch(endpoint, options)
    .then((Response) => Response.json())
    .then((results) => {
        console.log(results);
        results.forEach((result) => {
            const li = document.createElement("li");
            const image = document.createElement("img");
            image.setAttribute("src", result.flag);
            const paragraph = document.createElement("p");
            const text = document.createTextNode(result.name);
            li.appendChild(image);
            paragraph.appendChild(text);
            demoUl.appendChild(li);
            demoUl.appendChild(paragraph);
        });
    })
    .catch((error) => console.log(error));
