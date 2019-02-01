let paypal_email, amount, description, currency;
let code;


if (paypal_email === '' || amount === '' || description === '') {
    code = "All fields are required. Sorry :)";
}
else {
    code = 'https://www.paypal.com/cgi-bin/webscr?business=' + paypal_email + '&cmd=_xclick&currency_code=' + currency + '&amount=' + amount + '&item_name=' + description;
}