//= require jquery
//= require jquery_ujs
//= require turbolinks
var UserNameForumFilled = false;
var PasswordForumFilled = false;
var menu_out = false;

function check_entries(PasswordForumFilled, UserNameForumFilled) {
    if (PasswordForumFilled && UserNameForumFilled) {
        $('#signup-shroud').css('display', 'none');
        $('#signup-submit').removeClass('disabled').addClass('enabled');
    }
    else {
        $('#signup-shroud').css('display', 'block');
        $('#signup-submit').removeClass('enabled').addClass('disabled');
    };
};

$(document).ready(function() {
    $('#menu').click(function() {
        $('menu').animate({'margin-left': '0'}, 200);
    });
    $('#close').click(function() {
        $('#closing-shroud').addClass('pressed');
        setTimeout(function () {
            $('#signup-forum').css('display', 'none');
        }, 120);
    });
    $('#signup-link').click(function() {
        $('#signup-forum').css('height', '0').css('display', 'block');
        $('#signup-forum').animate({'height': '350px'}, 65)
        $('menu').animate({'margin-left': '-335px'}, 200);
    });
    $('#messenger_user_name').keyup(function() {
        if ($(this).val() != '') { UserNameForumFilled = true; }
        else { UserNameForumFilled = false };
        check_entries(PasswordForumFilled, UserNameForumFilled);
    });
    $('#messenger_password').keyup(function() {
        if ($(this).val() != '') { PasswordForumFilled = true; }
        else { PasswordForumFilled = false; };
        check_entries(PasswordForumFilled, UserNameForumFilled);
    });
});
