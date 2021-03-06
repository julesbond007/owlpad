/**
 * Application configuration with shortcut alias
 */
require.config({
    paths : {
        hbs : 'vendor/hbs',
        jquery : 'vendor/jquery',
        json2 : 'vendor/json2',
        underscore : 'vendor/underscore',
        handlebars : 'vendor/handlebars',
        backbone : 'vendor/backbone',
        marionette : 'vendor/backbone.marionette.min',
        i18nprecompile : 'vendor/i18nprecompile',
        bootstrap : 'vendor/bootstrap.min',
        syntaxHighlighter : 'vendor/syntaxHighlighter/shCore.min',
        shBrush : 'vendor/syntaxHighlighter/shBrushJava'
    },

    shim : {
        jquery : {
            exports : '$'
        },
        json2 : {
            exports : 'JSON'
        },
        underscore : {
            exports : '_'
        },
        handlebars : {
            exports : 'Handlebars'
        },
        backbone : {
            deps : ['jquery', 'json2', 'underscore'],
            exports : 'Backbone'
        },
        marionette : {
            deps : ['jquery', 'underscore', 'backbone'],
            exports : 'Marionette'
        },
        bootstrap : {
            deps : ['jquery'],
            exports : 'Bootstrap'
        },
        syntaxHighlighter : {
            deps : ['jquery'],
            exports : 'SyntaxHighlighter'
        },
        shBrush : {
            deps : ['syntaxHighlighter'],
            exports : 'shBrush'
        }
    }
}); 