const fs = require('fs')
const captcha = require('trek-captcha')

async function run() {
    const { token, buffer } = await captcha()
    fs.createWriteStream('captcha.gif').on('finish', () => console.log(token)).end(buffer)
}

run()
