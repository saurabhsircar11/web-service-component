function responseHandlerForScreen(response, callBackMethods) {
    switch (response.code) {
        case 1:
            if (callBackMethods.hasOwnProperty('case1')) {
                callBackMethods['case1'](response.response)
            }
            break;
        case 2:
            if (callBackMethods.hasOwnProperty('case2')) {
                callBackMethods['case2']()
            }
            break;
        case 3:
            if (callBackMethods.hasOwnProperty('case3')) {
                callBackMethods['case3']()
            }
            break;
        case 4:
            if (callBackMethods.hasOwnProperty('case4')) {
                callBackMethods['case4']()
            }
            break;

        case 5 :
            if (callBackMethods.hasOwnProperty('case5')) {
                callBackMethods['case5']()
            }
            break;
        case 6 :
            if (callBackMethods.hasOwnProperty('case6')) {
                callBackMethods['case6']()
            }
            break;
        default:
            if (callBackMethods.hasOwnProperty('default')) {
                callBackMethods['default']()
            }
            break;
    }
}

module.exports = responseHandlerForScreen