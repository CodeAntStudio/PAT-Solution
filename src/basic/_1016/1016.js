var readline = require('readline')

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', function(input) {
  var A = input.split(' ')[0]
  var Da = input.split(' ')[1]
  var B = input.split(' ')[2]
  var Db = input.split(' ')[3]
  var result = deal(A,Da,B,Db)
  console.log(result);
  rl.close()
})
function deal(A,Da,B,Db) {
  var Pa = []
  for(var i = 0; i < A.length; i++) {
    if(A[i] === Da) {
      Pa.push(A[i])
    }
  }
  var Pb = []
  for(var i = 0; i < B.length; i++) {
    if(B[i] === Db) {
      Pb.push(B[i])
    }
  }
  return (+Pa.join('')) + (+Pb.join(''))
}
