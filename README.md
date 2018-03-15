# React native web service component

It helps in handling various response code and actions to be performed for the respective response code(eg: on status code 200 to navigate to different screen).Its checks for null responses and helps you integrate web services faster.
Works for both react and react-native

## Getting Started

   #1. Import function in your file

       import hitApi from '../webservicecomponent'


#2.Usage of the library

  Example for get request

     //need to add queryStringBody for post request
     const jsonParams = {
        timeoutInMs: 5000,
        queryStringUrl: '',//if any query string is there, you need to add ? for query string
        url: url,
        headerJson: {
          'Content-Type': 'application/json',
          'Authorization': 'your authorization token'
        },
        mode: 'cors',// Can be changed to your need
        redirect: 'follow',// Can be changed to your need
      };

     const method = 'GET';

     const callBack = {
            case1: (response) => {
              response.json().then((data) => {
                alert(JSON.stringify(data))
              })
            },
            case2: () => {
              alert('hi1')
            },

            default: () => {
              alert('hi2')
            }
          };

      //for handling where response is null and you need show a message to user.(Response null can happen due to timeout, if there is an error in fetch it gives an error)
      const errorCallbackMethods = () => {
        alert('response was null')
      };
      hitApi(jsonParams, method, callBack, errorCallbackMethods);




### Prerequisites
    Works on RN > 0.46.0


### Installing
   Clone the repo for now, it not on npm yet


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

