# sequoia_test
Automation Testing Project for Sequoia

Environment Variable | Description
--- | --- 
AWS_ENV | Defines the environment to hit during the testing
AWS_APP_NAME | It is the app name given during the infrastructure deployment
SERVICE_URL | API Gateway Base Url to consume the services
APIKEY | API Key for API Authorization
APIKEYS_OUTPUT_ENABLED | Use *true* as a value for this environment variable if you don't know the API Key to assign but make sure you have executed the **APIKey Discover Command** Describe in this document before to execute this project
STACKS_OUTPUT_ENABLED | Use *true* as a value for this environment variable if you don't know the Service URL to assign but make sure you have executed the **Service URL Discover Command** Describe in this document before to execute this project

###APIKey Discover Command
    npm run stacks-output
###Service URL Discover Command
    npm run apikeys-output

### Sample Poject Execution
#### Example #1
Use this example if you already know the right values for the APIKEY and SERVICE_URL.

Environment Variable | Valor
--- | --- 
SERVICE_URL | https://63y88vaelk.execute-api.us-east-1.amazonaws.com/dev 
APIKEY | TPMaQJj7oI8nGo2sUfFDkpDo1YGZoZ06SHAkA6hc 

**NOTE:** Values for the environment variables above might change depending on the last deployment executed in you infrastructure or the environment you want to hit during the testing
  
    npm run test

#### Example #2
Use this example if you don't know the values for the APIKEY and SERVICE_URL and you want to auto discover them.

Environment Variable | Valor
--- | --- 
APIKEYS_OUTPUT_ENABLED | true 
STACKS_OUTPUT_ENABLED | true 
AWS_APP_NAME | sequoia 
AWS_ENV | dev
  
**NOTE:** Values for the environment variables AWS_APP_NAME or AWS_ENV might change depending on the environment you want to hit during the testing

    npm run test