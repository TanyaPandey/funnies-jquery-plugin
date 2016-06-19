$(function () {

    // Setup
    $('#funnies').funnies({
        interval: 5000
        //,customMessages: ["You're too funny", "Thinking really hard..."]
    });

    // Open
    $('#funnies').data('funnies').show();

    // Close
    setTimeout(function () {
        $('#funnies').data('funnies').hide();
    }, 15000);
});

