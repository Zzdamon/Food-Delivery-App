// cream un obiect global, numit APP
window.APP = {};
// index.js fiind primul fisier care se incarca, mainPage va fi available in toate celelalte fisiere
window.mainPage = document.querySelector('#root');
window.mainPage.innerHTML += `
    <header>
        <div id="topdiv">
            <img style="float:left; max-height:65px;" src="stars.png" alt>
            <img style="float:right;max-height:65px;" src="stars.png" alt>
            <canvas id="titleCanvas">yEAT</canvas>
        </div>
        <div id="topimagediv">
            <img src="foodiesfeed.com_pizza-with-italian-sausage.jpg" alt>
        </div>
    </header>
    <main></main>
    <footer></footer>
`;

APP.restaurants=[
    {   id:"dominos",
        image:'https://i.pinimg.com/originals/d7/17/23/d71723202ccde3f10e638a5da6dba237.jpg',
        name:"Domino's Pizza",
        minPrice:40,
        deliveryPrice:5,
        description:"Italian style pizza",
        priceRange:'$$',
        deliveryTime:'40min',
        menu:{
            popular: [
                {
                    name:"Pizza Extravaganzza",
                    price: 25
            },
            {
                name:"Pizza Domino's Special",
                price: 32
            }
        ],
            pizza:[
            {
                name:'Pizza Margherita',
                price:25
            },
            {
                name:'Pizza Quattro Stagioni',
                price:28
            }
        ],
            pasta:[
            {
                name:'Carbonara Pasta',
                price:24.5
            },
            {
                name:'Pollo Pasta',
                price: 24.5
            }
        ]
        }
    },

    {   id: "kfc",
        image:'https://upload.wikimedia.org/wikipedia/commons/f/ff/Kentucky_Fried_Chicken_201x_logo.svg',
        name:"KFC",
        minPrice:30,
        deliveryPrice:9,
        description:"American burgers, Fried Chicken",
        priceRange:'$',
        deliveryTime:'25min',
        menu:{
            popular: [
                {
                    name:"Christmas Box",
                    price: 30
            },
            {
                name:"Christmas Bucket",
                price: 50
            }
        ],
            buckets:[
            {
                name:'Giant Bucket',
                price:80
            },
            {
                name:'Smart Bucket Plus',
                price:70
            }
        ],
            burgers:[
            {
                name:'Booster Menu',
                price:20.5
            },
            {
                name:'Double Crispy Burger Menu',
                price: 20.5
            }
        ]
        }
    },

    {   id: "mcDonalds",
        image:'https://images.safe.com/logos/customers/mcdonalds.png',
        name:"McDonald's",
        minPrice:25,
        deliveryPrice:0,
        description:"American Burgers",
        priceRange:'$',
        deliveryTime:'30min',
        menu:{
            popular: [
                {
                    name:"Big Mac Menu",
                    price: 17.9
            },
            {
                name:"Double Cheesburger Menu",
                price: 17.9
            }
        ],
            premium:[
            {
                name:'Crispy Chicken McWrap Menu',
                price:21
            },
            {
                name:'Royal Deluxe Menu',
                price:21
            }
        ],
            clasic:[
            {
                name:'McChicken Menu',
                price:17.9
            },
            {
                name:'McNuggets Menu',
                price: 27.9
            }
        ]
        }
    }
]

APP.cart=[];
APP.menus=[];

//add to local storage
APP.addRestaurants = (restaurants) => {
	localStorage.setItem("restaurants", JSON.stringify(restaurants));
}
// pentru a extrage vectorul de produse, luam valoarea corespunzatoare cheii "products"
// apoi o parsam, pentru a deveni iar vector de obiecte, si o returnam 
APP.getRestaurants = () => {
	const restaurants = localStorage.getItem("restaurants");
	return JSON.parse(restaurants);
};
// daca nu avem nimic in baza de date
// introducem vectorul de produse in localStorage
if (APP.getRestaurants() === null){
	APP.addRestaurants(APP.restaurants);
}


function startRendering() {
	// "randam" lista de produse, trimitand ca parametru APP.products (incarcat mai sus)
	APP.renderRestaurantList(APP.getRestaurants());
}

// DUPA ce s-au incarcat TOATE scripturile, apelam functia startRendering
// facem asta pentru ca la momentul incarcarii lui index.js, nu stim cine renderProductList()
window.addEventListener('load', startRendering);

var c = document.getElementById("titleCanvas");
var ctx = c.getContext("2d");
ctx.font = "55px Arial";
ctx.fillText("yEAT", 10, 50);
ctx.textAlign="center";
ctx.textBaseline="middle";

document.getElementById("christmas").play();
// Create a raster item using the image tag with id='mona'
var raster = new Raster('pasta');

// Move the raster to the center of the view
raster.position = view.center;

// Scale the raster by 50%
raster.scale(0.5);

// Rotate the raster by 45 degrees:
raster.rotate(90);