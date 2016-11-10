/* jshint node: true */
// import * as firebase from "firebase";

module.exports = function(environment) {
  var firebase = require("firebase");
  var ENV = {
    firebase: {
    apiKey: "AIzaSyAAmTM6fP0eNUVC3EfiOFZF9lTELZidG2I",
    authDomain: "magiccards2.firebaseapp.com",
    databaseURL: "https://magiccards2.firebaseio.com",
    storageBucket: "firebase-magiccards2.appspot.com",
    messagingSenderId: "173283059013",
  },
    modulePrefix: 'magic',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
 //  var config = {
 //  // var firebase = require("firebase");
 //
 //   apiKey: "AIzaSyAAmTM6fP0eNUVC3EfiOFZF9lTELZidG2I",
 //   authDomain: "magiccards2.firebaseapp.com",
 //   databaseURL: "https://magiccards2.firebaseio.com",
 //   storageBucket: "firebase-magiccards2.appspot.com",
 //   messagingSenderId: "173283059013",
 // };
 // firebase.initializeApp(config);

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
