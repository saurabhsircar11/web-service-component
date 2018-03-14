var webService = require('./webservice')
var responseHandler = require('./responseHandlerForScreen')

function hitApi(jsonParams, method, callbackMethods, errorCallbackMethods) {
    switch (method) {
        case 'GET':
            webService.webServiceGet(jsonParams.timeoutInMs, jsonParams.queryString, jsonParams.url, jsonParams.authorizationCode, jsonParams.acceptType, jsonParams.contentType, jsonParams.isQuestionMark).then(function (response) {
                if (response !== null) {
                    responseHandlerForScreen(response, callbackMethods)
                } else {
                    errorCallbackMethods()
                }
            })
            break;

        case 'POST':
            webService.webServicePost(jsonParams.timeoutInMs, jsonParams.queryStringBody, jsonParams.url, jsonParams.authorizationCode, jsonParams.contentType, jsonParams.acceptType).then(function (response) {
                if (response !== null) {
                    responseHandlerForScreen(response, callbackMethods)
                } else {
                    errorCallbackMethods()
                }
            })
            break;
        case 'DELETE':
            webService.webServiceDelete(jsonParams.timeoutInMs, jsonParams.queryString, jsonParams.url, jsonParams.authorizationCode, jsonParams.acceptType, jsonParams.contentType).then(function (response) {
                if (response !== null) {
                    responseHandlerForScreen(response, callbackMethods)
                } else {
                    errorCallbackMethods()
                }
            })
            break;
        case 'PUT':
            webService.webServicePut(jsonParams.timeoutInMs, jsonParams.queryString, jsonParams.queryStringBody, jsonParams.url, jsonParams.authorizationCode, jsonParams.contentType, jsonParams.acceptType).then(function (response) {
                if (response !== null) {
                    responseHandlerForScreen(response, callbackMethods)
                } else {
                    errorCallbackMethods()
                }
            })
    }
}

module.exports = hitApi