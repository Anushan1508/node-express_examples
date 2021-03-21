const _ = require('lodash')
const items = [1, [3,4,[8,9,[2]]]];

const newItems = _.flattenDeep(items)
console.log(items)
console.log(newItems)