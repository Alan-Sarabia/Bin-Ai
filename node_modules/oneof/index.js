module.exports = function(list){

  var min = 0;
  var max = list.length-1;
  var idx = Math.floor( Math.random() * (max - min + 1)) + min;
  return list[idx];

}
