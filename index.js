var _ = {};

module.exports = _;

_.once = function(fn) {
  var invoked = false;
  var result;

  return function() {
    if(invoked == false){
      invoked = true;
      result = fn();
    }
    return result;
  }
};

_.memoize = function(fn, result){
  var cache = {};

  return function(o){
    var index = o;

    if(result){
      index = result(o);
    }

    if((index in cache) == false){
      cache[index] = fn(o);
    }
    return cache[index];
  }
};

_.bind = function(fn, data){

  return function(){
    return fn.call(data);
  }
};