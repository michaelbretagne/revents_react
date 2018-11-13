# revents_react

I built this website as a part of an **online course** that addresses few **challenges to tackle**. This course was **created** and **designed** by **Neil Cummings** and can be found on [Udemy](https://www.udemy.com/build-an-app-with-react-redux-and-firestore-from-scratch/learn/v4/overview).

## App description:

This application allows users to **safely sign in/login** to a platform where users can **join public events/meet-ups** and/or **create new events** to host.
Users can **follow/unfollow** others users and also **chat instantaneously**.

## Libraries used in this project:

- #### Architecture:

  - [react](https://reactjs.org/) to build the user interface.
  - [redux](https://redux.js.org/) to manage the application state.
  - [react-redux](https://github.com/reduxjs/react-redux) to connect redux to the react app.
  - [redux-thunk](https://github.com/reduxjs/redux-thunk), redux middleware to handle actions.
  - [redux-form](https://github.com/erikras/redux-form/) to manage the form state in Redux.
  - [revalidate](https://github.com/jfairbank/revalidate) for input validation.
  - [react-loadable](https://github.com/jamiebuilds/react-loadable) to load components as needed.
  - [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) to handle routings in our app.
  - [redux-auth-wrapper](https://github.com/mjrussell/redux-auth-wrapper) to handle Authentication and Authorization with Routing and Redux.
  - [cuid](https://github.com/ericelliott/cuid) to create unique ID.
  - [date-fns](https://github.com/date-fns/date-fns) and [moment](https://momentjs.com/) and [react-datepicker](https://github.com/Hacker0x01/react-datepicker) to manage the dates format.

- #### Design:

  - [semantic-ui-react](https://react.semantic-ui.com/) for the overall app design.
  - [react-infinite-scroller](https://github.com/CassetteRocks/react-infinite-scroller) to load more contents when scrolling.
  - [react-redux-toastr](https://github.com/diegoddox/react-redux-toastr) for the toast notification.
  - [google-map-react](https://github.com/google-map-react/google-map-react) to render React components on the Google Map.

- #### Back-end:

  - [Firebase](https://firebase.google.com/) is used for the backend of the application. It stores the data and it is also used to host the web app.

## Application functionalities:

- **Login** and **Register** functionality using Firebase authentication.
- **Social login** for Facebook and Google.
- **Create**, **cancel** and **join** events.
- View **users profile**.
- **Follow** and **unfollow** users.
- **Google maps** and **Places autocomplete** integration.
- **Photo uploading** using **drag and drop**, with **resizing** and **cropping** of the images before upload.
- **Live chat** system
- View **past**, **future** and **hosted events**.

The web app can be seen live [here](https://revents-e29f3.firebaseapp.com/events).

## Screenshots:

  <p align="center" margin="10px">
    <img src="./public/assets/screenshot1" alt="screenshot 1"/>
  </p>

  <p align="center" margin="10px">
    <img src="./public/assets/screenshot2" alt="screenshot 1"/>
  </p>
