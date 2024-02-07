function calculateMoney(ticketSale) {
    if(ticketSale <= 0){
        return "Invalid Number"
    }
    else if (typeof ticketSale !== "number"){
        return "Invalid Number"
    }
    const eachTicketPrice = 120;
    const perDayCost = ( 500 + (8 * 50));
    const profit  = ((ticketSale * eachTicketPrice) - perDayCost);
    return profit;
    }

    console.log(calculateMoney(10))

    console.log(calculateMoney(1055))

    console.log(calculateMoney(93))
    
    console.log(calculateMoney(-103))