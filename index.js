import { fooditem } from "./fooditem.js";

console.log(fooditem);

function displayItems (){
    var briyani= document.getElementById('briyani');
    var chicken= document.getElementById('chicken');
    var chinese= document.getElementById('chinese');
    var southIndian= document.getElementById('south-indian');
    var vegetable= document.getElementById('vegetable');

    const briyaniData=fooditem.filter(item=> item.category=='briyani');
    console.log(briyaniData)
    const chickenData=fooditem.filter(item=> item.category=='chicken');
    console.log(chickenData)
    const chineseData=fooditem.filter(item=> item.category=='chinese');
    console.log(chineseData)
    const southIndianData=fooditem.filter(item=> item.category=='south-indian');
    console.log(southIndianData)
    const vegetableData=fooditem.filter(item=> item.category=='vegetable');
    console.log(vegetableData)

    briyaniData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id', 'card-top');


        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText=' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-whishlist');
        heart.setAttribute('id', item.id);

        var cart = document.createElement('i');
        cart.setAttribute('class', 'fa fa-cart-plus add-to-cart');
        cart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);
        cardTop.appendChild(cart);

        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        briyani.appendChild(itemCard);
    })


    chickenData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        
        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText=' ' + item.rating;
        
        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-whishlist');
        heart.setAttribute('id', item.id);
        
        var cart = document.createElement('i');
        cart.setAttribute('class', 'fa fa-cart-plus add-to-cart');
        cart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);
        cardTop.appendChild(cart);

        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chicken.appendChild(itemCard);
    })

    chineseData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        
        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText=' ' + item.rating;
        
        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-whishlist');
        heart.setAttribute('id', item.id);
        
        var cart = document.createElement('i');
        cart.setAttribute('class', 'fa fa-cart-plus add-to-cart');
        cart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);
        cardTop.appendChild(cart);

        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chinese.appendChild(itemCard);
    })

    southIndianData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        
        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText=' ' + item.rating;
        
        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-whishlist');
        heart.setAttribute('id', item.id);
        
        var cart = document.createElement('i');
        cart.setAttribute('class', 'fa fa-cart-plus add-to-cart');
        cart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);
        cardTop.appendChild(cart);

        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        southIndian.appendChild(itemCard);
    })

    vegetableData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        
        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText=' ' + item.rating;
        
        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-whishlist');
        heart.setAttribute('id', item.id);
        
        var cart = document.createElement('i');
        cart.setAttribute('class', 'fa fa-cart-plus add-to-cart');
        cart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);
        cardTop.appendChild(cart);

        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText= 'Price : Rs ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        vegetable.appendChild(itemCard);
    })
}
displayItems ()

const categoryListData= [...new Map(fooditem.map(item=> [item['category'], item])).values()];
console.log(categoryListData);

function categoryLists(){
    var categoryList= document.getElementById('category-list');

    categoryListData.map(item=> {
        var listCard= document.createElement('div');
        listCard.setAttribute('class', 'list-card');

        var listImg= document.createElement('img');
        listImg.src= item.img;

        var listName= document.createElement('a');
        listName.setAttribute('class', 'list-name');
        listName.innerText= item.category;
        listName.setAttribute('href', '#' + item.category);

        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var clonelistCard= listCard.cloneNode(true);
        categoryList.appendChild(listCard);

    })
}

categoryLists()

// cart page
document.querySelectorAll('.add-to-cart').forEach(item=> {
    item.addEventListener('click', addToCart);
})

var cartData= [];

function addToCart(){
    console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj= fooditem.find(element=>element.name== itemToAdd);

    console.log(itemObj);

    var index= cartData.indexOf(itemObj);
    if(index=== -1){
        document.getElementById(itemObj.id).classList.add('toggle-cart_plus');
        cartData= [...cartData, itemObj];
        console.log(cartData);
    }
    else if (index > -1) {
        alert("Added to Cart");
    }

    document.getElementById('cart_plus').innerText= ' ' + cartData.length + ' Items';
    totalAmount();
    cartItems();
}

// cart page setup
function cartItems(){
    var tableBody= document.getElementById('table-body');
    tableBody.innerHTML= ' ';

    cartData.map(item=> {
        var tableRow= document.createElement('tr');

        var rowData1= document.createElement('td');
        var img= document.createElement('img');
        img.src= item.img;
        rowData1.appendChild(img);

        var rowData2= document.createElement('td');
        rowData2.innerText=item.name;

        var rowData3= document.createElement('td');
        var btn1= document.createElement('button');
        btn1.setAttribute('class', 'decrease-item');
        btn1.innerHTML= '-';
        var span= document.createElement('span');
        span.innerText= item.quantity;
        var btn2= document.createElement('button');
        btn2.setAttribute('class', 'increase-item');
        btn2.innerHTML= '+';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4= document.createElement('td');
        rowData4.innerText= item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
 
    })

    document.querySelectorAll('.increase-item').forEach(item=> {
        item.addEventListener('click', incrementItem);
    })

    document.querySelectorAll('.decrease-item').forEach(item=> {
        item.addEventListener('click', decrementItem);
    })
}

// whishlist page 
document.querySelectorAll('.add-to-whishlist').forEach(item=> {
    item.addEventListener('click', addToWhishlist);
})

var whishlistData= [];

function addToWhishlist(){
    console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAddList= this.parentNode.nextSibling.nextSibling.innerText;
    var itemListObj= fooditem.find(element=>element.name== itemToAddList);

    console.log(itemListObj);

    var index1= whishlistData.indexOf(itemListObj);
    if(index1=== -1){
        document.getElementById(itemListObj.id).classList.add('toggle-heart');
        whishlistData= [...whishlistData, itemListObj];
        console.log(whishlistData);
    }
    else if (index1 > -1) {
        alert("Added to Whishlist");
    }

    document.getElementById('heart').innerText= ' ' + whishlistData.length + ' Wishlist';
    whishListItems();
}

// whishlist page setup
function whishListItems(){
    var tableBody= document.getElementById('table-Body');
    tableBody.innerHTML= ' ';

    whishlistData.map(item=> {
        var tableRow= document.createElement('tr');

        var rowData1= document.createElement('td');

        var img= document.createElement('img');
        img.src= item.img;
        rowData1.appendChild(img);

        var rowData2= document.createElement('td');
        rowData2.innerText=item.name;

        var rowData3= document.createElement('td');
        rowData3.innerText= item.price;

        var rowData4= document.createElement('td');
        var btn = document.createElement('button');
        btn.setAttribute('class', 'remove');
        btn.innerHTML= 'Remove';

        rowData4.appendChild(btn);

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
 
    })

    document.querySelectorAll('.remove').forEach(item=> {
        item.addEventListener('click', removeItem);
    })

}

// cart page increment and decrement process
var currPrice= 0;

function incrementItem() {
    let itemToInc= this.parentNode.previousSibling.innerText;
    console.log(itemToInc);

    var incObj= cartData.find(element=>element.name== itemToInc);
    incObj.quantity+= 1;

    currPrice= (incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
    incObj.price= currPrice*incObj.quantity;

    totalAmount();
    cartItems();

}

var flag= false;

function decrementItem(){
    let itemToDec= this.parentNode.previousSibling.innerText;
    let decObj= cartData.find(element=>element.name==itemToDec);
    let ind= cartData.indexOf(decObj);
    if(decObj.quantity > 1) {
        currPrice= (decObj.price * decObj.quantity - decObj.price*(decObj.quantity-1))/ (decObj.quantity);
        decObj.quantity-= 1;
        decObj.price= currPrice*decObj.quantity;

    }
    else {
        document.getElementById(decObj.id).classList.remove('toggle-cart_plus');
        cartData.splice(ind, 1);
        document.getElementById('cart_plus').innerHTML= ' ' + cartData.length + 'Items';

        if (cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag= false;
            alert("Currently No Item in Cart");
        }
    }
    totalAmount();
    cartItems();
}


function totalAmount(){
    var sum=0;
    cartData.map(item=> {
        sum+= item.price;
    })
    document.getElementById('total-item').innerText= 'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerText= 'Total Price : Rs ' + sum;
    document.getElementById('m-total-amount').innerText= 'Total Price : Rs ' + sum;
}


// cart toggle
document.getElementById('cart_plus').addEventListener('click', cartToggle);

function cartToggle(){
    if(cartData.length > 0){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag=true;
    }
    else {
        alert("Currently No Item in Cart");
    }
}


// whishlist toggle
document.getElementById('heart').addEventListener('click', listToggle);

function listToggle(){
    if(whishlistData.length > 0){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('whishlist-page').classList.toggle('whishlist-toggle');
    }
    else {
        alert("Currently No Item in Whishlist");
    }
}

// address panel
document.getElementById('add-address').addEventListener('click', addAddress);

function addAddress(){
    var address= prompt('Enter your Address');
    if(address){
        document.getElementById('add-address').innerText= ' ' + address;
    }
    else{
        document.getElementById('add-address').innerText= 'Your Address ';
        alert("Address not added");
    }
}
