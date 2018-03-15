var webService = require('./webservice')
var responseHandlerForScreen = require('./responseHandlerForScreen')

function responseHandle(response, callbackMethods, errorCallbackMethods) {
    if (response !== null) {
        responseHandlerForScreen(response, callbackMethods)
    } else {
        errorCallbackMethods()
    }
}

function hitApi(jsonParams, method, callbackMethods, errorCallbackMethods) {
    switch (method) {
        case 'GET':
            webService.webServiceGet(jsonParams).then(function (response) {
                responseHandle(response, callbackMethods, errorCallbackMethods);
            })
            break;

        case 'POST':
            webService.webServicePost(jsonParams).then(function (response) {
                responseHandle(response, callbackMethods, errorCallbackMethods);
            })
            break;
        case 'DELETE':
            webService.webServiceDelete(jsonParams).then(function (response) {
                responseHandle(response, callbackMethods, errorCallbackMethods);
            })
            break;
        case 'PUT':
            webService.webServicePut(jsonParams).then(function (response) {
                responseHandle(response, callbackMethods, errorCallbackMethods);
            })
        default:
            break;
    }
}

module.exports = hitApi