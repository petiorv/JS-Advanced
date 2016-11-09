function solve(arr, sortBy) {
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let allTickets = [];
    for (let i = 0; i < arr.length; i++) {

        let arrRow = arr[i].split('|');
        let destination = arrRow[0];
        let price = Number(arrRow[1]);
        let status = arrRow[2];

        let currentTicket = new Ticket(destination, price, status)

        allTickets.push(currentTicket)
    }

    if(sortBy == 'destination'){
        allTickets.sort((a,b) =>{
           return a.destination > b.destination
        })
    }else if(sortBy == 'price'){
        allTickets.sort((a,b) =>{
            return a.price > b.price
        })
    }else if(sortBy == 'status'){
        allTickets.sort((a,b) =>{
            return a.status > b.status
        })
    }

    return allTickets
}

solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status')