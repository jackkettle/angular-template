// Testing

var app = angular.module('app', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {


  // For any unmatched url, redirect to
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: function () {
        console.log("Controller");
      }
    })
    
    // Add new pages here
})
