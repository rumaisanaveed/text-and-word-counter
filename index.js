let userText = document.getElementById('text');
let characters = document.getElementById('char');
let inputWords = document.getElementById('words');

// addEventListener(event,function to be executed)

userText.addEventListener('input',function() {
      characters.innerHTML = userText.value.length + ' Characters';
      inputWords.innerHTML = userText.value.trim().split(' ').length + ' Words';
})