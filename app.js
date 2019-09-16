

var arr = []
while(arr.length < 4){
  var randomnumber=Math.ceil(Math.random()*9)
  if(arr.indexOf(randomnumber) === -1){arr.push(randomnumber)}  
}
console.log(arr);


function toDo(){
    var userNumbers = document.getElementById("numbers").value
       userNumbers.split("")
       var userNumber =  userNumbers.split("")
        console.log(userNumber)


    var resultBull = []
    var resultCow = []
    arr.forEach(function(item,index,array){
        userNumber.forEach(function(item1,index1,array1){
            if(item==item1&&index!=index1){
                resultCow.push(item)
            }
            if(item==item1&&index==index1){
                resultBull.push(item)
            }
        })
    })
    document.getElementById("bulls").innerHTML = `Бики - ${resultBull.length}`
    document.getElementById("cow").innerHTML = `Корови - ${resultCow.length}`
}