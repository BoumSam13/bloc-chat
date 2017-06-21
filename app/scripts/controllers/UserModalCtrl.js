(function() {
    function UserModalCtrl($cookies, $uibModalInstance) {
        this.setUsername = function() {
            if ((this.newUsername != undefined) && (this.newUsername !== ""))
            {
                $cookies.put('blocChatCurrentUser', this.newUsername);
                $uibModalInstance.close();
            }
        };
    }
    
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$cookies', '$uibModalInstance', UserModalCtrl]);
})();










