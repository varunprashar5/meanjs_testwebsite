'use strict';

angular.module('woobeeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        authenticate: false,
        views: {
				"header": { template: '' },
				"body":   { templateUrl: 'app/account/login/login.html',
							controller: 'LoginCtrl'}
			}
      })
      //~ .state('signup', {
        //~ url: '/signup',
        //~ templateUrl: 'app/account/signup/signup.html',
        //~ controller: 'SignupCtrl'
      //~ })
      .state('settings', {
        url: '/settings',
        authenticate: true,
        views: {
				"header": { templateUrl: 'components/navbar/header.html'},
				"body":   { templateUrl: 'app/account/settings/settings.html',
							controller: 'SettingsCtrl'}
			}
      })
      .state('dashboard', {
        url: '/dashboard',
        authenticate: true,
        views: {
				"header": { templateUrl: 'components/navbar/header.html'},
				"body":   { templateUrl: 'app/account/dashboard/dashboard.html',
							controller: 'DashboardCtrl'}
			}
      });
  });
