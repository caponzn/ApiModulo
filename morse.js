const fs = require('fs');
const fileName = 'morse.json';

let codes = JSON.parse(fs.readFileSync(fileName));

function morse2(txt){
    txt = txt.toLowerCase();
    let msg = "";
    for (let i = 0; i < txt.length; i++){
        const m = txt[i];
        msg += codes['char2morse'][m] + " "
    }

    return msg.trim();
}

const morseCovert = {
    morse2
}

module.exports = morseCovert;