//Common JS, Every file is module (by default)
// Modules - Encapsulated code ((Only share minimum))
 const names = require('./4-names')
 const sayHi = require('./5-utils')

sayHi(names.vithu);
sayHi(names.tharuni);
sayHi('Anushan');