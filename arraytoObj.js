const students = [
				['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
				['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
        ['Rajeeva', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
			]
const arrayToObj=stud=>{
  console.log(stud)
  stud.map(student=>{
  [name, skills, scores]=student
  console.log({name, skills,scores})
 // return student.indexOf()
})
}


arrayToObj(students)
