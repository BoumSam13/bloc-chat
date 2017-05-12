(function() {
    function RoomCtrl(Room, Message, $uibModal) {
        this.rooms = Room.all;
        this.currentRoom = null;
        this.messages = null;
        
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
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', '$uibModal', RoomCtrl]);
})();