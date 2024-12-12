# Dr. Cinema
## Description
This project is a React Native application designed to display movies currently playing in cinemas, using data from the kvikmyndir.is API. With this app, you can easily browse cinemas, check out movie details, and see what’s coming soon. It’s designed to be simple, easy to use, and fun to explore!
  
# Preparing to run the app.
These are crucial steps to be able to run the app.

Go into the api folder under src
```bash
cd drcinema/src/api
```
In the api file you will find a `fetchToken.js` file. This script is used to create `token_key_secret.js` file. <br>
Next run the following command and paste it into the file 

```bash
node -e "console.log(Buffer.from('myuser:mypassword').toString('base64'))" // replace with actual credentials
```
This should output something like this `bXl1c2VyOm15cGFzc3dvcmQ=` paste this into the `fetchToken.js`
```bash
// Replace this with your actual Base64 encoded credentials.
const BASE64_CRED = 'Your base64 credentials';
```
We can then run the `fetchtoken.js` script like so.
```bash
node fetchToken.js
```
This should have created the `token_key_secret.js` which now has TOKEN_KEY needed to run the app.


## Running the app
### Navigate to project directory
`cd drcinema`

### Install dependencies
`npm install`

### Running the App
`npm run`

## Technologies Used
- React Native
- React Navigation 
- Redux

## Platform Support

### Primary Development Platform
- Primary Platform: IOS
- Test Device: iPhone 15 plus, iPhone 11, iPhone 12.
- OS Version: IOS 18.1
  
### Platform-Specific Features
- None

## Setup Instructions
### Prerequisites
- Node.js 
- npm 
- React Native CLI
  
### Environment Setup
1. See Instructions above

