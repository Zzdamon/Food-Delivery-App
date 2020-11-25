class Restaurant{
    constructor(name,image,minPrice,deliveryPrice,description,priceRange,
        deliveryTime,menu){
            this.name=name;
            this.image=image;
            this.minPrice=minPrice;
            this.deliveryPrice=deliveryPrice;
            this.description=description;
            this.priceRange=priceRange;
            this.deliveryTime=deliveryTime;
            this.menu=menu;
        }

        renderRestaurant(){
            const restaurantList=document.querySelector('#restaurant-list')
            restaurantList.innerHTML+=`
            <li class = 'restaurant'>
                <div class = "profilediv">
                    <img class="profile" src= ${this.image} alt="Restaurant logo" id="logo">
                </div>
                <div>
                    <h2>${this.name}</h2>
                    <p>${this.description}<p>
                    <img class="icon" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Simple_icon_time.svg/1200px-Simple_icon_time.svg.png'>
                    <span>${this.deliveryTime}</span>
                    <br>
                    <img class="icon" src='https://i.pinimg.com/originals/5c/44/92/5c44929ceecbafc93b5bf1320aeb574f.png'>
                    <span>${this.deliveryPrice} lei</span>
                    <br>
                    <img class="icon" src='https://simpleicon.com/wp-content/uploads/basket.png'>
                    <span>Min. ${this.minPrice} lei</span>
                    <br>
                    <span>${this.priceRange}</span>
                    <div id=${this.name}></div>
                    <button onclick="displayMenu">See menu</button>
                </div>
            </li>
            `
        }

        renderMenuCateg(item){

        }

        renderMenu(){
            const restaurant=querySelector('#'+this.name);
            restaurant.innerHTML+=``;

            Object.keys(this.menu).forEach((item)=>{
                restaurant.innerHTML+=`
                <button>${item}</button>
                `;
            });
                this.menu[0].forEach((item)=>{
                    restaurant.innerHTML+=item.value;

                })
            // restaurant.innerHTML+=``;

        }
}

