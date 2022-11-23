// // function that prints lower than target
// function lower(arr, target){
//     value= []
//     for(i=0;i<arr.length; i++){
//         value = arr[i]
//         if(value < target){
//             console.log(value);
//         }
//         break;
//     }
//     if(value>1){
//     return 'These values are lower than '+ target;
//     }
//     else{
//         return'This value is lower than '+ target;
//     }

// }
// console.log(lower([1,2,3,4,5],2))

// function that prints index of numbers whose sum === target
function index(arr, target){
    val =[]
    nextval = []
    for(i=0; i<arr.length; i++){
        val = arr[i];
        for(j=0; j<arr.length; j++){
            nextval = arr[j]
            sum = val + nextval
            if(sum === target){
                valindex = arr.indexOf(val)
                nextvalindex = arr.indexOf(nextval)
                return[valindex, nextvalindex]
        }
    }
}
}
console.log(index([1, 2, 3, 4], 7))