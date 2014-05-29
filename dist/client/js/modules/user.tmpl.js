angular.module('user').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('user/messages-panel.html',
    "<ul class=\"off-canvas-list\" ng-controller=\"user.MessagesCtrl as model\">\n" +
    "  <li><label>Messages</label></li>\n" +
    "  <li ng-repeat=\"message in model.messages\">\n" +
    "    <a href=\"#\">The Psychohistorians</a>\n" +
    "  </li>\n" +
    "</ul>"
  );


  $templateCache.put('user/userinfo.html',
    "<div class=\"user-info\" ng-controller=\"user.UserInfoCtrl as userinfo\">\n" +
    "  <div class=\"username\">{{userinfo.name}}</div>\n" +
    "  <div class=\"messages\">\n" +
    "    <a href=\"#\" class=\"right-off-canvas-toggle\">\n" +
    "      <span class=\"fa fa-envelope\"></span>{{userinfo.messages.length}}\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</div>"
  );

}]);
