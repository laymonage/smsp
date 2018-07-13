// "use strict";
function hash(pwd) {
    return CryptoJS.SHA256(pwd).toString();
}

function encrypt(message, key) {
    return CryptoJS.AES.encrypt(message, key).toString();
}

function setHash(hash) {
    parent.location.hash = hash;
}

function setOutput(message) {
    $("#output-area").show();
    $("#output-area").val(message);
}

function submit() {
    setHash(hash($("#key-field").val()));
    setOutput(encrypt($("#input-area").val(), $("#key-field").val()));
}

$("#submit-button").on("click", function(e) {
    e.preventDefault();
    submit();
});

$("#key-field").keypress(function(e) {
    if (e.which == 13) {
        submit();
    }
});
