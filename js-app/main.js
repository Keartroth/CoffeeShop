const beanUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

let beanVarieties = [];
let coffees = [];

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

// Bean fetch functions
// Get all bean varieties from the database
function getAllBeanVarieties() {
    return fetch(beanUrl)
        .then(resp => resp.json())
        .then(resp => beanVarieties = resp);
}

// Add a bean to the database
const addBean = (bean) => {
    return fetch(beanUrl, {
        method: "Post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bean)
    })
        .then(getAllBeanVarieties);
}

// Coffee fetch functions
// Get all coffees from the database
function getAllCoffees() {
    return fetch(coffeeUrl)
        .then(resp => resp.json())
        .then(resp => coffees = resp);
}

// Add a coffee to the database
const addCoffee = (coffee) => {
    return fetch(coffeeUrl, {
        method: "Post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(coffee)
    })
        .then(getAllCoffees);
}