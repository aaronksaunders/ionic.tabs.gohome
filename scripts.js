angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('tabs', {
    url: "/tab",
    abstract: true,
    templateUrl: "tabs.html"
  })
  .state('tabs.home', {
    url: "/home",
    views: {
      'home-tab': {
        templateUrl: "home.html",
        controller: 'HomeTabCtrl as homeCtrl'
      }
    }
  })
  .state('tabs.facts', {
    url: "/facts",
    views: {
      'home-tab': {
        templateUrl: "facts.html"
      }
    }
  })
  .state('tabs.facts2', {
    url: "/facts2",
    views: {
      'home-tab': {
        templateUrl: "facts2.html"
      }
    }
  })
  .state('tabs.about', {
    url: "/about",
    views: {
      'about-tab': {
        templateUrl: "about.html"
      }
    }
  })
  .state('tabs.navstack', {
    url: "/navstack",
    views: {
      'about-tab': {
        templateUrl: "nav-stack.html"
      }
    }
  })
  .state('tabs.contact', {
    url: "/contact",
    views: {
      'contact-tab': {
        templateUrl: "contact.html"
      }
    }
  });


  $urlRouterProvider.otherwise("/tab/home");

})

.controller('MainCtrl', ['$state', function($state) {
  //console.log('HomeTabCtrl');
  this.onTabSelected = function(_scope){
    console.log("onTabSelected - main");
    // if we are selectng the home title then 
    // change the state back to the top state
    if ( _scope.title === 'Home') {
      setTimeout(function() {
        $state.go('tabs.home', {});
      },20);
    }
  }
  this.onTabDeselected = function(){
    console.log("onTabDeselected -  main");
  }
}])
.controller('HomeTabCtrl', function($scope) {
});
