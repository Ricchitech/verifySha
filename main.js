var forge = require('node-forge');
const { v4: uuidv4 } = require('uuid');
let value ="zirohmail.speakout";

///sha256
let sh = forge.md.sha256.create();
sh.update(value);
let str = sh.digest().toHex() + "-" + uuidv4();
console.log(str);
//fa40405df025d4cefb2b2da493b33ab48063a9c841070fd23b3187169c64d4c1-044dc4d7-41c3-4b99-a8eb-b7683b69cb23

let arr = [];
arr=str.split('-');
console.log(arr[0]);
//fa40405df025d4cefb2b2da493b33ab48063a9c841070fd23b3187169c64d4c1


//verifysha
if (verifysha(arr[0], value)){
    console.log("SHA256 Verified");
}

function verifysha(sha_data,data){
    let sh = forge.md.sha256.create();
    sh.update(data);
    let str = sh.digest().toHex();
    if (str === sha_data){
        return true;
    }
    else{
        return false;
    }
}