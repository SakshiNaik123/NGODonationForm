class Adress {

    constructor(){
        this.number = null;
    }
        
     getAdress(){
        var adressRef = database.ref('ADRESS');
        adressRef.on("value",(data)=>{
        ADRESS = data.val();
         })
         }
        
    updateAdress(adress){
        database.ref('/').update({
        ADRESS: adress
        });
     }
    }