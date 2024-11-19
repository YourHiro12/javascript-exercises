const reverseString = function(sentence) {

    let panjang = sentence.length;
    let kalimatAkhir = ''
    for (let i=panjang-1; i>= 0; i--){
        kalimatAkhir += sentence[i];
    }
    return kalimatAkhir;

};

// Do not edit below this line
module.exports = reverseString;
