class Items {

    constructor(){
        this.itmes = null;
    }
        
     getItems(){
        var itemsRef = database.ref('ITEMS FOR DONATION');
        itemsRef.on("value",(data)=>{
        ITEMS = data.val();
         })
         }
        
    updateItems(items){
        database.ref('/').update({
        ITEMS: items
        });
     }
    }