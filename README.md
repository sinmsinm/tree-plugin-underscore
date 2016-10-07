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
        
    `console.log (_.tree(myFlatArray))`, will print the next output:

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


## _.tree(flatArray, , *elementId*, *parentElementId*, childrenGroupName *rootElementId*)

 - **flatArray** It is the input data array.
 - **elementId** The object key used as identifier. Defaults to `id`.
 - **parentElementId** The object key used to indentift its parent element. Defaults to `parentId`.
 - **childrenGroupName** The name of the children array we want in our tree structure 
 - **rootElementId** The value of the first element's id. Defaults to the first ID found, or `0` if not found.
 
 
 This plugin has been written using the original code in the https://gist.github.com/jimmed/6608648 .
