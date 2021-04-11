class Number {

    constructor(){
        this.number = null;
    }
        
     getNumber(){
        var numberRef = database.ref('NUMBER');
        numberRef.on("value",(data)=>{
        NUMBER = data.val();
         })
         }
        
    updateNumber(number){
        database.ref('/').update({
        NUMBER: number
        });
     }
    }