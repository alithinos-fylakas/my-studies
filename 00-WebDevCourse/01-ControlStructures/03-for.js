/*
for (let index = 0; index <= 10; index++){
    console.log(`i = ${index}`)
}

const grade = [0, 3, 5, 6, 8, 9, 10, 7.7]

for (let i = 0; i < grade.length; i++){
    console.log(`grade = ${grade[i]}`)
}
*/

/* for in */

const grades = [0, 3, 5, 6, 8, 9, 10, 7.7]

for (let i in grades){
    console.log(i, grades[i])
}

const person = {
    name: "Diovanna",
    last_name: "Diorno",
    age: 20,
    weight: 70
}

for (let attribute in person){
    console.log(`${attribute} = ${person[attribute]}`)
}