var checkingValidation = require('./checkingvalidation')

function checkResponse(response) {
    if (response != null) {
        return checkingValidation(response)
    }
    else {
        return null;
    }
}

module.exports = checkResponse