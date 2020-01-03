$(document).ready(function() {
    $('input[type="checkbox"]').click(function() {
        if ($(this).prop("checked") == true) {
            $(".monthly-price").css("display", "initial")
            $(".annual-price").css("display", "none")
        } else if ($(this).prop("checked") == false) {
            $(".monthly-price").css("display", "none")
            $(".annual-price").css("display", "initial")
        }
    });
});