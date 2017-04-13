"use strict";angular.module("clientApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider","$locationProvider",function(a,b){b.html5Mode(!0),a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).otherwise({redirectTo:"/"})}]).directive("contactCardMobile",[function(){return{restrict:"E",scope:{contact:"=",showContact:"&",selectedIndex:"=",index:"@"},templateUrl:"views/directive-contact-card-mobile.html"}}]).directive("contactCardDesktop",[function(){return{restrict:"E",scope:{contact:"=",selectContact:"&",selectedIndex:"=",index:"@"},templateUrl:"views/directive-contact-card-desktop.html"}}]).directive("selectedUser",[function(){return{restrict:"E",scope:{contact:"="},templateUrl:"views/directive-selected-user.html"}}]),angular.module("clientApp").controller("MainCtrl",["$http","$scope","$location","$rootScope",function(a,b,c,d){var e=a.get("/api/contacts");e.then(function(a){b.contacts=a.data.contacts,void 0===d.contactSelected?(b.contact=b.contacts[0],d.selectedIndex=0):b.contact=d.contactSelected}),e["catch"](function(a){console.log(a)}),b.selectContact=function(a){var c=a.index;b.contact=b.contacts[c],d.selectedIndex=c},b.showContact=function(a){var e=a.index;b.contact=b.contacts[e],d.contactSelected=b.contacts[e],d.selectedIndex=e,c.path("/contact")}}]),angular.module("clientApp").controller("ContactCtrl",["$scope","$rootScope","$location",function(a,b,c){a.mobileContact=b.contactSelected,a.backToContacts=function(){c.path("/")}}]),angular.module("clientApp").run(["$templateCache",function(a){a.put("views/contact.html",'<div class="contactHeader" ng-click="backToContacts()"> <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>All Contacts</div> <selected-user class="visible-xs-block" contact="mobileContact"></selected-user> <div class="contactWarning hidden-xs"> <h2>Oops, there is nothing here!<h2> </h2></h2></div>'),a.put("views/directive-contact-card-desktop.html",'<div class="desktopCardContainer row" ng-class="{selected: selectedIndex === {{index}}}" ng-click="selectContact()"> <div class="col-sm-3 col-md-4 picture"> <img ng-src="{{contact.largeImageURL}}"> </div> <div class="col-sm-9 col-md-8 info"> <h4 class="name">{{contact.name}}</h4> <div class="phone" ng-if="contact.phone.mobile !== \'\' && contact.phone.mobile !== undefined">Mobile: {{contact.phone.mobile}}</div> <div class="phone" ng-if="contact.phone.mobile === \'\' || contact.phone.mobile === undefined">Home: {{contact.phone.home}}</div> </div> </div>'),a.put("views/directive-contact-card-mobile.html",'<div class="mobileCardContainer row" ng-class="{selected: selectedIndex === {{index}}}" ng-click="showContact()"> <div class="col-xs-3 picture"> <img ng-src="{{contact.smallImageURL}}"> </div> <div class="col-xs-9 info"> <h4 class="name">{{contact.name}}</h4> <div class="phone" ng-if="contact.phone.mobile !== \'\' && contact.phone.mobile !== undefined">Mobile: {{contact.phone.mobile}}</div> <div class="phone" ng-if="contact.phone.mobile === \'\' || contact.phone.mobile === undefined">Home: {{contact.phone.home}}</div> </div> </div>'),a.put("views/directive-selected-user.html",'<div class="selectedUserContainer hidden-xs"> <div class="sectionContainer top"> <div class="row"> <div class="col-sm-4 picture"> <img ng-src="{{contact.largeImageURL}}"> </div> <div class="col-sm-8"> <div class="row"> <div class="sectionHeader visible-sm-block">Name:</div> <h2 class="name">{{contact.name}} <span class="favorite" ng-click="contact.favorite = !contact.favorite" ng-class="{\'glyphicon glyphicon-star-empty\': contact.favorite == false, \'glyphicon glyphicon-star\': contact.favorite == true}" aria-hidden="true"><h2> </h2></span></h2></div> <div class="row"> <div class="sectionHeader">Company:</div> <h4>{{contact.company}}</h4> </div> </div> </div> </div> <div class="sectionContainer"> <div class="row"> <div class="col-sm-12"> <div class="sectionHeader">Phone:</div> </div> </div> <div class="row phone"> <div class="col-md-6 col-sm-8"> <h5 ng-if="contact.phone.home !== \'\' && contact.phone.home !== undefined">{{contact.phone.home}}</h5> <h5 ng-if="contact.phone.mobile !== \'\' && contact.phone.mobile !== undefined">{{contact.phone.mobile}}</h5> <h5 ng-if="contact.phone.work !== \'\' && contact.phone.work !== undefined">{{contact.phone.work}}</h5> </div> <div class="col-md-6 col-sm-4"> <div> </div> <a href="tel:+1{{contact.phone.home}}" ng-if="contact.phone.home !== \'\' && contact.phone.home !== undefined"><h5 class="link">Home</h5></a> <a href="tel:+1{{contact.phone.mobile}}" ng-if="contact.phone.mobile !== \'\' && contact.phone.mobile !== undefined"><h5 class="link">Mobile</h5></a> <a href="tel:+1{{contact.phone.work}}" ng-if="contact.phone.work !== \'\' && contact.phone.work !== undefined"><h5 class="link">Work</h5></a> </div> </div> </div> <div class="sectionContainer"> <div class="row"> <div class="col-sm-12"> <div class="sectionHeader">Address:</div> </div> </div> <div class="row"> <div class="col-sm-12"> <h5>{{contact.address.street}}</h5> <h5>{{contact.address.city}}, {{contact.address.state}} {{contact.address.zip}}</h5> </div> </div> </div> <div class="sectionContainer"> <div class="row"> <div class="col-sm-12"> <div class="sectionHeader">Birthday:</div> </div> </div> <div class="row"> <div class="col-sm-12"> <h5>{{contact.birthdate | date: \'fullDate\'}}</h5> </div> </div> </div> <div class="sectionContainer"> <div class="row"> <div class="col-sm-12"> <div class="sectionHeader">Email:</div> </div> </div> <div class="row"> <div class="col-md-6 col-sm-8"> <h5>{{contact.email}}</h5> </div> <div class="col-md-6 col-sm-4"> <a href="mailto:{{contact.email}}"><h5 class="link">Work</h5></a> </div> </div> </div> <div class="sectionContainer"> <div class="row"> <div class="col-sm-12"> <div class="sectionHeader">Website:</div> </div> </div> <div class="row"> <div class="col-md-6 col-sm-8"> <h5>{{contact.website}}</h5> </div> <div class="col-md-6 col-sm-4"> <a href="{{contact.website}}" target="_blank"><h5 class="link">Launch</h5></a> </div> </div> </div> </div> <!-- Mobile --> <div class="mobileSelectedUserContainer visible-xs-block container-fluid"> <div class="sectionContainer top"> <div class="row"> <div class="col-xs-4 picture"> <img ng-src="{{contact.smallImageURL}}"> </div> <div class="col-xs-8"> <div class="row"> <div class="sectionHeader">Name:</div> <h4 class="topText">{{contact.name}} <span class="favorite" ng-click="contact.favorite = !contact.favorite" ng-class="{\'glyphicon glyphicon-star-empty\': contact.favorite == false, \'glyphicon glyphicon-star\': contact.favorite == true}" aria-hidden="true"><h4> </h4></span></h4></div> <div class="row"> <div class="sectionHeader">Company:</div> <h5 class="topText">{{contact.company}}</h5> </div> </div> </div> </div> <div class="sectionContainer"> <div class="row"> <div class="col-xs-12"> <div class="sectionHeader">Phone:</div> </div> </div> <div class="row phone"> <div class="col-xs-8"> <h5 ng-if="contact.phone.home !== \'\' && contact.phone.home !== undefined">{{contact.phone.home}}</h5> <h5 ng-if="contact.phone.mobile !== \'\' && contact.phone.mobile !== undefined">{{contact.phone.mobile}}</h5> <h5 ng-if="contact.phone.work !== \'\' && contact.phone.work !== undefined">{{contact.phone.work}}</h5> </div> <div class="col-xs-4"> <div> </div> <a href="tel:+1{{contact.phone.home}}" ng-if="contact.phone.home !== \'\' && contact.phone.home !== undefined"><h5 class="link">Home</h5></a> <a href="tel:+1{{contact.phone.mobile}}" ng-if="contact.phone.mobile !== \'\' && contact.phone.mobile !== undefined"><h5 class="link">Mobile</h5></a> <a href="tel:+1{{contact.phone.work}}" ng-if="contact.phone.work !== \'\' && contact.phone.work !== undefined"><h5 class="link">Work</h5></a> </div> </div> </div> <div class="sectionContainer"> <div class="row"> <div class="col-xs-12"> <div class="sectionHeader">Address:</div> </div> </div> <div class="row"> <div class="col-xs-12"> <h5>{{contact.address.street}}</h5> <h5>{{contact.address.city}}, {{contact.address.state}} {{contact.address.zip}}</h5> </div> </div> </div> <div class="sectionContainer"> <div class="row"> <div class="col-xs-12"> <div class="sectionHeader">Birthday:</div> </div> </div> <div class="row"> <div class="col-xs-12"> <h5>{{contact.birthdate | date: \'fullDate\'}}</h5> </div> </div> </div> <div class="sectionContainer"> <div class="row"> <div class="col-xs-12"> <div class="sectionHeader">Email:</div> </div> </div> <div class="row"> <div class="col-xs-8"> <h6>{{contact.email}}</h6> </div> <div class="col-xs-4"> <a href="mailto:{{contact.email}}"><h5 class="link">Work</h5></a> </div> </div> </div> <div class="sectionContainer"> <div class="row"> <div class="col-xs-12"> <div class="sectionHeader">Website:</div> </div> </div> <div class="row"> <div class="col-xs-8"> <h6>{{contact.website}}</h6> </div> <div class="col-xs-4"> <a href="{{contact.website}}" target="_blank"><h5 class="link">Launch</h5></a> </div> </div> </div> </div>'),a.put("views/main.html",'<div class="container-fluid desktopContainer hidden-xs"> <div class="row"> <div class="col-sm-5 cardColumn"> <contact-card-desktop ng-repeat="contact in contacts track by $index" contact="contact" selected-index="selectedIndex" index="{{$index}}" select-contact="selectContact({index: $index})"></contact-card-desktop> </div> <div class="col-sm-7 infoColumn"> <selected-user contact="contact"></selected-user> </div> </div> </div> <div class="container-fluid mobileContainer visible-xs-block"> <div class="row"> <div class="col-xs-12 cardColumn"> <contact-card-mobile ng-repeat="contact in contacts track by $index" contact="contact" selected-index="selectedIndex" index="{{$index}}" show-contact="showContact({index: $index})"></contact-card-mobile> </div> </div> </div>')}]);