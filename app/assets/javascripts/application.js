// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.

//= require jquery
//= require lodash
//= require angular
//= require angular-route
//= require angular-sanitize
//= require restangular
// require angular-cache

// Templates
//= require angular-rails-templates
//= require_tree ../templates

// Bootstrapping
//= require app.module

// Core
//= require core/core.module
//= require core/constant
//= require core/value
//= require core/config

// Blocks
//= require blocks/router/router.module
//= require blocks/router/routehelper

// Service
//= require services/service.module
//= require services/todo.service

// Directive
//= require directives/directives.module
//= require directives/todoEscape
//= require directives/todoFocus

// Layout
//= require layout/layout.module

// todos
//= require todo/todo.module
//= require todo/todo.route
//= require todo/todo.controller

// require_tree .
// 修复测试找不到module的错误
//angular.module('templates', []);
//angular.module("<%= Rails.configuration.angular_templates.module_name %>", []);