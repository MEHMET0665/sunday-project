let doorImage1 = document.getElementById("door_a");
let doorImage2 = document.getElementById("door_b");
let doorImage3 = document.getElementById("door_c");
let flyDoorPath = "./findfly.png";
let forestDoorPath = "./forest.png"; 
let oceanDoorPath = "./ocean.png"; 
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = "door_closed.png";
let startButton =document.getElementById ("start")
doorImage1.onclick = () => {
   doorImage1.src=openDoor1;
   playDoor(doorImage1);
}
​
doorImage2.onclick = () => {
    doorImage2.src=openDoor2;
    playDoor(doorImage2);
 }
​
​
 doorImage3.onclick = () => {
    doorImage3.src=openDoor3;
    playDoor(doorImage3);
 }
​
 
 function randomFindDoorGenerator (){
   let findDoor = Math.floor(Math.random()*3);
   if (findDoor==0){
      openDoor1 = flyDoorPath;
      openDoor2 = oceanDoorPath;
      openDoor3 = forestDoorPath;
   }
   else if(findDoor==1){
      openDoor2 = flyDoorPath;
      openDoor1 = oceanDoorPath;
      openDoor3 = forestDoorPath;
   }
   else{
     openDoor3 = flyDoorPath;
     openDoor2 = oceanDoorPath;
     openDoor1 = forestDoorPath;
   }
 }
 randomFindDoorGenerator();
​
function isClicked (door)
{
 if (door.src === closedDoorPath){
   return false;
 }
 else {
   return true;
 }
}
​
function isFly(door){
   if (door.src === flyDoorPath){
      return true;
   }
   else {
      return false;
   }
}
​
 function playDoor(){
   numClosedDoors --;
    if (numClosedDoors === 0 ) {
      gameOver("WIN!");
    }
    else {
      gameOver();
    }
 }
​
 function gameOver(status){
  if (status === "WIN!"){
     startButton.innerHTML="You WIN! Play again?";
  }
 else {
    startButton.innerHTML="Game Over!";
 }
 }
​
 function isBot (){
   if (door.src === flyDoorPath){
      return true;
   }
   else {
      return false;
   }
 }