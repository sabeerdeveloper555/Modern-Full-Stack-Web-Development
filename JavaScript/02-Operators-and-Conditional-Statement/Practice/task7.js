// ATM Action Menu
// 1. Check Balance
// 2. Withdraw
// 3. Deposit
// 4. Exit

let atmActionMenu = prompt(`
    ATM Action Menu:
    1. Check Balance
    2. With Draw
    3. Deposit
    4. Exit
`)

switch (atmActionMenu) {
    case '1':
        console.log("Check Balance")
        break;
    case '2':
        console.log("WithDraw")
        break;
    case '3':
        console.log("Deposit")
        break;
    case '4':
        console.log("Exit")
        break;

    default:
        console.log("Invalide ATM Action Option")
        break;
}