var checkingResponse = require('./checkresponse')


function timeout(ms, promise) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error("Connection timed out"))
        }, ms)
        promise.then(resolve, reject)
    })
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

function webServicePost(timeoutInMs, queryStringBody, url, headerJson) {
    timeout(timeoutInMs, fetch(url, {
        method: 'POST',
        headers: headerJson,
        body: queryStringBody,
    })).then(function (response) {
        return responseProcessing(response)
    }).catch(function () {
        return null
    })
}

function webServiceGet(timeoutInMs, queryString, url, headerJson, isQuestionMark) {
    isQuestionMark = isQuestionMark || false
    return timeout(timeoutInMs, fetch(url + (isQuestionMark ? '?' : '/') + queryString, {
        method: 'GET',
        headers: headerJson,
    })).then(function (response) {
        return responseProcessing(response);
    }).catch(function () {
            return null
        }
    )
        ;
}


function webServiceDelete(timeoutInMs, queryString, url, headerJson) {
    return timeout(timeoutInMs, fetch(url + '/' + queryString, {
        method: 'DELETE',
        headers: headerJson,
    })).then(function (response) {
        return responseProcessing(response)
    }).catch(function () {
            return null
        }
    )
        ;
}


function webServicePut(timeoutInMs, queryStringUrl, queryStringBody, url, headerJson) {
    return timeout(timeoutInMs, fetch(url + '/' + queryStringUrl, {
        method: 'PUT',
        headers: headerJson,
        body: queryStringBody,
    })).then(function (response) {
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






