class Player {

  constructor(){
      this.name = null;
  }
      
   getName(){
      var nameRef = database.ref('NAME');
      nameRef.on("value",(data)=>{
      NAME = data.val();
       })
       }
      
  updateName(name){
      database.ref('/').update({
      NAME: name
      });
   }
  }