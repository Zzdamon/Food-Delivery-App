class Restaurant{
    constructor(name,image,minPrice,deliveryPrice,description,priceRange,
        deliveryTime,menu,id)
        {   this.id=id;
            this.name=name;
            this.image=image;
            this.minPrice=minPrice;
            this.deliveryPrice=deliveryPrice;
            this.description=description;
            this.priceRange=priceRange;
            this.deliveryTime=deliveryTime;
            this.menu=menu;
        }

        renderMenu(){
            console.log('RENDER MENU')
            const restaurant=document.querySelector('#Menu'+this.id);
            // restaurant.innerHTML+=``;
            // restaurant.innerHTML+=`<form id='addToCartForm' >
            // `;
            // APP.menus.push({
            //     restaurant:this.id,
            //     menu:{}
            // })
            // restaurant.innerHTML += `
            //         <table>
            //             <tbody>
            //     `;
            let i =0;
            Object.keys(this.menu).forEach((item)=>{
                
                

                restaurant.innerHTML+=`
                <h2>${item}</h2>
                `;
                // let i=0;

                this.menu[item].forEach((item)=>{
                    let itemName=this.id+ "prodName"+i;    
                    let itemNameName =item.name.replace(/\s/g, '');
                    itemNameName=item.name.replace("'","");
                    let noProducts=this.id+"noProd"+i;
                    // let itemName= item.name.replace(/\s/g, '/');


                    // let value=[this.name,item.name,item.price];
                    restaurant.innerHTML+=`
                    <label > ${item.name} ${item.price} lei</label>
                    <input type="number" name=${noProducts}>
                    <input hidden type="text" name=${itemName} value=${itemNameName}>

                    `
                        i++;
                })
            });
            restaurant.innerHTML+=`<button name="order${this.name}" type="submit">Order</button>`;
            // restaurant.innerHTML += `
            //         </tbody>
            //     </table>   
            //     `;
        }
        // addFormFunctionality() {
        
        //     const form = document.querySelector("#Menu"+this.id);
        //     form.onsubmit=function(event){
        //         event.preventDefault();
                
        //       console.log ("aa");
        //     }
    
        // }
        renderRestaurant(){
            const restaurantList=document.querySelector('#restaurant-list')
            let idC="Menu"+this.id;
            restaurantList.innerHTML+=`
            <li class = 'restaurant' id=${this.id}>
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
                    
                </div>
               
                <form class="theforms" id=${idC}>
                </form>
            </li>
            `
                this.renderMenu();
            //    this.addFormFunctionality();
        }

        
        
    }

    // const form = document.querySelector('#');

    function addFormFunctionality() {
        
        const form = document.querySelector('#Menukfc');
        const form1 = document.querySelector('#Menudominos');

        form.onsubmit=function(event){
            event.preventDefault();

          console.log (event.target.kfcprodName0.value);
        }

        form1.onsubmit=function(event){
            event.preventDefault();

          console.log (event.target.dominosprodName0.value);
        }

    }
    window.addEventListener('load', addFormFunctionality);



