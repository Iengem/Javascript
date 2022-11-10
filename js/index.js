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
    if(subs=="2"){
        daily = prompt('Choose a weekly data bundle:\n 1. N1,500 for 6GB(1 week)\n 2. N3,000 for 9GB(3 weeks)\n 3. N5,000 for 20GB(2 weeks)');
        if(daily=='1'){
            alert('Your purchase of 6GB for N1,500 was successful');
        }
        else if(daily=='2'){
            alert('Your purchase of 9GB for N3,000 was successful');
        }    
        else if(daily=='3'){
            alert('Your purchase of 20GB for N5,000 was successful');
        }
        else{
            alert('Not a valid option');
        }
    }
    if(subs=="3"){
        daily = prompt('Choose a monthly data bundle:\n 1. N6,000 for 12GB(1 month)\n 2. N10,000 for 20GB(2 months)\n 3. N20,000 for 50GB(1 month)');
        if(daily=='1'){
            alert('Your purchase of 12GB for N6,000 was successful');
        }
        else if(daily=='2'){
            alert('Your purchase of 20GB for N10,000 was successful');
        }    
        else if(daily=='3'){
            alert('Your purchase of 50GB for N20,000 was successful');
        }
        else{
            alert('Not a valid option');
        }
    }
}
else{
    alert('Not a valid option');
}