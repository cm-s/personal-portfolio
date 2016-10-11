var entries_filled = { user_name: false, first_name: false, last_name: false, password: false };

// Entry setter, helper function for the monitor_signup_entries() function and the monitor_login_entries() funciton.
function permit_entry(reporter) {
    switch (reporter) {
        case 'user_name':
            entries_filled.user_name = true;
            break;
        case 'first_name':
            entries_filled.first_name = true;
            break;
        case 'last_name':
            entries_filled.last_name = true;
            break;
        case 'password':
            entries_filled.password = true;
            break;
    };
};
function monitor_signup_entries(inputObject, reporter, buttonObject, buttonShroud) {
    // Check if input field has text in it and reflect that in the reporter(beign one of the entries_filled values)
    if ($(inputObject).val() != '') {
        permit_entry(reporter);
    };
    // If fields are filled, allow submission
    if (entries_filled.user_name && entries_filled.password && entries_filled.first_name && entries_filled.last_name) {
        $(buttonShroud).css('display', 'none');
        $(buttonObject).removeClass('disabled').addClass('enabled');
    }
    else {
        $(buttonShroud).css('display', 'block');
        $(buttonObject).removeClass('enabled').addClass('disabled');
    };
};
function monitor_login_entries(inputObject, reporter, buttonObject, buttonShroud) {
    if ($(inputObject).val() != '') {
        permit_entry(reporter);
    } else {
        if (inputObject) {
            reporter = false;
        };
    };
    if (entries_filled.user_name && entries_filled.password) {
        $(buttonShroud).css('display', 'none');
        $(buttonObject).removeClass('disabled').addClass('enabled');
    }
    else {
        $(buttonShroud).css('display', 'block');
        $(buttonObject).removeClass('enabled').addClass('disabled');
    };
};

$(document).on('click', function() {

    // Forum entry enforcement aggragators, envoking enforcement functions
    $('#messenger_user_name').keyup(function() {
        monitor_signup_entries('#messenger_user_name', 'user_name', '#signup-button', '#signup-shroud');
    });
    $('#messenger_password').keyup(function() {
        monitor_signup_entries('#messenger_password', 'password', '#signup-button', '#signup-shroud');
    });
    $('#messenger_first_name').keyup(function() {
        monitor_signup_entries('#messenger_first_name', 'first_name', '#signup-button', '#signup-shroud');
    });
    $('#messenger_last_name').keyup(function() {
        monitor_signup_entries('#messenger_last_name', 'last_name', '#signup-button', '#signup-shroud');
    });
    $('#user_name').keyup(function() {
        monitor_login_entries('#user_name', 'user_name', '#login-button', '#login-shroud');
    });
    $('#password').keyup(function() {
        monitor_login_entries(null, 'password', '#login-button', '#login-shroud');
    });
});
