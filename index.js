
const fs = require('fs')
const { parse } = require('path')
const readline = require('readline-sync')


// 1. --------

// const quote = "Why, sometimes I've believed as many as six impossible things before breakfast."

// fs.writeFile("alicequotes.txt", quote, (error) => {

//     if (error) {
//         console.log(error)
//     } else {
//         console.log("File created successfully!")
//     }
// })



// 2. --------

// fs.readFile("alicequotes.txt", "utf8", (error, content) => {
//     if (content) {
//         console.log(content)
//     } else {
//         console.log(error)
//     }
// })

// 3. --------

// fs.readFile("style.css", "UTF8", (error, content) => {
//     if (content) {

//         let collectedIds = 0
//         const arr = content.split('')

//         arr.forEach(char => {
//             if (char === "#") {
//                 collectedIds += 1
//             }
//         })
//         console.log(collectedIds)
//     } else {
//         console.log(error)
//     }
// })

// 4. --------


// const filename = readline.question('Type your filename: \n')
// const bodyContent = readline.question('Type your content: \n')

// fs.writeFile(filename + '.txt', bodyContent, (error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(`The file ${filename}.txt was successfully created with the content: \n ${bodyContent}`)
//     }
// })


// 5. --------

// fs.readFile("insults.json", "UTF8", (error, content) => {
//     if (content) {
//         const parsedContent = JSON.parse(content).insults

//         parsedContent.forEach(insult => {
//             console.log(`Insult: ${insult.insult} \n Play: ${insult.play}`)
//         });
//         console.log(`Number of insults: ${parsedContent.length}`)
//     } else {
//         console.log(error)
//     }
// })


// 6. --------

fs.readFile("./index.html", "UTF8", (error, content) => {
    if (content) {
        console.log(content)
    } else {
        console.log(error)
    }
})