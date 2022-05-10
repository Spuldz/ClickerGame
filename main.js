let StoreOpen = false;
let StorePopup = document.getElementById('popup');
let coins = 999;
let productLine1 =  document.getElementById('productLine1');
let productLine2 =  document.getElementById('productLine2');
let productLine3 =  document.getElementById('productLine3');
let subCont1 = document.getElementById("subCont1");
let subCont2 = document.getElementById("subCont2");
let subCont3 = document.getElementById("subCont3");
//I DONT KNOW WHAT ELES TO DO! IM DUMBBB
let buyButtonCont1 = document.getElementById('buyButtonCont1');
let buyButtonCont2 = document.getElementById('buyButtonCont2');
let buyButtonCont3 = document.getElementById('buyButtonCont3');
let buyButtonCont4 = document.getElementById('buyButtonCont4');
let buyButtonCont5 = document.getElementById('buyButtonCont5');
let buyButtonCont6 = document.getElementById('buyButtonCont6');
let buyButtonCont7 = document.getElementById('buyButtonCont7');
let buyButtonCont8 = document.getElementById('buyButtonCont8');
let buyButtonCont9 = document.getElementById('buyButtonCont9');
let buyButtonCont10 = document.getElementById('buyButtonCont10');
let buyButtonCont11 = document.getElementById('buyButtonCont11');
let buyButtonCont12 = document.getElementById('buyButtonCont12');
let buyButtonCont13 = document.getElementById('buyButtonCont13');
let buyButtonCont14 = document.getElementById('buyButtonCont14');
let buyButtonCont15 = document.getElementById('buyButtonCont15');
let buyButtonCont16 = document.getElementById('buyButtonCont16');
let buyButtonCont17 = document.getElementById('buyButtonCont17');
let buyButtonCont18 = document.getElementById('buyButtonCont18');
let buyButtonCont19 = document.getElementById('buyButtonCont19');
let buyButtonCont20 = document.getElementById('buyButtonCont20');
let buyButtonCont21 = document.getElementById('buyButtonCont21');
let buyButtonCont22 = document.getElementById('buyButtonCont22');
let buyButtonCont23 = document.getElementById('buyButtonCont23');
let buyButtonCont24 = document.getElementById('buyButtonCont24');
let buyButtonCont25 = document.getElementById('buyButtonCont25');
let buyButtonCont26 = document.getElementById('buyButtonCont26');
let buyButtonCont27 = document.getElementById('buyButtonCont27');



class StoreItem{
    constructor(backgroundImageParam, priceParam, containerParam, buybuttonContParam){
        this.backgroundImage = backgroundImageParam;
        this.price = priceParam;
        this.container = containerParam;
        this.buyButtonCont = buybuttonContParam;
    }
    Render(){
        //creates all needed containers
        let container = document.createElement('div');
        let priceContainer = document.createElement('div');
        let coinContainer = document.createElement('div');
        let backgroundImageContainer = document.createElement('div');
        let priceCountContainer = document.createElement('div');
        let useButton = document.createElement('div');

        //assigns a class for the containers
        container.classList.add('container');
        priceContainer.classList.add('priceContainer');
        backgroundImageContainer.classList.add('backgroundImageContainer');
        coinContainer.classList.add('coinContainer');
        priceContainer.classList.add('priceContainer');
        priceCountContainer.classList.add('priceCountContainer');
        

        //giving the container a background image and a price
        backgroundImageContainer.style.backgroundImage = 'URL('+this.backgroundImage+')';
        priceCountContainer.textContent = this.price;
        
        

        //puts the containers in the right places
        this.container.append(container);
        container.append(backgroundImageContainer);
        container.append(priceContainer);
        priceContainer.append(coinContainer);
        priceContainer.append(priceCountContainer);
        

            this.Purchases(backgroundImageContainer, useButton);
            

    }

    Purchases(imgContainer, useButton){
        let canAffordItem = false;
        let itemAvailable = true;
        let itemBought = false;
        //When image container is clicked, it check if you can afford the item
        imgContainer.addEventListener('click', ()=>{
            
            if(coins >= this.price){
                canAffordItem = true;    
            }
                if(canAffordItem && itemAvailable){
                    console.log("item bought");
                    itemAvailable = false;
                    itemBought = true;
                    coins = coins - this.price;
                    UpdateCoins();
                    this.ChangeObject(useButton);
                }else if(canAffordItem && !itemAvailable){
                    console.log("You have already bought this item");
                }else{
                    console.log('broke');
                }

            if(itemBought){
                this.buyButtonCont.append(useButton);
            }

                
         });
    }

    ChangeObject(useButton){
        useButton.classList.add('buyButton');
        useButton.textContent = "Use";
        useButton.addEventListener('click', ()=>{
            document.getElementById('object').style.backgroundImage = 'URL('+this.backgroundImage+')';
            document.querySelectorAll('.buyButton').forEach(btn =>{
                btn.textContent = "Use";
            });
            changeText(event);
        });
                
    }

};




document.querySelector('.score').textContent = coins;
document.getElementById('object').addEventListener('click', ()=>{
    coins++;
    UpdateCoins();
});

document.getElementById('StoreText').addEventListener('click', ()=>{
    StoreOpen = true;
        if(StoreOpen){
            StorePopup.style.display = 'block';
        }
});

document.getElementById('close').addEventListener('click', ()=>{
    StoreOpen = false;
    StorePopup.style.display = 'none';
});



function UpdateCoins(){
    document.querySelector('.score').textContent = coins;
    document.querySelector('.coinCount').textContent = coins;
}

function changeText(event) {
    event.target.textContent = "Using"
  }

document.querySelector('.coinCount').textContent = coins;
    let item1 = new StoreItem("Assets/coin.png", 10, productLine1, buyButtonCont1);
    let item3 = new StoreItem("Assets/cookie.png", 20, productLine1, buyButtonCont2);
    let item4 = new StoreItem("Assets/cookie.png", 20, productLine1, buyButtonCont3);
    let item5 = new StoreItem("Assets/cookie.png", 20, productLine1, buyButtonCont4);
    let item6 = new StoreItem("Assets/cookie.png", 20, productLine1, buyButtonCont5);
    let item7 = new StoreItem("Assets/cookie.png", 20, productLine1, buyButtonCont6);
    item1.Render();
    item3.Render();
    item4.Render();
    item5.Render();
    item6.Render();
    item7.Render();


    

    

    

