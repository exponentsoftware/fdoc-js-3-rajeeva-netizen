const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

student.skills.frontEnd.push({
skill:'bootstrap',
level:8
})



student.skills.backEnd.push({
skill:'Express',
level:9
})

student.skills.dataBase.push({
skill:'Sql',
level:8
})

student.skills.dataScience.push('SQL')

console.log("skill", student.skills)