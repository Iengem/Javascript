function repvowels(word, mult){
    vowels = word.split('')
    wholewrd=''
    for(i=0;i<word.length;i++){
        wordarr = vowels[i]
        if(wordarr === 'a'){
            repeated = repeat('a', mult)
            indexofword = word.indexOf('a')
            vowels[indexofword] = repeated
            wholewrd =vowels.join('')
        }
        else if(wordarr ==='u'){
            repeated = repeat('u', mult)
            indexofword = word.indexOf('u')
            vowels[indexofword] = repeated
            wholewrd =vowels.join('')
        }
        else if(wordarr=== 'e'){
            repeated = repeat('e', mult)
            indexofword = word.indexOf('e')
            vowels[indexofword] = repeated
            wholewrd =vowels.join('')
        }
        else if(wordarr==='i'){
            repeated = repeat('i', mult)
            indexofword = word.indexOf('i')
            vowels[indexofword] = repeated
            wholewrd =vowels.join('')
        }
        else if(wordarr==='o'){
            repeated = repeat('o', mult)
            indexofword = word.indexOf('o')
            vowels[indexofword] = repeated
            wholewrd =vowels.join('')
        }
    }
    return wholewrd
}
function repeat(letter, value){
    empty = ''
    for(j=0;j<value;j++){
        empty += letter
    }
    return empty;
}
console.log(repvowels('sir', 2))