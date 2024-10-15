//create a callback function example for account
// 1.PrintAccount details should accept this call back and the account information
// 2. Upon executing PrintAccntDetails it should show the account details with a message
// 3. Use the same call back to print multiple sessions planned for the day
function PrintDetails(message, dataObject){
    console.log(message, dataObject)
}

function PrintAccntDetails(callback, accountInfo) {
    callback("Your account details are: ", accountInfo);
}
var accountInfo = {
    AccountName: 'Windie',
    AcountNumber: '12345'
}

PrintAccntDetails(PrintDetails,accountInfo)

var accountInfo2 = {
    AccountName: 'Sophia',
    AcountNumber: '2222'
}
PrintAccntDetails(PrintDetails,accountInfo2)