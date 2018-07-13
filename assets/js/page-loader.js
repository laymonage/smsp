// "use strict";
function loadPage(key) {
    var hash = CryptoJS.SHA256(key).toString();
    var url = "messages/" + hash + "/index.html";

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
        success: function(data) {
            document.write(CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8));
            document.close();
        },
        error: function() {
            $("#wrong-key").show();
        }
    });
}

$("#submit-button").on("click", function(e) {
    e.preventDefault();
    loadPage($("#key-field").val());
});

$("#key-field").keypress(function(e) {
    if (e.which == 13) {
        loadPage($("#key-field").val());
    }
});
