app.directive("dropdown", function($rootScope) {
 return {
   restrict: "E",
   templateUrl: "app/directives/juicebox-dropdown.html",
   scope: {
     placeholder: "@",
     list: "=",
     selected: "=",
     property: "@"
   },
   link: function(scope) {
    scope.listVisible = false;
    scope.isPlaceholder = true;

    scope.select = function(item) {
      scope.toggle();
      scope.isPlaceholder = false;
      scope.selected = item;
    };

    scope.isSelected = function(item) {
      return item[scope.property] === scope.selected[scope.property];
    };

    scope.toggle = function() {
      scope.listVisible = !scope.listVisible;
    };

    scope.$watch('selected', function() {
      scope.isPlaceholder = scope.selected[scope.property] === undefined;
      scope.display = scope.selected[scope.property];
    });

    $rootScope.$on("documentClicked", function(inner, target) {
      var parent = angular.element(target.parent()[0]);
      if (!parent.hasClass("clicked")) {
        scope.$apply(function () {
          scope.listVisible = false;
        });
      }
    });


  }
}
});
