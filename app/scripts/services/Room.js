(function() {
  function Room($firebaseArray) {
//      var fireRef = new Firebase("https://bloc-chat-f2938.firebaseio.com");
//      this.rooms = $firebaseArray(fireRef.child('rooms'));
//          
//          return {
//              all: rooms
//          };
//      };
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();