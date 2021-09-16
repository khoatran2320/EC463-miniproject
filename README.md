# EC463 Mini Project
## Khoa Tran and Carmen Hurtado

## Objectives
- Create a fullstack cross platform mobile application 
- Frontend allows for Gmail authentication, search food by name and return calories, scan food barcode and return calories, and manual user ingredient inputs to form recipes
- Backend sets up different APIs to handle client requests, utilize the FDA API, and manage data under Google Firebase

## Target Outcomes
- Complete a fullstack cross platform mobile application
- Utilize REST APIs
- Practice Agile SW development
- Teamwork
- Version control

## Main resources used for developements
* React Native Expo CLI
* Express 
* Google Firebase

## Solution Description
We built a cross platform React Native App using the Expo CLI for development and testing. The backend is built with Express for NodeJS and linked to Google's Firebase for database usage. 

## User Interface Flow
A user must register with an email and password before they can start using the app's functions. Once registration is complete a user can sign in. Our app checks the login information for each user and validates it if it can find it stored in Firebase. After signing in, the user can start searching food items. There are two options: search by item name or serach by scanning items barcode. The app displays to the user the calories for this item. Additionally, the user can create recipes by seraching for the items they want to add to the recipe and the app builds a recipe structure for later access. 

## Additional packages required to run the application
* expo-barcode-scanner
* express
* firebase
* firebase-admin
* axios
* react-navigation

## Images
![Log in screen](/assets/screen1.PNG).
![Main menu](/assets/screen2.PNG).
## Videos

