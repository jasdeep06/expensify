// const person ={
//     name:"Jasdeep",
//     age:24,
//     location:{
//         city:"Indore",
//         temperature:27

//     }
    
// }

// const {name:firstName="Anonymous",age} = person
// const {city,temperature}=person.location

// console.log(firstName)
// console.log(age)
// console.log(city)
// console.log(temperature)

// const book={
//     name:"Ego is the Enemy",
//     author:"Rehan Holiday",
//     publisher:{
//         name:"Penguin"

//     }
// }

// const {name:publisherName="Self Published"}=book.publisher


// console.log(publisherName)

const menu=["Coffee(hot)",2.5,2.75,3]

const [dish,,mediumCost,]=menu

console.log(`${dish} medium is $${mediumCost}`)