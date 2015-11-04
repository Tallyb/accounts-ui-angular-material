if (Meteor.isClient) {
  // counter starts at 0

  angular.module ('example', [
    'angular-meteor',
    'ngMaterial'
  ]);

  Session.setDefault('counter', 0);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
