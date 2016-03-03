//replace ' by " and JSON.parse()
//Never change the variable object itself!!!, Use deepcopy everytime the program needs to change the content

var jsonContent = {};
var glbFlags = {"u" :0, "n": 1, "c": 2};

//using highlight will not be overwritten by later css, so we do not use highlight
var indexColor = "rgb(255, 163, 163)",
    nColor = "rgb(217, 255, 178)",
    cColor = "rgb(255, 255, 162)",
    bColor = "red",
    edgeColor = "rgb(255, 102, 255)",
    matrixHeaderColor = "rgb(152,152,152)",
    uColor = "white";

var graphColor = {
    "RED": "rgb(217, 137, 137)",
    "BLUE": "rgb(138, 138, 230)",
    "GRAY": "rgb(204, 204, 204)",
    "WHITE": "rgb(255, 255, 255)",
    "YELLOW": "rgb(255, 255, 153)",
    "GREEN": "rgb(162, 243, 162)",
    "BLACK": "rgb(0, 0, 0)"
};

var DATATYPES = ["Dict", "DisjointSet", "Array", "Stack", "Queue", "LinkedList", "BinaryMinHeap", "BinaryMaxHeap", "MinPriorityQueue", "MaxPriorityQueue", "Tree",
        "BinarySearchTree", "AVLTree", "RBTree", "Graph", "DiGraph", "StringMatrix",
        "int", "str", "bool", "float", "NoneType"];

var av;
var current_content, current_line, currentStat; //statement_XX
var container; //container is the most outer div that contains all the layers
var divDepthList = [];//div element of each layer
var avDepthDict = {}; //depth_1 : av1 ....

/***************************************Function definition********************************************/

//init vizJSAV object here.
function vizJSAV(divID, jsonObj){
    jsonContent = jsonObj;
    container = $("#"+divID);
    av = new JSAV(document.getElementById(divID));   
}


//this is the main function, animation starts here
vizJSAV.prototype.animate = function(statementNo){
    var statementLabel ="statement_"+statementNo;
    currentStat = statementLabel;
    current_content = jsonContent[statementLabel]["current_content"];
    current_line = jsonContent[statementLabel]["current_line"];

    if (!(statementLabel in jsonContent)){
        return;// out of statement range
    }
    
    var depthList = jsonContent[statementLabel]["vars"];

    //create or hide layer
    var layerCount = Object.keys(depthList).length;

    //add layer
    for (var i = 0; i < layerCount; i++) {
        var layer = $("<div id='layer"+(i+1)+"' class='graphlayer'><span>Data structures: </span></div>");
        container.append(layer);
        var avObj = new JSAV(layer);

        avDepthDict["depth_" + (i + 1)] = avObj;
        divDepthList[i] = layer;

    }

    //reset the width of layer div
    var containerWidth = container.width()
        padding = 10, //padding-left:30, padding-right: 30, otherwise pointer may be out of border
        singleLayerWidth = (containerWidth-(2*padding*layerCount))/layerCount;
    $(".graphlayer").css("width", singleLayerWidth);
    $(".graphlayer").css("padding-left", padding);
    $(".graphlayer").css("padding-right", padding);

    
    
    //start plotting the new variables
    for (var depth in depthList){
        var variableList = depthList[depth];
        for (var j=0; j<variableList.length; j++){
             var variable = variableList[j];
             if (variable != null){
                var varName = variable.name;
                av = avDepthDict[depth];

                this.plotVar(variable, depth);
             }
         }
    }
};

/***************************************Plot one variable********************************************/
vizJSAV.prototype.plotVar = function(variable, depth){

    //varFlags could be null or 1 or 2
    var varType = variable.type,
        varName = variable.name,
        varValue = variable.value,
        avVar,
        avLabel;

    //If type is None, ignore. (None is not NoneType)
    switch (varType){
        case "int": case "str": case "bool":case "float":case "NoneType":
            var statusStr = varType + "(" + varName.trim() +"): " + varValue;
            avVar = av.code(statusStr, {lineNumbers: false});
            avVar.addClass("primitive");
            break;

        case "Dict":
            avLabel = av.label(variable.name);
            avVar = this.parseDict(variable);
            avVar.addClass("Dict"); 
            break;

        case "DisjointSet":
            avLabel = av.label(variable.name);
            avVar = this.parseDisjointSet(variable);
            avVar.addClass("DisjointSet");
            break;

        case "Array":
            avLabel = av.label(variable.name);
            avVar= this.parseList(variable, {});
            avVar.addClass("Array");
            break;

        case "Stack":
            avLabel = av.label(variable.name);
            avVar = this.parseList(variable, {layout: "vertical", indexed: true});
            avVar.addClass("Stack");
            break;

        case "Queue":
            avLabel = av.label(variable.name);
            avVar= this.parseList(variable, {indexed: true});
            avVar.addClass("Queue");
            break;

        case "LinkedList":
            avLabel = av.label(variable.name);
            avVar= this.parseLinkedList(variable);
            avVar.addClass("LinkedList");
            break;

        case "BinaryMinHeap": case "BinaryMaxHeap":
            avLabel = av.label(variable.name);
            avVar = this.parseHeap(variable);
            avVar.addClass("BinaryHeap");
            break;


        case "MinPriorityQueue": case "MaxPriorityQueue":
            avLabel = av.label(variable.name);
            avVar = this.parseHeap(variable);
            avVar.addClass("PriorityQueue");
            break;
      
        case "Tree":
            avLabel = av.label(variable.name);
            avVar = this.parseTree(variable);
            avVar.addClass("Tree");
            break;
      
        case "BinarySearchTree":
            avLabel = av.label(variable.name);
            avVar = this.parseBTree(variable, "BinarySearchTree");
            avVar.addClass("BinarySearchTree");
            break;            

        case "AVLTree":
            avLabel = av.label(variable.name);
            avVar = this.parseBTree(variable, "AVLTree");
            avVar.addClass("AVLTree");
            break;

        case "RBTree":
            avLabel = av.label(variable.name);
            avVar = this.parseBTree(variable, "RBTree");
            avVar.addClass("RBTree");
            break;

        case "Graph":
            avLabel = av.label(variable.name);
            avVar = this.parseGraph(variable, {layout: "layered"});
            avVar.addClass("Graph");
            break;

        case "DiGraph":
            avLabel = av.label(variable.name);
            avVar = this.parseGraph(variable, {directed: true, layout: "layered"});
            avVar.addClass("DiGraph");
            break;
   
        case "Matrix":
            avLabel = av.label(variable.name);
            avVar= this.parseMatrix(variable);
            avVar.addClass("Matrix");
            break;
        case "StringMatrix":
            avLabel = av.label(variable.name);
            avVar= this.parseStringMatrix(variable);
            avVar.addClass("StringMatrix");
            break;
        
        case "None":
            break;
        default:
            break;
    }
};

vizJSAV.prototype.parseDict=function(variable){
    var valDict=variable.value;

    var nCols = valDict.length;
    var nRows = 2;

    var matrix = new Array();
    var firstRow = new Array("Key");
    var secondRow = new Array("Val");
    var count = 1;
    for(var key in valDict){
        firstRow.push(key);
        secondRow.push(valDict[key]);
    }

    matrix.push(firstRow);
    matrix.push(secondRow);

    var avVar = av.ds.matrix(matrix);
    avVar.mouseenter(avVar.highlight).mouseleave(avVar.unhighlight);

    return avVar;
};

vizJSAV.prototype.parseDisjointSet=function(variable){

    var tree = av.ds.tree();
    var valDict = variable.value,
        nodeDict = {};

    //First add a invisible root node
    var root = tree.root();
    root.hide({"recursive": false});

    for (var key in valDict){
        var value = valDict[key];
        if (!(key in nodeDict)){
            var newNode = tree.newNode(key);
            nodeDict[key] = newNode;
        }
        if (!(value in nodeDict)){
            var newNode = tree.newNode(value);
            nodeDict[value] = newNode;
        }

        if (key == value){ // independent set
            root.addChild(nodeDict[key]);
            //hide the edge to root
            nodeDict[key].edgeToParent().hide();
        }else{
            nodeDict[value].addChild(nodeDict[key]);
        }
    }
    tree.layout();
    tree.mouseenter(function() {
        this.highlight(); 
    }).mouseleave(function() { 
        this.unhighlight(); 
    });
    return tree;
};

vizJSAV.prototype.parseList=function(variable, options) {
    var valueList = variable.value;

    var avVar = av.ds.array(valueList, options);//TODO: to support multi-dimensional array, split based on brackets stack is needed.Changes on compiler flags array is also required.
    avVar.mouseenter(avVar.highlight).mouseleave(avVar.unhighlight);
    return avVar;
};

vizJSAV.prototype.parseLinkedList=function(variable){
    var valList = variable.value,
        varName = variable.name;

    var avVar = av.ds.list();

    for (var i=0; i<valList.length; i++){
        avVar.addLast(valList[i]);
    }

    avVar.layout();
    avVar.mouseenter(function() {
        this.highlight(); 
    }).mouseleave(function() { 
        this.unhighlight(); 
    });

    return avVar;
};

//complete binary tree
vizJSAV.prototype.parseHeap=function(variable){
    var tree = av.ds.binarytree();
    var valArr = variable.value,
        nodeList = [];

    for (var i=0; i<valArr.length; i++){
        var newNode = tree.newNode(valArr[i]);
        nodeList.push(newNode);

        if (i == 0){
            tree.root(newNode);
        }else{
            var parentIndex = parseInt((i-1)/2);
            if (i%2 == 0){//right node
                nodeList[parentIndex].right(newNode);
            }else{//left node
                nodeList[parentIndex].left(newNode);
            }
        }
    }

    tree.mouseenter(function() {
        this.highlight(); 
    }).mouseleave(function() { 
        this.unhighlight(); 
    });

    tree.layout();
    return tree;
};

//Tree
vizJSAV.prototype.parseTree=function(variable){
    var tree = av.ds.tree();
    var varValue = variable.value;

    var optStack = [];
    var nodeStack = [];

    //[42[25][76][31][85][82][26][28][99][32]]
    for (var i=0; i<varValue.length;i++){

        switch(varValue[i]){
            case '[':
                optStack.push('[')
                //search until next [ or ]
                i++;
                var token = ""
                while(varValue[i]!='[' && varValue[i]!=']' && i<varValue.length){
                   token=token+varValue[i];
                   i=i+1;
                }
                i--;
                var newNode = tree.newNode(token.trim());
                nodeStack.push(newNode)
                break;
            case ']':
                optStack.pop();
                var node = nodeStack.pop();
                if (nodeStack.length == 0){
                    tree.root(node);
                } else {
                    var parentNode = nodeStack[nodeStack.length-1];
                    parentNode.addChild(node);
                }
            default:
                break;

        };

    }

    tree.mouseenter(function() {
        this.highlight(); 
    }).mouseleave(function() { 
        this.unhighlight(); 
    });

    tree.layout();
    return tree;

};

vizJSAV.prototype.parseBTree=function(variable, treeType){
    var tree = av.ds.binarytree();
    var varValue = variable.value,
        rbValue = variable.color;
        
    var rbArr;
    if (treeType == "RBTree"){
        rbArr = rbValue.replace(/\[/g," ").replace(/\]/g," ").match(/\S+/g); //split by space
    }

    var optStack = [];
    var nodeStack = [];
    var token = "";
    var node;
    var str = varValue;
    var tempLast;
    var nodeCount = 0;
    for (var i=0; i<str.length;i++){
        switch(str[i]){
            //[9[8][10]]
            case '[':
                optStack.push(str[i]);
                //alert("new node start!");
                break;
            case ']':
                //alert("a node closed!");
                optStack.pop();
                if (optStack.length==0){
                    node=nodeStack.pop();
                    tree.root(node);
                    //alert(node.value());
                }else{
                    node=nodeStack.pop();
                    if (node == null){
                        continue;
                    }
                    //alert(node.value());
                    tempLast=nodeStack.length-1;

                    if (parseInt(node.value())<parseInt(nodeStack[tempLast].value())){ //without parseint 10 < 9
                        nodeStack[tempLast].left(node);
                    }else{
                        nodeStack[tempLast].right(node);
                    }
                }
                break;
            default:
                while(str[i]!='[' && str[i]!=']' && i<str.length){
                   token=token+str[i];
                   i=i+1;
                }
                token = token.trim().replace(/\'/g, "").replace(/\"/g, "");
                if (token!="None"){
                    node = tree.newNode(token);
                    if (treeType == "RBTree"){
                        if (rbArr[nodeCount] == "R"){
                            node.css({"background-color": graphColor["RED"]});
                        }else if(rbArr[nodeCount] == "B"){
                            node.css({"color":"white","background-color": "BLACK"});
                        }
                    }

                    nodeStack.push(node);
                    //alert(node.value()+" is created!");
                }else{
                    nodeStack.push(null);
                }
                nodeCount++;
                token="";//reset token
                i=i-1;//reset i
                break;
        }
    }
    tree.layout();
    return tree;
};

vizJSAV.prototype.parseGraph=function(variable, options){
    var vertexList = variable.V,
        edgeList = variable.E;

    var graph = av.ds.graph(options);

    //Add nodes to graph
    var vertexDict = {};
    for(var i=0; i<vertexList.length; i++){
        var vertex = vertexList[i].value,
            color = vertexList[i].color.toUpperCase();
        var node = graph.addNode(vertex);
        node.css({"background-color": graphColor[color]});//change color depth, if not find in the dictionary, default is white
        vertexDict[vertex] = node;
    }

    //Add edges to graph
    for (var i=0; i<edgeList.length; i++){
        var start = edgeList[i].start,
            end = edgeList[i].end,
            color = edgeList[i].color,
            weight = edgeList[i].weight;
        graph.addEdge(vertexDict[start], vertexDict[end], {"weight": weight, "stroke": color});
    }

    graph.layout();
    return graph;
};

vizJSAV.prototype.parseMatrix = function(variable){
    //no flags for matrix
    var matrixName = variable.name,
        matrixArr =variable.value;

    var avVar = av.ds.matrix(matrixArr, {style: "matrix"});
    avVar.layout();
    return avVar;
};

vizJSAV.prototype.parseStringMatrix=function(variable){
    var matrixArr = variable.value,
        edgesArr = variable.edges,
        topheaderObj = $.extend(true, {}, variable.topheader),
        leftheaderObj = $.extend(true, {}, variable.leftheader);

    //deepcopy topHeader
    var topheader = $.map(topheaderObj, function(value, index) {
        return [value];
    });

    //deepcopy leftHeader
    var leftheader = $.map(leftheaderObj, function(value, index) {
        return [value];
    });


    var hasHeader = (topheader.length != 0 || leftheader.length != 0); //topheader changed below, this will cause topheader != [] true here.

    //var newMatrixArr = matrixArr;//matrix array with headers, need to use deepcopy here, otherwise it will change the variable value
    var newMatrixObj = $.extend(true, {}, matrixArr);//deep copy returns a dict object, need to convert to array
    var newMatrixArr = $.map(newMatrixObj, function(value, index) {
        return [value];
    });

    if (hasHeader){
        //unshift or splice, both are ok

        ////if topheader length != cols, append empty strings to it
        //for (var i=topheader.length; i<newMatrixArr[0].length; i++){
        //    topheader[i] = "";
        //}
        //newMatrixArr.unshift(topheader);//add to the front
        ////add left header line by line
        //newMatrixArr[0].unshift("");//top-left corner should be empty
        //
        //for (var i=1; i<newMatrixArr.length; i++){
        //    newMatrixArr[i].unshift(leftheader[i-1]); //if leftheader[i-1] is undefined, the program will simply leave that cell blank
        //}

        //if topheader length != cols, add empty strings to the front
        for (var i=topheader.length; i<newMatrixArr[0].length; i++){
            topheader.splice(0,0, "");
        }
        for (var i=leftheader.length; i<newMatrixArr.length; i++){
            leftheader.splice(0,0, "");
        }
        newMatrixArr.splice(0,0,topheader);//add to the front
        //add left header line by line
        newMatrixArr[0].splice(0, 0, "");//top-left corner should be empty

        for (var i=1; i<newMatrixArr.length; i++){
            newMatrixArr[i].splice(0,0,leftheader[i-1]); //if leftheader[i-1] is undefined, the program will simply leave that cell blank
        }

    }

    var avVar = av.ds.matrix(newMatrixArr, {style: "plain"});

    //gray the header
    if (hasHeader){
        for (var i=1; i<newMatrixArr[0].length; i++){
            avVar.css(0, i, {"background-color": matrixHeaderColor});
        }
        for (var i=1; i<newMatrixArr.length; i++){
            avVar.css(i, 0, {"background-color": matrixHeaderColor});
        }
    }

    //Add edges
    for (var i=0; i<edgesArr.length; i++){
        //addEdge(a,b,c,d), if one of the node is flag c or n, change edge color
        var a = parseInt(edgesArr[i][0]),
            b = parseInt(edgesArr[i][1]),
            c = parseInt(edgesArr[i][2]),
            d = parseInt(edgesArr[i][3]),
            opts = {};
        if (hasHeader){
            a++; b++; c++; d++;
        }

        avVar.addEdge(a,b,c,d,opts);
    }

    avVar.layout();
    return avVar;
};
