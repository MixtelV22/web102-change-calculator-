document.getElementById('calculate-change').addEventListener('click', function () {
    const saleInput = document.getElementById('amount-due').value;
    const receivedInput = document.getElementById('amount-received').value;

    const amountDue = parseFloat(saleInput);
    const amountReceived = parseFloat(receivedInput);

    if (isNaN(amountDue) || isNaN(amountReceived)) {
        alert("Invalid Entry");
        return;
    }

    if (amountReceived < amountDue) {
        alert("Insufficient funds received");
        return;
    }

    let change = Math.round((amountReceived - amountDue) * 100);

    const denominations = {
        dollars: 100,
        quarters: 25,
        dimes: 10,
        nickels: 5,
        pennies: 1
    };

    for (const [key, value] of Object.entries(denominations)) {
        const count = Math.floor(change / value);
        const paragraph = document.getElementById(`${key}-output`);
        paragraph.innerText = count;
        change %= value;
    }
});