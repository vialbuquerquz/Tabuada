let pergunta = parseInt(prompt('De qual número você quer ver a tabuada?'))

for(let i = 1; i < 11; i++){
    document.write(pergunta + " x " + i + ' = ' + (pergunta * i) + '<br>')
}