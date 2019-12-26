const IBAN_REGEX = /^[A-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}?$/;

function submitPsuData() {
    const psuData = {};

    psuData.iban = $('#psuIban').val();
    psuData.psuId = $('#psuId').val();
    psuData.dateFrom = $('#dateFrom').val();
    psuData.dateTo = $('#dateTo').val();

    if (!validatePsuData(psuData.iban, psuData.psuId)) {
        return false;
    }

    $.ajax({
        type: "post",
        url: "/page/psu-data",
        data: JSON.stringify(psuData),
        complete: function (data) {
            clearPsuDataForm();
        },
        dataType: "json",
        contentType: 'application/json',
    });
}

function validatePsuData(iban, psuId) {
    let valid = true;

    if (iban === undefined || !IBAN_REGEX.test(iban)) {
        $('#invalid-iban').show();
        valid = false;
    } else {
        $('#invalid-iban').hide();
    }

    if (psuId === undefined || psuId === '') {
        $('#invalid-psu-id').show();
        valid = false;
    } else {
        $('#invalid-iban').hide();
    }

    return valid;
}

function clearPsuDataForm() {
    $('#psuIban').val("");
    $('#psuId').val("");
    $('#dateFrom').val("");
    $('#dateTo').val("");
    $('#invalid-iban').hide();
    $('#invalid-psu-id').hide();
}