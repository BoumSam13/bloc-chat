(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        this.rooms = Room;
        
        this.create = function (name) {
            this.rooms.rooms.$add({
                name: this.newRoomName   
            });
            $uibModalInstance.close();
        };
        
        this.cancel = function() {
            $uibModalInstance.dismiss();
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();