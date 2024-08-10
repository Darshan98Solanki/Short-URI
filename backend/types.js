const zod = require('zod');

const checkURL = zod.object({
    url: zod.string().max(180,{message:'Too long URL'}).url({message:'Entered URL is not valid'}),
})

module.exports = checkURL