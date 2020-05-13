var currency = [
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
    var output = {status: null, change: []};
    var change = cash - price;
    
    if (register.total === change) {
        output.status = "CLOSED";
        output.change = cid;
        return output;
    }
}