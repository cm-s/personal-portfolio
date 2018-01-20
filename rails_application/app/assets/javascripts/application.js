// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require cable
//= require react
//= require react_ujs
//= require components
//= require_tree .
function sleep(miliseconds) {
  let currentTime = new Date().getTime();
  while (currentTime + miliseconds >= new Date().getTime()) {};
};
function getBrowserType() {
  let statset = navigator.userAgent.match(/\w+(?=\/(?=\d+\.\d+))/gi);
  if (statset[statset.length - 1] == "Safari") statset.splice(statset.length - 1, 1);
  return statset[statset.length - 1];
};
function readURI(section) {
  let URI_sections = window.location.href.split(/\//);
  URI_sections.splice(0,1);URI_sections.splice(0,1);
  if (section == undefined) return URI_sections.length;
  return URI_sections[section];
};