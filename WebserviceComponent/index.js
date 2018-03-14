var webService = require('./webservice')
var responseHandler = require('./responseHandlerForScreen')

function hitApi(jsonParams, method, callbackMethods) {
    switch (method) {
        case 'GET':
            webService.webServiceGet(jsonParams.timeoutInMs, jsonParams.queryString, jsonParams.url, jsonParams.authorizationCode, jsonParams.acceptType, jsonParams.contentType, jsonParams.isQuestionMark).then(function (response) {
                responseHandlerForScreen(response, callbackMethods)
            })
            break;

        case 'POST':
            webService.webServicePost(jsonParams.timeoutInMs, jsonParams.queryStringBody, jsonParams.url, jsonParams.authorizationCode, jsonParams.contentType, jsonParams.acceptType).then(function (response) {
                responseHandlerForScreen(response, callbackMethods)
            })
            break;
        case 'DELETE':
            webService.webServiceDelete(jsonParams.timeoutInMs, jsonParams.queryString, jsonParams.url, jsonParams.authorizationCode, jsonParams.acceptType, jsonParams.contentType).then(function (response) {
                responseHandlerForScreen(response, callbackMethods)
            })
            break;
        case 'PUT':
            webService.webServicePut(jsonParams.timeoutInMs, jsonParams.queryString, jsonParams.queryStringBody, jsonParams.url, jsonParams.authorizationCode, jsonParams.contentType, jsonParams.acceptType).then(function (response) {
                responseHandlerForScreen(response, callbackMethods)
            })

    }
}