 (function() {
     function LandingCtrl() {
         this.homeTitle = "Come Chat It Up!";
     }
 
     angular
         .module('blocChat')
         .controller('LandingCtrl', LandingCtrl);
 })();