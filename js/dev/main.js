// Testing

var app = angular.module('app', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {


  // For any unmatched url, redirect to
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      data: {
        linkText: "Home"
      } 
    })
    
    .state('fileSaverTest', {
      url: "/fileSaverTest",
      templateUrl: "partials/fileSaverTest.html",
      data: {
        linkText: "FileSaver"
      } 
    })
})

app.controller('mainNavController', function ($scope, $state) {
  
  // Set main navigation from existing router-ui states
  $scope.navigationData = [];
  var data = $state.get()
  angular.forEach(data, function(index) {
    if(index.name !== ""){
      $scope.navigationData.push(index);
    }
  });
  
})

app.directive('mainNav', function () {
  return {
    restrict: 'A',
    replace: 'true',
    template:
      '<li ng-repeat="navObject in navigationData">' +
      '<a role="presentation" ui-sref="{{ navObject.name }}">{{ navObject.data.linkText }}</a>' +
      '</li>'
  }
});