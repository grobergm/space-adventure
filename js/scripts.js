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

Starship.prototype.feedColonists=function(colonists){
  if(this.supplies<this.colonists){
    this.colonists-=(this.colonists-this.supplies)/2;
    this.supplies=0;
  }
  else{
      this.supplies-=colonists;
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
  })

  $('#crewForm').submit(function(event){
    event.preventDefault();
    var playerName=$("#nameInput").val();
    var role=$('#roleInput').val();
    myShip.crew.push(new CrewMember(playername,role));
  });

})
