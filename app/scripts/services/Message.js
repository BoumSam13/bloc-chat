(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);  

    Message.all = messages;
      
    Message.getByRoomId = function(roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };
      
    Message.send = function(userName, newMessage, roomID) {
        var mDate = new Date();  
        messages.$add({
           username: userName,
           content: newMessage,
           sentAt: mDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
           roomId: roomID
        });
    };
      
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();