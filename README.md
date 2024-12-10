# Dr. Cinema

(15%) Cinemas screen
  ○ (10%) A user should see a list of all cinemas X
    ■ (2.5%) Alphabetically ordered (ascending order) X
    ■ (7.5%) Displaying name and website X
  ○ (5%) Each cinema in the list should be clickable and on click should navigate X
    to a detailed screen of the selected cinema
● (20%) Cinema detail screen
  ○ (5%) A user should see detailed information on the selected cinema X
    ■ (1%) Name X 
    ■ (1%) Description X
    ■ (1%) Complete address (including street name and city) X
    ■ (1%) Phone X
    ■ (1%) Website 
● (15%) A user should see all movies which are being shown in the selected cinema 
  ○ (10%) A movie should display a thumbnail, name, release year and genres X
  ○ (5%) Each movie in the list should be clickable and when clicked the app X
    should navigate to a detailed screen for the selected movie
● (30%) Movie screen
  ○ (10%) A user should see detailed information about the selected movie
    ■ (1%) Name X
    ■ (1%) Image (poster) X
    ■ (1%) Plot X
    ■ (1%) Duration (in minutes) X
    ■ (1%) Year of release X
    ■ (5%) Genres X
  ○ (20%)** A user should be able to see the showtimes of the movie (only in the
  cinema which was selected when this particular movie was selected) and a
  way to purchase a ticket via a link**
● (10%) **Upcoming movies screen**
  ○ (10%) A user should see a list of all upcoming movies
    ■ (2.5%) Ordered by release date (ascending order)
    ■ (7.5%) An upcoming movie should display a thumbnail, name and
    release date
  ○** Extra points**
    ■ (10%) A trailer which is associated with the upcoming movie can be
    watched within the application (note that not all upcoming movies
    have a trailer, so only those who have)
● (25%) **Redux**
  ○ (10%) All network requests go through asynchronous action creators which
  update the Redux store state according to the resulted data
  ○ (10%) Components make use of Redux hooks to retrieve the state changes
  from the Redux store
  ○ (5%) State is portioned with multiple reducers

## Description
This project is a React Native application designed to display movies currently playing in cinemas, using data from the kvikmyndir.is API. With this app, you can easily browse cinemas, check out movie details, and see what’s coming soon. It’s designed to be simple, easy to use, and fun to explore!

## Table of Contents
- Installation
- Features
- Technologies Used
- Platform Support
- Project Structure
- Setup Instructions
- Running the App
- Testing
- Screenshots
- Known Issues
- Future Improvements
  
## Running the app
### Navigate to project directory
`cd drcinema`

### Install dependencies
`npm install`

### Running the App
`npm run`

## Technologies Used
- React Native
- React Navigation (if used)
- State Management Solution (Redux/Context API/etc.)
- [Any other major libraries/frameworks]
  
## Platform Support

### Primary Development Platform
- Primary Platform: [iOS/Android]
- Test Device: [e.g., iPhone 14 Pro/Samsung Galaxy S21]
- OS Version: [e.g., iOS 16.5/Android 13]
  
### Secondary Platform Testing
- Secondary Platform: [iOS/Android]
- Test Device: [e.g., iPhone 13/Google Pixel 6]
- OS Version: [e.g., iOS 16.2/Android 12]
- Testing Status: [Limited/Partial/Comprehensive]
- Known Platform-Specific Issues: [List any issues specific to this
platform]

### Platform-Specific Features
- Only state here if any
  
## Setup Instructions
### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
  
### Environment Setup
1. Install React Native dependencies
2. Configure development environment
3. Set up emulators/simulators
   
## Known Issues
- [List issues]
