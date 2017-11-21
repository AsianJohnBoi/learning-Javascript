let myPlaces = ["Hong Kong", "Madrid", "New York"];
let friendPlaces = ["Singapore", "Hong Kong", "Paris"];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++){
  
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++){
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]){
      console.log(myPlaces[myPlacesIndex] + ' is a common place!');
    }
  }
}
