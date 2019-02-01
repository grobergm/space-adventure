function Starship(name,funds,colonists,supplies){
  this.name=name;
  this.funds=funds;
  this.colonists=colonists;
  this.supplies=supplies;
  this.crew=[];
}

function CrewMember(name,role){
  this.name=name;
  this.role=role;
  this.experience=0;
}


Starship.prototype.buySupplies=function(money){
  this.funds-=money;
  this.supplies+=money*2;
}

Starship.prototype.feedColonists=function(){
  if(this.supplies<this.colonists){
    this.colonists-=(this.colonists-this.supplies)/2;
    this.supplies=0;
  }
  else{
      this.supplies-=this.colonists;
  }
}


$(document).ready(function(){
  var myShip=[];
  $('#shipForm').submit(function(event){
    event.preventDefault();
    var shipName= $('#shipNameInput').val();
    var difficulty= $('#difficulty').val();
    if (difficulty==="easy"){
      myShip= new Starship(shipName,10000,200,600);
    } else if (difficulty==="medium"){
      myShip= new Starship(shipName,5000,300,400);
    } else if (difficulty==="hard"){
      myShip= new Starship(shipName,4000,400,200);
    }
    console.log(myShip);
    // if statement testing if they entered a ship name add is-invalid class if not
    $("#shipForm").hide();
    $("#crewForm").show();
  })

  $('#crewForm').submit(function(event){
    event.preventDefault();
    // if statement testing if they entered at least one player name, and adds is-invalid class;
    // must have a captain, and only one
    var playerName=$("#nameInput").val();
    var role=$('#roleInput').val();
    myShip.crew.push(new CrewMember(playerName,role));
    console.log(myShip);
  });
  // Start Game button, hides form and opens first scence
  // Alternates between players, where they make choices based on their Role (scientist might choose to research aliens, for example);
  // Events Pop up based on their descisions (i.e. You didn't research an alien that entered your ship, it kills 100 colonists before you are able to take it out.)
})
