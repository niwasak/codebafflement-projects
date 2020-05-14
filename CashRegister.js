var cashValue = [
    {name: "PENNY", val: 0.01},
    {name: "NICKEL", val: 0.05},
    {name: "DIME", val: 0.1},
    {name: "QUARTER", val: 0.25},
    {name: "ONE", val: 1.0},
    {name: "FIVE", val: 5.0},
    {name: "TEN", val: 10.0},
    {name: "TWENTY", val: 20.0},
    {name: "ONE HUNDRED", val: 100.0}
];

function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    let total = parseFloat(cid.reduce((acc, next) => {return acc + next[1], 0.0})).toFixed(2);
    let changeStatus = {status: "", change: []};

    if (total < change) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (total == change) {
        return {status: "CLOSED", change: cid};
    } else 

}