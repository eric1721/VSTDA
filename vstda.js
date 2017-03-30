angular.module("app", []);
angular
    .module("app")
    .controller("TodoController", TodoController);


function TodoController() {
    var vm = this;
    vm.sortField = "name";
    vm.tasks = [];
    vm.priorities = [{
            type: 'High priority',
            number: 3
        },
        {
            type: 'Medium priority',
            number: 2
        },
        {
            type: 'Low Priority',
            number: 1
        }
    ];
    vm.create = function() {
        vm.tasks.push(vm.Input);
        vm.Input = '';

    }
}
