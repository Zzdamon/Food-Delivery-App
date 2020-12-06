// cream un obiect global, numit APP
window.APP = {};
APP.cart={restaurant:"",
products:[]};

// index.js fiind primul fisier care se incarca, mainPage va fi available in toate celelalte fisiere
window.mainPage = document.querySelector('#root');
window.mainPage.innerHTML += `
    
    <main></main>

    
`;

function renderAbout(){
    mainPage.innerHTML=`
        <svg id="thesvg">

            <rect id="therectangle" width="400" height="100" style="fill:bisque;" />
            <text x="100" y="25">yEAT is a fictional company that delivers hot and delicious food in these hard times.
                <tspan x="100" y="50">Order with confidence from us and we will deliver your food in the shortest time possible! 
                    </tspan>
                <tspan x="100" y="75">Enjoy the provided video and audio while your courier brings your food to your door.</tspan>
                <tspan x="100" y="100">For more information please contact us.</tspan>
                <tspan x="10" y="125">Don't forget to check our website from time to time to get good discounts!</tspan>
            </text>
            <defs>
                <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" style="stop-color:rgb(197, 202, 194);
                  stop-opacity:0" />
                  <stop offset="100%" style="stop-color:rgb(132, 197, 91);stop-opacity:1" />
                </radialGradient>
              </defs>
            <g id="circle">
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="3" fill="url(#grad1)" />
                    <text id="yeet" x="30" y="55">yEAT</text>
                </svg>
            </g>
          </svg>
          <video id = "foodvideo" controls>
	<source src="media/cooking.mp4" type="video/mp4">
</video>`;
}

function renderCart(){
    if(APP.cart.products.length>=1){

    mainPage.innerHTML=` <header>
    
    <div id="topimagediv">
    </div>
</header>`;

        mainPage.innerHTML+=`<div id="order">
        <h1>Order Details:</h1>
        <p>Restaurant: ${APP.cart.restaurant.name}</p>
        <p>Product(s):</p>
        </div>
        `
        const order=document.querySelector("#order");
        let total=0;
        APP.cart.products.forEach((item)=>{
            order.innerHTML+=`<p>${item.product}</p>
            <p>Price: ${item.price} lei</p>
            <p>Number of items: ${item.noProducts}</p> 
            `
            total+=item.price*item.noProducts;
        })
        order.innerHTML+=`
        <h3>Total order: ${total} lei</h3>
        <h3>Delivery fee: ${APP.cart.restaurant.deliveryPrice} lei</h3>
        <h2>TOTAL: ${total+APP.cart.restaurant.deliveryPrice} lei<h2>
        <div id="orderBtn">
        <button id = "orderButton" onclick=showMap(${total})>ORDER</button>
        </div>
      
        `
}
    else{
        window.alert("You don't have any items in your cart!");
    }
}

function showMap(total){
    let minOrder=APP.cart.restaurant.minPrice;
    if(APP.cart.restaurant.minPrice<total ){
    document.querySelector("#orderBtn").innerHTML=``;
    document.getElementById("christmas").play();
    const order=document.querySelector("#order");
    order.innerHTML+=`<h2 id="successfulorder">Your order was received and will be at your home soon!</h2><img id="courier" src="media/on the way.svg">`;
    
       initMap();
    document.querySelector("#map").style.height="57vh";
    document.querySelector("#map").style.width="100%";
    }
    else{
        window.alert(`Your order is too small! Your order must be at least ${minOrder} lei`);
    }
}

APP.restaurants=[
    {   id:"dominos",
        address:[44.17707369201659,28.62258175164743],
        image:'media/dominos.png',
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
    address:[44.2041,28.6336],
    image:'media/kfc.jpg',
        name:"KFC",
        minPrice:30,
        deliveryPrice:9,
        description:"Fried Chicken",
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
    address:[44.2050,28.6439],
    image:'media/mcdonalds.png',
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
ctx.font = "95px Arial";
ctx.fillText("yEAT", 10, 105, 80);
ctx.textAlign="center";
ctx.textBaseline="middle";


document.getElementById("christmas").play();
// Create a raster item using the image tag with id='pasta'
var raster = new Raster("pasta");
// Move the raster to the center of the view
raster.position = view.center;
// Scale the raster by 50%
raster.scale(0.5);
// Rotate the raster by 45 degrees:
raster.rotate(45);

window.addEventListener('keydown', logKey);

function logKey(e) {
    window.alert("aaa")
    if (e.altkey) 
        showMenu("Menudominosformdiv", "Menudominosbutton");
    else 
        if (e.shiftKey)
            showMenu("Menukfcformdiv", "Menukfcbutton");
        else
            if (e.ctrlKey) 
                showMenu("MenumcDonaldsformdiv", "MenumcDonaldsbutton");
}

function renderHomePage(){
    mainPage.innerHTML=`	<ul id="restaurant-list">
	</ul>`;

    startRendering();
    addFormFunctionality();
}