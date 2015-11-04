angular.module ('accounts-ui-angular-material').config(function ($stateProvider) {

    $stateProvider
        .state('accounts.login', {
            url: '/login',
            templateUrl: '/packages/socially-browser/client/users/views/login-browser.ng.html',
            controller: 'LoginCtrl',
            controllerAs: 'lc'
        })
        .state('accounts.register', {
            url: '/register',
            templateUrl: '/packages/socially-browser/client/browser-main.ng.html',
            abstract: true
        })
        .state('accounts.reset', {
            url: '/reset',
            views: {
                main: {
                    templateUrl: '/packages/socially-browser/client/parties/views/parties-list.ng.html',
                    controller: 'PartiesListCtrl'
                }
            }
        });
});
