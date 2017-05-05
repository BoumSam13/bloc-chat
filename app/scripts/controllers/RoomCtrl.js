(function() {
    function RoomCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        
        this.open = function() {
            $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
            })
        };
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();