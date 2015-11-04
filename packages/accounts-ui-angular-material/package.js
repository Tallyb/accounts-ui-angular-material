Package.describe({
	name: 'tallyb:accounts-ui-angular-material',
	summary: 'Material Design styled accounts ui for Angular-Meteor',
	version: '0.1.0',
	git: "https://github.com/Tallyb/accounts-ui-angualr-material"
});

Package.on_use(function (api) {
	api.use(['session@1.0.0',
		'accounts-base@1.0.0',
		'underscore@1.0.0',
		'anti:i18n@0.4.3',
		'angular',
		'angular:angular-material'
		],'client');

	api.imply('accounts-base', ['client', 'server']);

	// Allows us to call Accounts.oauth.serviceNames, if there are any OAuth
	// services.
	api.use('accounts-oauth@1.0.0', {weak: true});
	// Allows us to directly test if accounts-password (which doesn't use
	// Accounts.oauth.registerService) exists.
	api.use('accounts-password@1.0.0', {weak: true});

	api.addFiles([
		'accounts_ui.js',
		'routes.ng.js',
		'accounts-ui-angular-material.js',
		'controllers/login.ng.js',
		'controllers/register.ng.js',
		'controllers/reset.ng.js'

	], 'client');

	api.addAssets ([
		'views/login.ng.html',
		'views/register.ng.html',
		'views/reset.ng.html'
	], 'web.browser');

	api.export('accountsUIAngualrMaterial', 'client')
});
