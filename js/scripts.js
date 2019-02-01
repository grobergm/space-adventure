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

Starship.pototype.addCrewMember=function(){
  this.crew.push(new CrewMember())
}


Starship.prototype.buySupplies=function(money){
  this.funds-=money;
  this.supplies+=money*2;
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
  var starShip= new Starship();
  $('#crewForm').submit(function(event){
    event.preventDefault();
    var playerName=$("#nameInput").val();
    var role=$('#roleInput').val();
    starShip.crew.push(new CrewMember(playername,role))
  });

})
