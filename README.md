# tree-plugin-underscore
**tree-plugin-underscore** is an [underscore.js](http://underscorejs.org/) extension to build a tree structure form a flat array.

## How to use it

Imagine the following array. The parentId identifies the parent element node where it belongs:

    var myFlatArray = [
          { id: 1, title: 'First Thread Message', parentId: 0 },
          { id: 2, title: 'First Thread Answer', parentId: 1 },
          { id: 3, title: 'First Answer Reply', parentId: 2 },
          { id: 4, title: 'Second Answer Reply', parentId: 2 }
        ];
        
    console.log (_.tree(myFlatArray)), will print the next output:

The output would be something like that.

    >
    {
      "id": 1,
      "name": "First Thread Message",
      "parentId": 0,
      "children": [
        {
          "id": 2,
          "name": "First Thread Answer",
          "parentId": 1,
          "children": [
            {
              "id": 3,
              "name": "First Answer Reply",
              "parentId": 2,
              "children": []
            },
            {
              "id": 4,
              "name": "Second Answer Reply",
              "parentId": 2,
              "children": []
            }
          ]
        }
      ]
    }


##  Function description

``_.tree(flatArray, [rootIdValue], [idName], [parentIdName], [childrenCollectionName])``

 - **flatArray**: It is the input data array.
 - **rootIdValue**: The value of the first element's id. Defaults to the first ID found, or `0` if not found.
 - **idName**: The object key used as identifier. Defaults to `id`.
 - **parentIdName**: The object key used to indentift its parent element. Defaults to `parentId`.
 - **childrenCollectionName**: The name of the children array we want in our tree structure 
 
 
 This plugin has been written using the original code in the https://gist.github.com/jimmed/6608648 .
## How to load the plugin
You can load it using the `require` function:
	
	var _ = require('underscore');
	global._ = _;
	require('tree-plugin-underscore');


## Use it with lodash
Lodash doesn't include all the methods in the core library as underscore does. So it's necessary to include the 'partial' extension before we load 'tree' extension.
    
	var _ = require('lodash');
	var partial = require('lodash.partial');
	global._ = _;
	require('tree-plugin-underscore');


## License
  tree-plugin-underscore is licenced under [The MIT License (MIT)](https://github.com/sinmsinm/tree-plugin-underscore/blob/master/LICENSE)
