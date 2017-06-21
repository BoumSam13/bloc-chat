(function() {
    function RoomCtrl(Room, Message, $uibModal, $cookies) {
        this.rooms = Room.all;
        this.currentRoom = null;
        this.messages = null;
        this.newMessage = null;
        this.userName = null;
        this.roomID = null;
        
        this.open = function() {
            $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
            })
        };
        
        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        };
        
        this.sendMessage = function() {   
            this.userName = $cookies.get('blocChatCurrentUser');
            this.newMessage = this.newMessage;
            this.roomID = this.currentRoom.$id;
            Message.send(this.userName, this.newMessage, this.roomID);
        };
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', '$uibModal', '$cookies', RoomCtrl]);
})();