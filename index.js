let butn = document.querySelector('#button');
butn.addEventListener('click', function(){
    let eggs = document.querySelector('#eggs').value;
    if(eggs > 1){
        document.querySelector('#button').value = 'You just bought '+ eggs +' eggs' ;
    }
    else if(eggs==1){
        document.querySelector('#button').value = 'You just bought ' + eggs + ' egg';
    }
    else{
        document.querySelector('#button').value = 'Not a valid order';
    }
})