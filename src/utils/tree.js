import keyBy from 'lodash/keyBy'

import { changeEntityValueInList } from './arrays'

let newEntityList

export function sumUpEntityList(entityList){
  const tree = arrayToTree(entityList.valueSeq().toArray(), {
    parentProperty: 'parent_id',
    customID: 'id',
    rootID: '0'
  })
  newEntityList = entityList
  const sum = sumUpTree(tree)
  return {newEntityList, sum}
}

var sumUpTree = function(tree){
  
  let result = 0;
  tree.forEach(function(item) {
    let elResult = item.value
    if(item.children){
      elResult = sumUpTree(item.children)
      newEntityList = changeEntityValueInList(newEntityList, item.id, { key:'value', value:elResult })      
    }
    result = result + elResult
  });
  return result
}

export function arrayToTree(data, options) {
  if(!data){
    return []
  }
  if(!options){
    options = {}
  }
  options = Object.assign({
    parentProperty: 'parent_id',
    customID: 'id',
    rootID: '0'
  }, options)

  var grouped = groupByParents(data, options);
  return createTree(grouped, grouped[options.rootID], options.customID);
}

var createTree = function(array, rootNodes, customID) {
  var tree = [];

  for (var rootNode in rootNodes) {
    var node = rootNodes[rootNode];
    var childNode = array[node[customID]];

    if (!node && !rootNodes.hasOwnProperty(rootNode)) {
      continue ;
    }

    if (childNode) {
      node.children = createTree(array, childNode, customID);
    }

    tree.push(node);
  }

  return tree;
};

var groupByParents = function(array, options) {
  var arrayByID = keyBy(array, options.customID);

  return array.reduce(function(prev, item) {
    var parentID = item[options.parentProperty];
    if (!parentID || !arrayByID.hasOwnProperty(parentID)) {
      parentID = options.rootID;
    }

    if (parentID && prev.hasOwnProperty(parentID)) {
      prev[parentID].push(item);
      return prev;
    }

    if (parentID != item[options.customID]) {
      prev[parentID] = [item]
    }
    return prev;
  }, {});
};
