const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade.txt', 
        `THIS IS GOOD : ${first} ${second}`, { flag: 'a'})
        console.log(first, second)
    }
    catch (error) {
        console.log('error')
    }
}

start()

// .........................................

// const { readFile, writeFile } = require('fs')
// const utill = require('util')
// const readFilePromise = utill.promisify(readFile)
// const writeFilePromise = utill.promisify(writeFile)


// const start = async () => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf8')
//         const second = await readFilePromise('./content/second.txt', 'utf8')
//         await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS GOOD : ${first} ${second}`)
//         console.log(first, second)
//     }
//     catch (error) {
//         console.log('error')
//     }
// }

//........................................

// const { readFile, writeFile } = require('fs')

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//                 return
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }

// const start = async () => {
//     try {
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/second.txt')
//         console.log(first, second)
//     }
//     catch (error) {
//         console.log('error')
//     }
// }

// ....................................

// getText('. /content/first.txt')
// .then(result => console.log(result))
// .catch((err) => console.log(err))

