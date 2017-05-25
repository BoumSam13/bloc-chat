(function() {
    function UserModalCtrl($cookies, $uibModalInstance) {
        this.setUsername = function() {
            if ((this.newUsername != undefined) && (this.newUsername !== ""))
            {
                $cookies.blocChatCurrentUser = this.newUsername;
                $uibModalInstance.close();
            }
        };
    }
    
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$cookies', '$uibModalInstance', UserModalCtrl]);
})();










