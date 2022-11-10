let choose = prompt('Select an option below:\n 1. Buy data\n 2. Buy Airtime');
if(choose=="1"){
    subs = prompt('Choose a subscription:\n 1. Daily\n 2. Weekly\n 3. Monthly');
    if(subs=="1"){
        daily = prompt('Choose a daily data bundle:\n 1. N500 for 2GB(2 days)\n 2. N1,000 for 3GB(6days)\n 3. N2,000 for 10GB(3 days)');
        if(daily=='1'){
            alert('Your purchase of 2GB for N500 was successful');
        }
        else if(daily=='2'){
            alert('Your purchase of 3GB for N1,000 was successful');
        }    
        else if(daily=='3'){
            alert('Your purchase of 10GB for N2,000 was successful');
        }
        else{
            alert('Not a valid option');
        }
    }
}
else{
    alert('Not a valid option');
}