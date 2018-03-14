var webService = require('./webservice')
var responseHandlerForScreen = require('./responseHandlerForScreen')

function hitApi(jsonParams, method, callbackMethods, errorCallbackMethods) {
    switch (method) {
        case 'GET':
            webService.webServiceGet(jsonParams.timeoutInMs, jsonParams.queryString, jsonParams.url, jsonParams.headerJson, jsonParams.isQuestionMark).then(function (response) {
                if (response !== null) {
                    responseHandlerForScreen(response, callbackMethods)
                } else {
                    errorCallbackMethods()
                }
            })
            break;

        case 'POST':
            webService.webServicePost(jsonParams.timeoutInMs, jsonParams.queryStringBody, jsonParams.url, jsonParams.headerJson).then(function (response) {
                if (response !== null) {
                    responseHandlerForScreen(response, callbackMethods)
                } else {
                    errorCallbackMethods()
                }
            })
            break;
        case 'DELETE':
            webService.webServiceDelete(jsonParams.timeoutInMs, jsonParams.queryString, jsonParams.url, jsonParams.headerJson).then(function (response) {
                if (response !== null) {
                    responseHandlerForScreen(response, callbackMethods)
                } else {
                    errorCallbackMethods()
                }
            })
            break;
        case 'PUT':
            webService.webServicePut(jsonParams.timeoutInMs, jsonParams.queryString, jsonParams.queryStringBody, jsonParams.url, jsonParams.headerJson).then(function (response) {
                if (response !== null) {
                    responseHandlerForScreen(response, callbackMethods)
                } else {
                    errorCallbackMethods()
                }
            })
    }
}

module.exports = hitApi