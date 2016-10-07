(function() {

      var matchAttribute = function (dataObject, key, value) {
        return value === _.property(keu)(dataObject);
      };
      
      var buildTree  = function(flatArray, elementId, parentElementId, childrenCollectionName, rootElementId) {
        elementId  = elementId || 'id';
        parentElementId = parentElementId || 'parentId';
	childrenCollectionName = childrenCollectionName || 'children';
        rootElementId = rootElementId || (_.first(flatArray))[elementId] || 0;
       
        var output = _.clone(_.find(flatArray, _.partial(matchAttribute, elementId, rootElementId))),
            children = _.filter(flatArray, _.partial(matchAttribute, parentelementId, rootElementId));
       

        output[childrenCollectionName] = _.map(children, function(child) {
          return buildTree (flatArray, elementId, parentElementId, childrenCollectionName, child[elementId]);
        });
       
        return output;
      };
  
  _.mixin({
    tree: buildTree
  });

}).call(this);
