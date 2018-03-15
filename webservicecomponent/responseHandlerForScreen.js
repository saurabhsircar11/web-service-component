function responseHandlerForScreen(response, callBackMethods) {
    switch (response.code) {
        case 1:
            if (callBackMethods.hasOwnProperty('case1')) {
                callBackMethods['case1'](response.response)
            }
            break;
        case 2:
            if (callBackMethods.hasOwnProperty('case2')) {
                callBackMethods['case2'](response.response)
            }
            break;
        case 3:
            if (callBackMethods.hasOwnProperty('case3')) {
                callBackMethods['case3'](response.response)
            }
            break;
        case 4:
            if (callBackMethods.hasOwnProperty('case4')) {
                callBackMethods['case4'](response.response)
            }
            break;

        case 5 :
            if (callBackMethods.hasOwnProperty('case5')) {
                callBackMethods['case5'](response.response)
            }
            break;
        case 6 :
            if (callBackMethods.hasOwnProperty('case6')) {
                callBackMethods['case6'](response.response)
            }
            break;
        case 7 :
            if (callBackMethods.hasOwnProperty('case7')) {
                callBackMethods['case7'](response.response)
            }
            break;
        default:
            if (callBackMethods.hasOwnProperty('default')) {
                callBackMethods['default'](response.response)
            }
            break;
    }
}

module.exports = responseHandlerForScreen