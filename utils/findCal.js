export default function findCal(arr){
    for(var i = 0; i < arr.length; i++){
      if(arr[i]["nutrientId"] == 1008) return arr[i]["value"];
    }
  }