const repeatString = function(word, num) {
    sentence = '';

    if (num < 0){
        return 'ERROR';
    }
    else{
        for (let i = 1; i<=num; i++){
            sentence += word;
        }
        return sentence;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
