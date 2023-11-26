// initialize array of things

/*
*/
const options = [

    {
        name: "Mug Decorating Kit",
        image: "https://m.media-amazon.com/images/I/81sooNi1JyL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        name: "Bunny Hat for Cats",
        image: "https://m.media-amazon.com/images/I/6162+SL2isL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        name: "Guinea Pig Figurine",
        image: "https://www.kness.fr/wp-content/uploads/2022/05/guinea-pig-2-youngs-4.jpg",
    },
    {
        name: "Mushroom Figurine",
        image: "https://m.media-amazon.com/images/I/51td628feIL.jpg",
    },
    {
        name: "Bracelet Making Kit",
        image: "https://gilitoy.com/cdn/shop/products/1_c1021fe4-ad83-4588-a1c2-2375869b77f4_1024x1024.jpg?v=1678758929",
    },
    {
        name: "Penguin Figurine",
        image:"https://penguingiftshop.com/cdn/shop/products/paige-penguin-figurine.jpg?v=1572816522",
    },
    {
        name: "Miniature Cooking Set",
        image: "https://m.media-amazon.com/images/I/71IH0yFhXhL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    }

]

function displaySelected(){
    // choose one randomly using math.random
    const chosen = options[Math.trunc(Math.random()*options.length)];
    
    // display using innerhtml
    const display = document.getElementById("display-select");
    display.innerHTML = `
        <br><br>
        <p>you won a...</p>
        <h2>${chosen.name}<h2>
        <img src=${chosen.image} style="max-height: 200px">
    `;
    console.log(chosen.name);
}

