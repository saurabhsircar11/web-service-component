var checkingResponse = require('./checkresponse')


function timeout(ms, promise) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error("Connection timed out"))
        }, ms)
        promise.then(resolve, reject)
    })
}

function optionMaker(jsonParams, method) {
    var options = {}
    options['methods'] = method
    if (!jsonParams.hasOwnProperty('cache')) {
        options['cache'] = jsonParams.cache.length > 0 ? jsonParams.cache : 'default'
    }
    if (!jsonParams.hasOwnProperty('credentials')) {
        options['credentials'] = jsonParams.credentials.length > 0 ? jsonParams.credentials : 'omit'
    }
    if (!jsonParams.hasOwnProperty('mode')) {
        options['mode'] = jsonParams.mode.length > 0 ? jsonParams.mode : 'same-origin'
    }
    if (!jsonParams.hasOwnProperty('redirect')) {
        options['redirect'] = jsonParams.redirect.length > 0 ? jsonParams.redirect : 'manual'
    }
    if (!jsonParams.hasOwnProperty('referrer')) {
        options['referrer'] = jsonParams.referrer.length > 0 ? jsonParams.referrer : 'client'
    }
    if (!jsonParams.hasOwnProperty('queryStringBody')) {
        options['queryStringBody'] = jsonParams.queryStringBody.length > 0 ? jsonParams.queryStringBody : ''
    }
    options['headers'] = jsonParams.headerJson
    return options
}

function responseProcessing(response) {
    var responseAfterChecking = checkingResponse(response)
    if (responseAfterChecking !== null) {
        return responseAfterChecking
    }
    else {
        return null
    }
}

function webServicePost(jsonParams) {
    return timeout(jsonParams.timeoutInMs, fetch(jsonParams.url, optionMaker(jsonParams, 'POST'))).then(function (response) {
        return responseProcessing(response)
    }).catch(function () {
        return null
    })
}

function webServiceGet(jsonParams) {
    return timeout(jsonParams.timeoutInMs, fetch(jsonParams.url + jsonParams.queryStringUrl, optionMaker(jsonParams, 'GET'))).then(function (response) {
        return responseProcessing(response);
    }).catch(function () {
            return null
        }
    )
        ;
}


function webServiceDelete(jsonParams) {
    return timeout(jsonParams.timeoutInMs, fetch(jsonParams.url + jsonParams.queryStringUrl, optionMaker(jsonParams, 'DELETE'))).then(function (response) {
        return responseProcessing(response)
    }).catch(function () {
            return null
        }
    )
        ;
}


function webServicePut(jsonParams) {
    return timeout(jsonParams.timeoutInMs, fetch(jsonParams.url +
        jsonParams.queryStringUrl, optionMaker(jsonParams, 'PUT'))).then(function (response) {
        return responseProcessing(response);
    }).catch(function () {
        return null

    });
}

module.exports = {
    webServicePost: webServicePost,
    webServiceGet: webServiceGet,
    webServicePut: webServicePut,
    webServiceDelete: webServiceDelete,
}






