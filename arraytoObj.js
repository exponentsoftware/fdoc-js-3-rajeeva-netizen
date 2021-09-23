const students = [
				['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
				['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
			]

// console.log(students)
let arr=[]
students.map(i =>{
  arr.push(Object.assign({}, i))
  //console.log(Object.assign({}, i))

})
console.log(arr)