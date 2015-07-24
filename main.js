var app = angular.module('app', []);

app.controller('mainCtrl', ['$scope', function($scope){


	$scope.showHome = function() {
		$scope.showingFontSec = false;
		$scope.showingStrengthSec = false;
		$scope.showingLieSec = false;

		$scope.noFont = false;
		$scope.noStrength = false;
		$scope.noLies = false;
	}
	$scope.selectionMade = function() {
		if (
			$scope.noFont ||
			$scope.noStrength ||
			$scope.noLies
		) {
			return true;
		} else {
			return false;
		}
	}

	var fontAttrs = {
		1: 'fontOne',
		2: 'fontTwo',
		3: 'fontThree',
		4: 'fontFour',
		5: 'fontFive',
	}

	var currentAtt = 0;

	$scope.nextAttr = function(){
		currentAtt++;

		angular.forEach(fontAttrs, function(val, key){
			if (key <= currentAtt) {
				$scope[val] = true;
			} else {
				$scope[val] = false;
			}
		});
	}

	$scope.setFont = function() {
		$scope.showFont = !$scope.showFont;
	}

	$scope.showFontSection = function(){
		$scope.showingFontSec = true;
		$scope.showingStrengthSec = false;
		$scope.showingLieSec = false;

		$scope.noStrength = true;
		$scope.noLies = true;
	}

	$scope.showStrengthSection = function(){
		$scope.showingFontSec = false;
		$scope.showingStrengthSec = true;
		$scope.showingLieSec = false;

		$scope.noFont = true;
		$scope.noLies = true;
	}

	$scope.showLieSection = function(){
		$scope.showingFontSec = false;
		$scope.showingStrengthSec = false;
		$scope.showingLieSec = true;

		$scope.noFont = true;
		$scope.noStrength = true;
	}

}]);