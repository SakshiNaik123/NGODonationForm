class Form {

  constructor() {
    this.input = createInput("Name");
    this.input2 = createInput("Address");
    this.input3 = createInput("Number");
    this.input4 = createInput("Items For Donation");
    this.button = createButton('Submit');
    this.title = createElement('h2');
  }

  hide(){
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 150);
    this.input2.position(displayWidth/2 - 40 , displayHeight/2 - 120);
    this.input3.position(displayWidth/2 - 40 , displayHeight/2 - 90);
    this.input4.position(displayWidth/2 - 40 , displayHeight/2 - 60);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

      this.button.position(displayWidth/2 + 30, displayHeight/2+20);
      
      this.button.mousePressed(()=>{
        
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        
      });
    }
  }

