// bil exercise 

let bill = 560
console.log("the bill is " + bill)
if (bill > 50 && bill <= 300 ){
    let tip = bill * 12/100
    console.log ("the tip is " + tip)
    console.log("the total value is " +( tip + bill) )
}else {
    let tip = bill * 12/100
    console.log("the tip is " +tip)
    console.log("the total value is " + (tip + bill) )
}
