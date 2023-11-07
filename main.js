function stringReverse(stringToReverse) {
    let reversedString = '';
    for(let i = stringToReverse.lenght -1; i >= 0; i--){
    reversedString += stringToReversed[i];
    }
    return reversedString;
}

window.addEventListener('load', function(){
    const userWord = prompt('word to reverse');
    const toReversedString = stringReverse(userWord);
    let resultSpace = document.getElementById('exercise-1');
    resultSpace.innerText = 'The reversed world is ${toReversedString}'
})


/*esercizio 2*/ 
