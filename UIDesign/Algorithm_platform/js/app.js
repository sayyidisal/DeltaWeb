//main module for algorithm platform
//last edited: 15.12.14
(function() {
	var app = angular.module('platform-record', []);

	//module nav
	app.directive('navBar', [function() {
		return {
			restrict: 'E',
			templateUrl: "nav.html",
			// controlerAs:"nav", 
			controller: ['$scope', function($scope) {
				//pass links throught json
				$scope.links = {
					home: "index.html",
					other: "other.html",
					login: "login.html",
				}
			}],
		};
	}])

	app.controller('RecordCtrl', ['$scope', function($scope) {
			$scope.variables = [{
				default: "2",
				type: 1,
				index: 1,
			}, {
				default: "3",
				type: 1,
				index: 2,
			}];
			$scope.insertVariable = function(defaultValue) {
				this.variables.push({
					default: defaultValue,
					type: 1,
					index: this.variables.length + 1
				})
			}
		}])
		//module footer
})()

//to be put into angular js

jQuery(document).ready(function($) {

	$('#record-insert').on('click', function() {
		replaceSelectionWithHtml("&nbsp;<span class='label label-default'>" + getSelectionHtml() + "</span>&nbsp;");
	});

	$('#record-detect').on('click', function() {
		v = $('#record-editor').text();
		for (var i = v.length - 1; i >= 0; i--) {
			if ((!isNaN(parseInt(v[i])) && isNaN(parseInt(v[i - 1])))) {
				v = v.slice(0, i) + "&nbsp<span contenteditable='false' class='label label-default'>" + v.slice(i);
			} else if ((isNaN(parseInt(v[i])) && !isNaN(parseInt(v[i - 1])))) {
				v = v.slice(0, i) + "</span>&nbsp" + v.slice(i);
			}
		};
		$('#record-editor').html(v);
		$('#set-variable').removeClass('hide');
	});

});


// utility functions

function getSelectionHtml() {
	var html = "";
	if (typeof window.getSelection != "undefined") {
		var sel = window.getSelection();
		if (sel.rangeCount) {
			var container = document.createElement("div");
			for (var i = 0, len = sel.rangeCount; i < len; ++i) {
				container.appendChild(sel.getRangeAt(i).cloneContents());
			}
			html = container.innerHTML;
		}
	} else if (typeof document.selection != "undefined") {
		if (document.selection.type == "Text") {
			html = document.selection.createRange().htmlText;
		}
	}
	return html
}

function replaceSelectionWithHtml(html) {
	var range, html;
	if (window.getSelection && window.getSelection().getRangeAt) {
		range = window.getSelection().getRangeAt(0);
		range.deleteContents();
		var div = document.createElement("div");
		div.innerHTML = html;
		var frag = document.createDocumentFragment(),
			child;
		while ((child = div.firstChild)) {
			frag.appendChild(child);
		}
		range.insertNode(frag);
	} else if (document.selection && document.selection.createRange) {
		range = document.selection.createRange();
		range.pasteHTML(html);
	}
}

function setSelectionRange(input, selectionStart, selectionEnd) {
	if (input.setSelectionRange) {
		input.focus();
		input.setSelectionRange(selectionStart, selectionEnd);
	} else if (input.createTextRange) {
		var range = input.createTextRange();
		range.collapse(true);
		range.moveEnd('character', selectionEnd);
		range.moveStart('character', selectionStart);
		range.select();
	} else if ('selectionStart' in this) {
		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
	}
}