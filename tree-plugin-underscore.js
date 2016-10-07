(function() {

  var matchAttribute = function  (key, value, dataObject) {
    return (value === _.property(key)(dataObject));
  };

  var buildTree  = function(flatArray, rootIdValue, idName, parentIdName, childrenCollectionName) {
    idName  = idName || 'id';
    parentIdName = parentIdName || 'parentId';
    childrenCollectionName = childrenCollectionName || 'children';
    rootIdValue = rootIdValue || (_.first(flatArray))[idName] || 0;

    var output = _.clone(_.find(flatArray, _.partial(matchAttribute, idName, rootIdValue)));
    var children = _.filter(flatArray, _.partial(matchAttribute, parentIdName, rootIdValue));

    output[childrenCollectionName] = _.map(children, function(child) {
      return buildTree (flatArray, child[idName], idName, parentIdName, childrenCollectionName);
    });

    return output;
  };

  _.mixin ({tree: buildTree});
  
}).call(this);
