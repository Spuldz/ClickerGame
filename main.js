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
    constructor(backgroundImageParam, priceParam, containerParam, buybuttonContParam, typeParam){
        this.backgroundImage = backgroundImageParam;
        this.price = priceParam;
        this.container = containerParam;
        this.buyButtonCont = buybuttonContParam;
        this.type = typeParam;
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
        useButton.classList.add('useButton');
        

        //giving the container a background image and a price
        backgroundImageContainer.style.backgroundImage = 'URL('+this.backgroundImage+')';
        priceCountContainer.textContent = this.price;
        useButton.textContent = "Use";
        
        
        
        //puts the containers in the right places
        this.container.append(container);
        container.append(backgroundImageContainer);
        container.append(priceContainer);
        priceContainer.append(coinContainer);
        priceContainer.append(priceCountContainer);
        backgroundImageContainer.append(document.getElementById('file'));
        
        

            this.Purchases(backgroundImageContainer, useButton);
            

    }

    Purchases(imgContainer, useButton){
        let canAffordItem = false;
        let itemAvailable = true;
        let itemBought = false;
        let num = 0;
        let t = false;
        let dsec = 10;
        let time = 30;
        let sec = time;
        let displayText = "";
        let fileButton = document.getElementById('file');

        fileButton.disabled = true;
        fileButton.style.display = 'none';
        function DoubleCoinsAdder(inc){
            document.getElementById('object').addEventListener('click', ()=>{
              coins = coins + inc;
            });
        }
        function TimerDiplayText(){
            let dsecText = dsec.toString();
            let secText = sec.toString();
            displayText = secText +":"+dsecText;
            document.getElementById('TimerDiplayContainer').textContent = displayText;

            if(sec === 0 && dsec === 0){
                document.getElementById('TimerDiplayContainer').textContent = '';
                sec = time;
                dsec = 10;
            }
            
        }
        //When image container is clicked, it check if you can afford the item
        imgContainer.addEventListener('click', ()=>{
            
            if(coins >= this.price){
                canAffordItem = true;    
            }

            
            //handles the purchases
                if(canAffordItem && itemAvailable){
                    console.log("item bought");
                    itemBought = true;
                    coins = coins - this.price;
                    UpdateCoins();
                    itemAvailable = false;
                    this.ChangeObject(useButton);
                    this.CustomItem(fileButton, imgContainer, useButton);
                }else{
                    return;
                }
                
            //a little script for the doubleCoins ability.
            //makes it not buyable once it already is bought and is being used
            if(itemBought && !t){
                this.buyButtonCont.append(useButton);
                t = true;
            }

            //checks if you can run the timer
            if(this.type === "Dcoins" && num < time && !itemAvailable){
                useButton.addEventListener('click', ()=>{
                num = 0;
                sec = time;
                dsec = 10;
                //function that creates a countdown timer
                let TimerDiplay = setInterval(function(){
                    dsec--;
                        if(dsec === 0){
                            dsec = 10;
                            sec--;
                        }
        
                        if(sec === 0 && dsec === 1){
                            dsec = 0;
                            clearInterval(TimerDiplay);
                        }
                        TimerDiplayText();
                        
                }, 100)

                 useButton.remove();
                 DoubleCoinsAdder(1);
                 let timer = setInterval(function(){
                     num++;
                         if(num >= time){
                            clearInterval(timer);
                            itemAvailable = true;
                            itemBought = false;
                            t = false;
                            DoubleCoinsAdder(-1);
                         }
                 }, 1000);

                });

               
             }
                
                
         });
    }
    //a method that changes or doesnt change the background image of the clickable object
    ChangeObject(useButton){

        if(this.type === "Dcoins"){
            useButton.addEventListener('click', ()=>{
            });
        }

        if(this.type === "cosm"){
            useButton.addEventListener('click', ()=>{
                document.getElementById('object').style.backgroundImage = 'URL('+this.backgroundImage+')';
                document.querySelectorAll('.useButton').forEach(btn =>{
                    btn.textContent = "Use";
                });
                changeText(event);
                
            });
        }

        

                
    }

    //a method that created a custom image feature
    CustomItem(fileButton, imgContainer, useButton){
        if(this.type === "custom"){
            fileButton.disabled = false;
            fileButton.style.display = "flex";
            imgContainer.style.backgroundImage = "none";
            let uploadedImg = "";
            fileButton.addEventListener('change', function(){
                let reader = new FileReader();
                reader.addEventListener('load', () =>{
                    uploadedImg = reader.result;
                    imgContainer.style.backgroundImage = 'url('+uploadedImg+')'
                    fileButton.style.display = 'none';
                });
                reader.readAsDataURL(this.files[0]);
            })

            if(this.type === "custom"){
                useButton.addEventListener('click', ()=>{
                    document.getElementById('object').style.backgroundImage = 'URL('+uploadedImg+')';
                    document.querySelectorAll('.buyButton').forEach(btn =>{
                        btn.textContent = "Use";
                    });
                    changeText(event);
                    
                });
            }
        }

    }

    

};



//makes it so if you click the object, then the coins increse by 1
document.querySelector('.score').textContent = coins;
document.getElementById('object').addEventListener('click', ()=>{
    AddCoins(1);
    UpdateCoins();
});
//when the store option is clicked then it opens the store popup
document.getElementById('StoreText').addEventListener('click', ()=>{
    StoreOpen = true;
        if(StoreOpen){
            StorePopup.style.display = 'block';
        }
});
//when close button clicked, then the store popup window is closed
document.getElementById('close').addEventListener('click', ()=>{
    StoreOpen = false;
    StorePopup.style.display = 'none';
});


//Updated the coins count
function UpdateCoins(){
    document.querySelector('.score').textContent = coins;
    document.querySelector('.coinCount').textContent = coins;
}

//Adds coins when object is clicked
  function AddCoins(inc){
    coins = coins + inc;
  }

  //Changed the use buttons text to "Using" when that object is being used
  function changeText(event) {
    event.target.textContent = "Using"
  }
  UpdateCoins();

    //Making the store items and giving them the needed information
    let item1 = new StoreItem("Assets/cookie.png", 0, productLine1, buyButtonCont1, "cosm");
    let item2 = new StoreItem("Assets/drums.png", 30, productLine1, buyButtonCont2, "cosm");
    let item3 = new StoreItem("Assets/coin.png", 20, productLine1, buyButtonCont3, "cosm");
    let item5 = new StoreItem("Assets/basketball.png", 20, productLine1, buyButtonCont4, "cosm");
    let item6 = new StoreItem("Assets/earth.png", 20, productLine1, buyButtonCont5, "cosm");
    let item7 = new StoreItem("Assets/helicopter.png", 20, productLine1, buyButtonCont6, "cosm");
    let item8 = new StoreItem("Assets/duck.png", 40, productLine1, buyButtonCont7, "cosm");
    let item9 = new StoreItem("Assets/tree.png", 30, productLine1, buyButtonCont8, "cosm");

    let item10 = new StoreItem("Assets/coinX2.png", 90, productLine2, buyButtonCont10, "Dcoins")

    let customItem = new StoreItem("Assets/custom.png", 100, productLine3, buyButtonCont19, "custom");
    //Rendering the items onto the screen
    item1.Render();
    item2.Render();
    item3.Render();
    item5.Render();
    item6.Render();
    item7.Render();
    item8.Render();
    item9.Render();
    item10.Render();
    customItem.Render();