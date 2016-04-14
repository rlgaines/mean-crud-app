app.controller('addStudentController', ['$scope', 'studentDataService', function($scope, studentDataService){
	$scope.student = {};

	studentDataService.getAllStudents()
	.then(function (student) {
		$scopeAllStudents = student.data.data;
	})

	$scope.addStudent = function() {
		studentDataService.addStudent($scope.student);
		$scope.student = {};
	}

}])