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
		'angualr',
		'angular:angular-material'
		],'client');

	api.imply('accounts-base', ['client', 'server']);

	// Allows us to call Accounts.oauth.serviceNames, if there are any OAuth
	// services.
	api.use('accounts-oauth@1.0.0', {weak: true});
	// Allows us to directly test if accounts-password (which doesn't use
	// Accounts.oauth.registerService) exists.
	api.use('accounts-password@1.0.0', {weak: true});

	api.add_files([
		'accounts_ui.js',

		// translations
		'i18n/en.i18n.js',
		'i18n/es.i18n.js',
		'i18n/ca.i18n.js',
		'i18n/fr.i18n.js',
		'i18n/de.i18n.js',
		'i18n/it.i18n.js',
		'i18n/pt-PT.i18n.js',
		'i18n/pt-BR.i18n.js',
		'i18n/pt.i18n.js',
		'i18n/ru.i18n.js',
		'i18n/el.i18n.js',
		'i18n/ko.i18n.js',
		'i18n/ar.i18n.js',
		'i18n/pl.i18n.js',
		'i18n/zh-CN.i18n.js',
		'i18n/zh-TW.i18n.js',
		'i18n/zh.i18n.js',
		'i18n/nl.i18n.js',
		'i18n/ja.i18n.js',
		'i18n/he.i18n.js',
		'i18n.js'

		//need to add the local files here

		], 'client');

	api.export('accountsUIAngualrMaterial', 'client')
});
