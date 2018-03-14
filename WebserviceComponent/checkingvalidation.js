function checkingValidation(response) {
    switch (response.status) {
        case 200:
            return {code: 1, response: response}
        case 401:
            return {code: 2}
        case 400:
            return {
                code: 3,
            }
        case 404:
            return {
                code: 3
            }
        case 201:
            return {
                code: 4,
            }
        case 204:
            return {
                code: 5,
            }
        case 409:
            return {
                code: 6
            }
        default:
            return null;
    }
}

module.exports = checkingValidation