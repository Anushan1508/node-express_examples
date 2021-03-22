const { readFile } = require('fs')
const { reject } = require('lodash')
const { resolve } = require('path')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
                return
            }
            else {
                resolve(data)
            }
        })
    })
}

getText('./content/first.txt')
.then(result => console.log(result))
.catch((err) => console.log(err))


