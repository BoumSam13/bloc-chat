(function() {
    function ModalCtrl($scope, $uibModalInstance, Room) {
        $scope.rooms = Room;
        
        $scope.create = function() {
            $scope.rooms.rooms.$add({
                name: $scope.newRoomName
            });
            
            $uibModalInstance.close();
        };
        
        $scope.cancel = function() {
            $uibModalInstance.dismiss();
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl]);
})();