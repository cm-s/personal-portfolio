function textOperator() {
    var greetingText = "Please enter your Username and Password";
    /*for (var index = 0; index < 39; index++) {
        console.log("This is bad")
        $('#greeting').append(greetingText[index]);
        sleep(5.0);
    };*/
    $('#greeting').append(greetingText);
};
$(document).ready(function() {
    //textOperator();
    $('.moldingBox').addClass('revealed');
})
