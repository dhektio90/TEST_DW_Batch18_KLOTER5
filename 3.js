
let data = [
              ['a','c','b','e','d'],
              ['g','e','f']
            ]


function sort_data(arr){

  for ( let k = 0 ; k < arr.length ; k++){
    let list = arr[k]
        for (var j = 0; j < list.length - 1; j++) {
            for (var i = 0, swapping; i < list.length - 1; i++) {
              if (list[i]> list[i + 1]) {
                swapping = list[i + 1];
                list[i + 1] = list[i];
                list[i] = swapping;
                }; 
            }; 
        };
  }
  

  if ( arr[0].length > arr[1].length){
    let temp = arr[1]
    arr[1] = arr[0]
    arr[0] = temp
  }
  return arr
}

console.log(sort_data(data))
