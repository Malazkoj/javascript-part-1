module.exports = add;

function add(a, b) {
    /*

      Write some code here !!!

     */
    if (isANumber(a) && isANumber(b))
        return a+b;
    else
    return null; // This can be deleted as well ;)
}


/*
   Utilities functions (just for helping)
 */

// OBS: this is quite a ugly helper method: DELETE ME!
function isUndefined(x) {
    return x === undefined;
}

// Tips: DON'T use Number.NaN
function isANumber(x) {
    return typeof(x) === 'number';
}
