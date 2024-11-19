const removeFromArray = function(deret, ...theArgs) {

    return deret.filter(item => !theArgs.includes(item));
    
    
};
// Do not edit below this lined
module.exports = removeFromArray;
