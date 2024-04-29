window.$ = (pacha) => document.querySelector(pacha)

$('#login-btn').addEventListener('click', function () {
    const EMail = $('#userEmail').value
    const PassWord = $('#userPassword').value
    console.log(EMail)
    console.log(PassWord)
    if (
        EMail.toString() == 'toukir@fu*k.com' &&
        PassWord.toString() == 'hoga'
    ) {
        console.log('hoga')
        $('#loginArea').hidden = true
        $('#trancsaction').style.display = 'block'
    } else {
        alert('Wrong Email or Password.')
    }
    $('#userEmail').value = ''
})

//----------Deposit section-------
$('#deposit-btn').addEventListener('click', function () {
    let deposit_amount = parseFloat($('#deposit-amount').value)

    if (deposit_amount >= 0) {
        let deposit = parseFloat($('#deposit').innerText)
        $('#deposit').innerHTML = deposit_amount + deposit
        let blance = parseFloat($('#blance').innerHTML)
        $('#blance').innerHTML = blance + deposit_amount
    } else {
        alert('Enter Valid Number')
    }
    $('#deposit-amount').value = ''
})

//---------- withdraw -------------

$('#withdraw-btn').addEventListener('click', function () {
    let withdraw_amount = parseFloat($('#withdraw-amount').value)
    let blance = parseFloat($('#blance').innerHTML)
    if (withdraw_amount >= 0 && withdraw_amount < blance) {
        let withdraw = parseFloat($('#withdraw').innerText)

        $('#withdraw').innerHTML = withdraw_amount + withdraw
        let total_blance = blance - withdraw_amount
        $('#blance').innerHTML = total_blance
    } else {
        alert('Enter Valid Number or insufficient Blance.')
    }

    $('#withdraw-amount').value = ''
})
