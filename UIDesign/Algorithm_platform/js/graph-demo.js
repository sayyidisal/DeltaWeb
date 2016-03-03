(function() {

	var graphDataSet = {
		"statement_1": {
			"console": [],
			"current_content": "x = Dict.random(length=4, keyrange=['a','e','b','c','d'], valrange=range(1,20))",
			"current_line": 1,
			"vars": {
				"depth_1": [{
					"eleFlags": {
						"b": "3",
						"c": "3",
						"d": "3",
						"e": "3"
					},
					"index": [],
					"name": "x",
					"pointer": "None",
					"pointerIndex": [],
					"type": "Dict",
					"value": {
						"b": "3",
						"c": "4",
						"d": "8",
						"e": "3"
					},
					"varFlag": 1
				}]
			}
		},
		"statement_10": {
			"console": [],
			"current_content": "x = MaxPriorityQueue.random(length=5) #length should be less than 26",
			"current_line": 11,
			"vars": {
				"depth_1": [{
					"eleFlags": [
						"0",
						"0",
						"0",
						"0",
						"0"
					],
					"elements": [
						"'P:40'",
						"'J:32'",
						"'I:21'",
						"'X:28'",
						"'Y:19'"
					],
					"index": [],
					"isEmpty": "False",
					"length": "5",
					"name": "x",
					"pointer": "None",
					"pointerIndex": [],
					"top": "'P:40'",
					"type": "MaxPriorityQueue",
					"value": [
						"'P:40'",
						"'J:32'",
						"'I:21'",
						"'X:28'",
						"'Y:19'"
					],
					"varFlag": 2
				}]
			}
		},
		"statement_11": {
			"console": [],
			"current_content": "x = Tree.random(size=10, valrange=range(100)) #valrange should be integer array with unique numbers",
			"current_line": 13,
			"vars": {
				"depth_1": [{
					"childrenNo": "9",
					"eleFlags": "[0[0][0][0][0][0][0][0][0][0]]",
					"height": "2",
					"index": [],
					"name": "x",
					"pointer": "None",
					"pointerIndex": [],
					"size": "10",
					"type": "Tree",
					"value": "[42[25][76][31][85][82][26][28][99][32]]",
					"varFlag": 2
				}]
			}
		},
		"statement_12": {
			"console": [],
			"current_content": "x = BinarySearchTree.random(size=10, valrange=range(100)) #valrange should be integer array with unique numbers",
			"current_line": 14,
			"vars": {
				"depth_1": [{
					"childrenNo": "2",
					"eleFlags": "[0[0][0[0[0[None][0]][None]][0[0[None][0]][0]]]]",
					"height": "5",
					"index": [],
					"left": "[11]",
					"name": "x",
					"nodeFlag": "0",
					"parent": "None",
					"pointer": "None",
					"pointerIndex": [],
					"right": "[83[77[40[None][42]][None]][91[86[None][88]][99]]]",
					"size": "10",
					"type": "BinarySearchTree",
					"value": "[31[11][83[77[40[None][42]][None]][91[86[None][88]][99]]]]",
					"varFlag": 2
				}]
			}
		},
		"statement_13": {
			"console": [],
			"current_content": "x = AVLTree.random(size=10, valrange=range(100)) #valrange should be integer array with unique numbers",
			"current_line": 15,
			"vars": {
				"depth_1": [{
					"balanceFactor": "0",
					"childrenNo": "2",
					"eleFlags": "[0[0[0[0][None]][0]][0[0[0][None]][0[0][None]]]]",
					"height": "4",
					"index": [],
					"left": "[56[33[17][None]][66]]",
					"name": "x",
					"nodeFlag": "0",
					"parent": "None",
					"pointer": "None",
					"pointerIndex": [],
					"right": "[88[87[75][None]][97[91][None]]]",
					"size": "10",
					"type": "AVLTree",
					"value": "[69[56[33[17][None]][66]][88[87[75][None]][97[91][None]]]]",
					"varFlag": 2
				}]
			}
		},
		"statement_14": {
			"console": [],
			"current_content": "x = RBTree.random(size=10, valrange=range(100)) #valrange should be integer array with unique numbers",
			"current_line": 16,
			"vars": {
				"depth_1": [{
					"childrenNo": "2",
					"color": "[B[R[B[R][R]][B[R][None]]][B[R][R]]]",
					"eleFlags": "[0[0[0[0][0]][0[0][None]]][0[0][0]]]",
					"height": "4",
					"index": [],
					"left": "[49[15[13][39]][66[53][None]]]",
					"name": "x",
					"nodeColor": "B",
					"nodeFlag": "0",
					"parent": "None",
					"pointer": "None",
					"pointerIndex": [],
					"right": "[95[91][98]]",
					"size": "10",
					"type": "RBTree",
					"value": "[82[49[15[13][39]][66[53][None]]][95[91][98]]]",
					"varFlag": 2
				}]
			}
		},
		"statement_15": {
			"console": [],
			"current_content": "x = Graph.random(vexNo=8, edgeNo=10) #vexNo should be less than 26",
			"current_line": 18,
			"vars": {
				"depth_1": [{
					"E": [{
						"color": "black",
						"end": "T",
						"start": "J",
						"weight": "11"
					}, {
						"color": "black",
						"end": "G",
						"start": "T",
						"weight": "2"
					}, {
						"color": "black",
						"end": "Y",
						"start": "G",
						"weight": "9"
					}, {
						"color": "black",
						"end": "A",
						"start": "Y",
						"weight": "7"
					}, {
						"color": "black",
						"end": "L",
						"start": "A",
						"weight": "10"
					}, {
						"color": "black",
						"end": "B",
						"start": "L",
						"weight": "14"
					}, {
						"color": "black",
						"end": "M",
						"start": "B",
						"weight": "3"
					}, {
						"color": "black",
						"end": "M",
						"start": "L",
						"weight": "15"
					}, {
						"color": "black",
						"end": "L",
						"start": "G",
						"weight": "8"
					}, {
						"color": "black",
						"end": "T",
						"start": "M",
						"weight": "6"
					}],
					"V": [{
						"adjs": [
							"T"
						],
						"color": "gray",
						"value": "J"
					}, {
						"adjs": [
							"J",
							"G",
							"M"
						],
						"color": "gray",
						"value": "T"
					}, {
						"adjs": [
							"T",
							"Y",
							"L"
						],
						"color": "gray",
						"value": "G"
					}, {
						"adjs": [
							"G",
							"A"
						],
						"color": "gray",
						"value": "Y"
					}, {
						"adjs": [
							"Y",
							"L"
						],
						"color": "gray",
						"value": "A"
					}, {
						"adjs": [
							"A",
							"B",
							"M",
							"G"
						],
						"color": "gray",
						"value": "L"
					}, {
						"adjs": [
							"L",
							"M"
						],
						"color": "gray",
						"value": "B"
					}, {
						"adjs": [
							"B",
							"L",
							"T"
						],
						"color": "gray",
						"value": "M"
					}],
					"edge_count": "10",
					"edges": [{
						"color": "black",
						"end": "T",
						"start": "J",
						"weight": "11"
					}, {
						"color": "black",
						"end": "G",
						"start": "T",
						"weight": "2"
					}, {
						"color": "black",
						"end": "Y",
						"start": "G",
						"weight": "9"
					}, {
						"color": "black",
						"end": "A",
						"start": "Y",
						"weight": "7"
					}, {
						"color": "black",
						"end": "L",
						"start": "A",
						"weight": "10"
					}, {
						"color": "black",
						"end": "B",
						"start": "L",
						"weight": "14"
					}, {
						"color": "black",
						"end": "M",
						"start": "B",
						"weight": "3"
					}, {
						"color": "black",
						"end": "M",
						"start": "L",
						"weight": "15"
					}, {
						"color": "black",
						"end": "L",
						"start": "G",
						"weight": "8"
					}, {
						"color": "black",
						"end": "T",
						"start": "M",
						"weight": "6"
					}],
					"index": [],
					"name": "x",
					"pointer": "None",
					"pointerIndex": [],
					"type": "Graph",
					"value": "[['J', ['T']], ['T', ['J', 'G', 'M']], ['G', ['T', 'Y', 'L']], ['Y', ['G', 'A']], ['A', ['Y', 'L']], ['L', ['A', 'B', 'M', 'G']], ['B', ['L', 'M']], ['M', ['B', 'L', 'T']]]",
					"varFlag": 2,
					"vertex_count": "8",
					"vertices": [{
						"adjs": [
							"T"
						],
						"color": "gray",
						"value": "J"
					}, {
						"adjs": [
							"J",
							"G",
							"M"
						],
						"color": "gray",
						"value": "T"
					}, {
						"adjs": [
							"T",
							"Y",
							"L"
						],
						"color": "gray",
						"value": "G"
					}, {
						"adjs": [
							"G",
							"A"
						],
						"color": "gray",
						"value": "Y"
					}, {
						"adjs": [
							"Y",
							"L"
						],
						"color": "gray",
						"value": "A"
					}, {
						"adjs": [
							"A",
							"B",
							"M",
							"G"
						],
						"color": "gray",
						"value": "L"
					}, {
						"adjs": [
							"L",
							"M"
						],
						"color": "gray",
						"value": "B"
					}, {
						"adjs": [
							"B",
							"L",
							"T"
						],
						"color": "gray",
						"value": "M"
					}]
				}]
			}
		},
		"statement_16": {
			"console": [],
			"current_content": "x = DiGraph.random(vexNo=8, edgeNo=14) #vexNo should be less than 26",
			"current_line": 19,
			"vars": {
				"depth_1": [{
					"E": [{
						"color": "black",
						"end": "Y",
						"start": "K",
						"weight": "10"
					}, {
						"color": "black",
						"end": "N",
						"start": "Y",
						"weight": "10"
					}, {
						"color": "black",
						"end": "B",
						"start": "N",
						"weight": "9"
					}, {
						"color": "black",
						"end": "H",
						"start": "B",
						"weight": "5"
					}, {
						"color": "black",
						"end": "C",
						"start": "H",
						"weight": "12"
					}, {
						"color": "black",
						"end": "M",
						"start": "C",
						"weight": "13"
					}, {
						"color": "black",
						"end": "I",
						"start": "M",
						"weight": "6"
					}, {
						"color": "black",
						"end": "H",
						"start": "M",
						"weight": "4"
					}, {
						"color": "black",
						"end": "Y",
						"start": "H",
						"weight": "10"
					}, {
						"color": "black",
						"end": "I",
						"start": "B",
						"weight": "7"
					}, {
						"color": "black",
						"end": "M",
						"start": "H",
						"weight": "14"
					}, {
						"color": "black",
						"end": "Y",
						"start": "M",
						"weight": "5"
					}, {
						"color": "black",
						"end": "K",
						"start": "C",
						"weight": "8"
					}, {
						"color": "black",
						"end": "C",
						"start": "I",
						"weight": "5"
					}],
					"V": [{
						"adjs": [
							"Y"
						],
						"color": "gray",
						"value": "K"
					}, {
						"adjs": [
							"N"
						],
						"color": "gray",
						"value": "Y"
					}, {
						"adjs": [
							"B"
						],
						"color": "gray",
						"value": "N"
					}, {
						"adjs": [
							"H",
							"I"
						],
						"color": "gray",
						"value": "B"
					}, {
						"adjs": [
							"C",
							"Y",
							"M"
						],
						"color": "gray",
						"value": "H"
					}, {
						"adjs": [
							"M",
							"K"
						],
						"color": "gray",
						"value": "C"
					}, {
						"adjs": [
							"I",
							"H",
							"Y"
						],
						"color": "gray",
						"value": "M"
					}, {
						"adjs": [
							"C"
						],
						"color": "gray",
						"value": "I"
					}],
					"edge_count": "14",
					"edges": [{
						"color": "black",
						"end": "Y",
						"start": "K",
						"weight": "10"
					}, {
						"color": "black",
						"end": "N",
						"start": "Y",
						"weight": "10"
					}, {
						"color": "black",
						"end": "B",
						"start": "N",
						"weight": "9"
					}, {
						"color": "black",
						"end": "H",
						"start": "B",
						"weight": "5"
					}, {
						"color": "black",
						"end": "C",
						"start": "H",
						"weight": "12"
					}, {
						"color": "black",
						"end": "M",
						"start": "C",
						"weight": "13"
					}, {
						"color": "black",
						"end": "I",
						"start": "M",
						"weight": "6"
					}, {
						"color": "black",
						"end": "H",
						"start": "M",
						"weight": "4"
					}, {
						"color": "black",
						"end": "Y",
						"start": "H",
						"weight": "10"
					}, {
						"color": "black",
						"end": "I",
						"start": "B",
						"weight": "7"
					}, {
						"color": "black",
						"end": "M",
						"start": "H",
						"weight": "14"
					}, {
						"color": "black",
						"end": "Y",
						"start": "M",
						"weight": "5"
					}, {
						"color": "black",
						"end": "K",
						"start": "C",
						"weight": "8"
					}, {
						"color": "black",
						"end": "C",
						"start": "I",
						"weight": "5"
					}],
					"index": [],
					"name": "x",
					"pointer": "None",
					"pointerIndex": [],
					"type": "DiGraph",
					"value": "[['K', ['Y']], ['Y', ['N']], ['N', ['B']], ['B', ['H', 'I']], ['H', ['C', 'Y', 'M']], ['C', ['M', 'K']], ['M', ['I', 'H', 'Y']], ['I', ['C']]]",
					"varFlag": 2,
					"vertex_count": "8",
					"vertices": [{
						"adjs": [
							"Y"
						],
						"color": "gray",
						"value": "K"
					}, {
						"adjs": [
							"N"
						],
						"color": "gray",
						"value": "Y"
					}, {
						"adjs": [
							"B"
						],
						"color": "gray",
						"value": "N"
					}, {
						"adjs": [
							"H",
							"I"
						],
						"color": "gray",
						"value": "B"
					}, {
						"adjs": [
							"C",
							"Y",
							"M"
						],
						"color": "gray",
						"value": "H"
					}, {
						"adjs": [
							"M",
							"K"
						],
						"color": "gray",
						"value": "C"
					}, {
						"adjs": [
							"I",
							"H",
							"Y"
						],
						"color": "gray",
						"value": "M"
					}, {
						"adjs": [
							"C"
						],
						"color": "gray",
						"value": "I"
					}]
				}]
			}
		},
		"statement_17": {
			"console": [],
			"current_content": "x = StringMatrix.random()",
			"current_line": 21,
			"vars": {
				"depth_1": [{
					"edges": [],
					"eleFlags": [
						[
							"0",
							"0",
							"0",
							"0",
							"0",
							"0"
						],
						[
							"0",
							"0",
							"0",
							"0",
							"0",
							"0"
						],
						[
							"0",
							"0",
							"0",
							"0",
							"0",
							"0"
						],
						[
							"0",
							"0",
							"0",
							"0",
							"0",
							"0"
						],
						[
							"0",
							"0",
							"0",
							"0",
							"0",
							"0"
						],
						[
							"0",
							"0",
							"0",
							"0",
							"0",
							"0"
						]
					],
					"index": [],
					"leftheader": [],
					"name": "x",
					"ncols": "6",
					"nrows": "6",
					"pointer": "None",
					"pointerIndex": [],
					"topheader": [],
					"type": "StringMatrix",
					"value": [
						[
							"27",
							"19",
							"35",
							"95",
							"20",
							"23"
						],
						[
							"93",
							"21",
							"25",
							"70",
							"12",
							"10"
						],
						[
							"63",
							"53",
							"60",
							"46",
							"27",
							"80"
						],
						[
							"46",
							"48",
							"19",
							"86",
							"34",
							"85"
						],
						[
							"10",
							"1",
							"12",
							"25",
							"23",
							"63"
						],
						[
							"82",
							"59",
							"37",
							"94",
							"51",
							"55"
						]
					],
					"varFlag": 2
				}]
			}
		},
		"statement_2": {
			"console": [],
			"current_content": "x = DisjointSet.random(size=9) #size should be less than 26",
			"current_line": 2,
			"vars": {
				"depth_1": [{
					"eleFlags": {
						"A": "2",
						"G": "2",
						"K": "1",
						"M": "2",
						"O": "1",
						"P": "2",
						"Q": "2",
						"U": "2",
						"W": "2"
					},
					"index": [],
					"name": "x",
					"pointer": "None",
					"pointerIndex": [],
					"type": "DisjointSet",
					"value": {
						"A": "O",
						"G": "O",
						"K": "K",
						"M": "O",
						"O": "O",
						"P": "K",
						"Q": "O",
						"U": "K",
						"W": "K"
					},
					"varFlag": 2
				}]
			}
		},
		"statement_3": {
			"console": [],
			"current_content": "x = Array.random(length=4, valrange=range(100))",
			"current_line": 4,
			"vars": {
				"depth_1": [{
					"eleFlags": [
						"0",
						"0",
						"0",
						"0"
					],
					"index": [],
					"isEmpty": "False",
					"length": "4",
					"name": "x",
					"pointer": "None",
					"pointerIndex": [],
					"type": "Array",
					"value": [
						"47",
						"89",
						"16",
						"83"
					],
					"varFlag": 2
				}]
			}
		},
		"statement_4": {
			"console": [],
			"current_content": "x = Stack.random(length=4, valrange=range(100))",
			"current_line": 5,
			"vars": {
				"depth_1": [{
					"eleFlags": [
						"0",
						"0",
						"0",
						"0"
					],
					"index": [],
					"isEmpty": "False",
					"length": "4",
					"name": "x",
					"pointer": "None",
					"pointerIndex": [],
					"top": "34",
					"type": "Stack",
					"value": [
						"15",
						"46",
						"58",
						"34"
					],
					"varFlag": 2
				}]
			}
		},
		"statement_5": {
			"console": [],
			"current_content": "x = Queue.random(length=4, valrange=range(100))",
			"current_line": 6,
			"vars": {
				"depth_1": [{
					"eleFlags": [
						"0",
						"0",
						"0",
						"0"
					],
					"index": [],
					"isEmpty": "False",
					"length": "4",
					"name": "x",
					"pointer": "None",
					"pointerIndex": [],
					"type": "Queue",
					"value": [
						"91",
						"12",
						"81",
						"56"
					],
					"varFlag": 2
				}]
			}
		},
		"statement_6": {
			"console": [],
			"current_content": "x = LinkedList.random(length=4, valrange=range(100))",
			"current_line": 7,
			"vars": {
				"depth_1": [{
					"eleFlags": [
						"1",
						"1",
						"1",
						"1"
					],
					"head": "37",
					"index": [],
					"isEmpty": "False",
					"length": "4",
					"name": "x",
					"pointer": "None",
					"pointerIndex": [],
					"type": "LinkedList",
					"value": [
						"37",
						"72",
						"91",
						"17"
					],
					"varFlag": 2
				}]
			}
		},
		"statement_7": {
			"console": [],
			"current_content": "x = BinaryMinHeap.random(length=5, valrange=range(10)) #valrange should be integer array with unique numbers",
			"current_line": 8,
			"vars": {
				"depth_1": [{
					"eleFlags": [
						"0",
						"0",
						"0",
						"0",
						"0"
					],
					"elements": [
						"1",
						"3",
						"2",
						"9",
						"7"
					],
					"index": [],
					"isEmpty": "False",
					"length": "5",
					"name": "x",
					"pointer": "None",
					"pointerIndex": [],
					"top": "1",
					"type": "BinaryMinHeap",
					"value": [
						"1",
						"3",
						"2",
						"9",
						"7"
					],
					"varFlag": 2
				}]
			}
		},
		"statement_8": {
			"console": [],
			"current_content": "x = BinaryMaxHeap.random(length=5, valrange=range(10)) #valrange should be integer array with unique numbers",
			"current_line": 9,
			"vars": {
				"depth_1": [{
					"eleFlags": [
						"0",
						"0",
						"0",
						"0",
						"0"
					],
					"elements": [
						"7",
						"5",
						"6",
						"0",
						"4"
					],
					"index": [],
					"isEmpty": "False",
					"length": "5",
					"name": "x",
					"pointer": "None",
					"pointerIndex": [],
					"top": "7",
					"type": "BinaryMaxHeap",
					"value": [
						"7",
						"5",
						"6",
						"0",
						"4"
					],
					"varFlag": 2
				}]
			}
		},
		"statement_9": {
			"console": [],
			"current_content": "x = MinPriorityQueue.random(length=5) #length should be less than 26",
			"current_line": 10,
			"vars": {
				"depth_1": [{
					"eleFlags": [
						"0",
						"0",
						"0",
						"0",
						"0"
					],
					"elements": [
						"'Z:13'",
						"'B:32'",
						"'I:49'",
						"'J:41'",
						"'O:40'"
					],
					"index": [],
					"isEmpty": "False",
					"length": "5",
					"name": "x",
					"pointer": "None",
					"pointerIndex": [],
					"top": "'Z:13'",
					"type": "MinPriorityQueue",
					"value": [
						"'Z:13'",
						"'B:32'",
						"'I:49'",
						"'J:41'",
						"'O:40'"
					],
					"varFlag": 2
				}]
			}
		}
	}

	angular.module('platform-question', [])

	.directive('navBar', [function() {
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


	.controller('QuestionCtrl', ['$http', '$scope', function($http, $scope) {
		// get initial question data
		// $scope.question={};
		// $http.get('/question.json').success(function(data) {
		// 	$scope.question=data; //data to be a list of questions
		// 	$scope.$apply();
		// })
		questionData = {
			hasLogin: true,
			title: "Nest Thermostat temperature not getting updated",
			BODY: "What is the result of dequeue for <graph>\"[123, 10, 32, 32, 32, 32, 34, 115, 116, 97, 116, 101, 109, 101, 110, 116, 95, 49, 34, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 99, 111, 110, 115, 111, 108, 101, 34, 58, 32, 91, 93, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 99, 117, 114, 114, 101, 110, 116, 95, 99, 111, 110, 116, 101, 110, 116, 34, 58, 32, 34, 120, 32, 61, 32, 81, 117, 101, 117, 101, 46, 114, 97, 110, 100, 111, 109, 40, 108, 101, 110, 103, 116, 104, 61, 52, 44, 32, 118, 97, 108, 114, 97, 110, 103, 101, 61, 114, 97, 110, 103, 101, 40, 49, 48, 48, 41, 41, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 99, 117, 114, 114, 101, 110, 116, 95, 108, 105, 110, 101, 34, 58, 32, 49, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 118, 97, 114, 115, 34, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 100, 101, 112, 116, 104, 95, 49, 34, 58, 32, 91, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 101, 108, 101, 70, 108, 97, 103, 115, 34, 58, 32, 91, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 48, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 48, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 48, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 48, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 93, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 105, 110, 100, 101, 120, 34, 58, 32, 91, 93, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 105, 115, 69, 109, 112, 116, 121, 34, 58, 32, 34, 70, 97, 108, 115, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 101, 110, 103, 116, 104, 34, 58, 32, 34, 52, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 110, 97, 109, 101, 34, 58, 32, 34, 120, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 112, 111, 105, 110, 116, 101, 114, 34, 58, 32, 34, 78, 111, 110, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 112, 111, 105, 110, 116, 101, 114, 73, 110, 100, 101, 120, 34, 58, 32, 91, 93, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 116, 121, 112, 101, 34, 58, 32, 34, 65, 114, 114, 97, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 118, 97, 108, 117, 101, 34, 58, 32, 91, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 54, 52, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 52, 56, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 52, 56, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 54, 53, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 93, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 118, 97, 114, 70, 108, 97, 103, 34, 58, 32, 49, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 93, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 125, 10]\"</graph>?",
			hasCode: true,
			code: "from django.db import models \n \
						class Poll(models.Model): question = models.CharField(max_length = 200) \n \
						pub_date = models.DateTimeField('date published') \n \
						class Choice(models.Model): poll = models.ForeignKey(Poll) \n \
						choice_text = models.CharField(max_length = 200) \n \
						votes = models.IntegerField( \n \
							default = 0) \n \
						# ndsaklsdhaslk \n \
						class FreshJuice { \n \
							enum FreshJuiceSize { \n \
								SIZE, MEDIUM, LARGE \n \
							} \n \
							FreshJuiceSize size; \n \
						} \n \
					}",
			ANSWER: "The day-to-day working JSAV repository is located at GitHub. For new developers who want to use the Github working version of JSAV: \n \
					Install Git\n\
					Check out the JSAV repository.For example, at the commandline you can do the following to create a new JSAV folder or directory: git clone git: //github.com/vkaravir/JSAV.git JSAV (Note that this is a read-only URL. If you are joining the developer team, and you are not sufficiently familiar with Git to know what to do to set things up right to be able to push changes, talk to us about it.)\n \
							Go to the JSAV folder or directory that you just created and run: make This will \"compile\"\
						the\n \
						pieces together\n \
					for you.At this point, you are ready to\n \
					try out the examples or invoke your copy of JSAV in your own development projects.\n \
					For SVN users new to git: \n \
						To \"checkout\" a new copy of the library, use \"git clone\".\n \
					To \"update\" your copy of the repository, use \"git pull\".",
			tags: ["Python", "Array"],
			download_link: "http://google.com",
		};

		var graphData = reformat(questionData);
		questionData.content = graphData["BODY"];
		$scope.question = questionData;
		var graph = new vizJSAV("av", graphDataSet);
		graph.animate(1);
		graph.animate(2);
		graph.animate(3);
		graph.animate(4);
		graph.animate(5);
		graph.animate(6);
		graph.animate(7);
		graph.animate(8);
		graph.animate(9);
		graph.animate(10);
		graph.animate(11);
		graph.animate(12);
		graph.animate(13);
		graph.animate(14);
		graph.animate(15);
		graph.animate(16);
		graph.animate(17);

		$scope.showAnswer = false;
		$scope.toShow = function() {
			$scope.showAnswer = !$scope.showAnswer;
		}

	}]);

})()

jQuery(document).ready(function($) {
	prettyPrint();
});

function bin2String(array) {
	return String.fromCharCode.apply(String, array);
}

function reformat(data) {
	var res = {};
	res.ANSWER = data.ANSWER;
	var body = data.BODY;

	var startIndex = body.indexOf("<graph>");

	var endIndex = body.indexOf("</graph>");

	if ((startIndex > -1) && (endIndex > -1)) {
		var graph = JSON.parse(body.substring(startIndex + 8, endIndex - 1));
		var new_body = body.substring(0, startIndex) + body.substring(endIndex + 8);

		res.GRAPH = JSON.parse(bin2String(graph));
		res.BODY = new_body;
	}

	return res;
}