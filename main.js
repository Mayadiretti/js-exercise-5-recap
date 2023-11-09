//exercise 1
function wordReverser (wordToReverse){
    let reveredWord = '';
    for(let i = wordToReverse.length -1; i>=0; i--){
        reversedWord += wordToReverse[i];
    }
    return reversedWord;
}

const reverseButton = document.getElementById('reverseButton');

window.addEventListener('load', function(){
    reverseButton.addEventListener('click', function(){
        const input = document.getElementById('wordToReverse');
        const userWord = input.value;
        console.log(userWord)
        const reversedUserWord = wordReverser(userWord)
        let resulSpace = document.getElementById('exercise-1');
        resultSpace.innerText = 'the reversed word i ${reversedUserWord}'
    })
    
})