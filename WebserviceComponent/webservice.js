var checkingResponse = require('./checkresponse')


function timeout(ms, promise) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error("Connection timed out"))
        }, ms)
        promise.then(resolve, reject)
    })
}


function getHeader(authorizationCode, acceptType, contentType) {
    if (authorizationCode.length > 0) {
        return {
            'Accept': acceptType,
            'Content-Type': contentType,
            'Authorization': authorizationCode
        }
    }
    else {
        return {
            'Accept': acceptType,
            'Content-Type': contentType
        }
    }
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

function webServicePost(timeoutInMs, queryStringBody, url, authorizationCode, contentType, acceptType) {
    var headerJson = getHeader(authorizationCode, acceptType, contentType);
    return timeout(timeoutInMs, fetch(url, {
        method: 'POST',
        headers: headerJson,
        body: queryStringBody,
    })).then(function (response) {
        return responseProcessing(response)
    }).catch(function () {
        return null
    })
}

function webServiceGet(timeoutInMs, queryString, url, authorizationCode, acceptType, contentType, isQuestionMark) {
    isQuestionMark = isQuestionMark || false
    var headerJson = getHeader(authorizationCode, acceptType, contentType)
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


function webServiceDelete(timeoutInMs, queryString, url, authorizationCode, acceptType, contentType) {
    var headerJson = getHeader(authorizationCode, acceptType, contentType)
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


function webServicePut(timeoutInMs, queryStringUrl, queryStringBody, url, authorizationCode, contentType, acceptType) {
    var headerJson = getHeader(authorizationCode, acceptType, contentType)
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






