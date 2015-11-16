$(document).ready(function(){
  readTime.init();
});

var wpm;
var readTime = {
  init: function(){
    readTime.configWPM(600);
  },
  getWPM: function(){
  return wpm;
  },
  configWPM: function(val){
    wpm = val;
  },
  convertToArray: function(html){
    return html;
  },
  getTextFromNodes: function(el){
    return $(el).text();
  },
  removePunctuation: function(sen){
   var newArr = sen.split("");
   var arg = _.filter(newArr, function(val){
     if ((val != "?") && (val != ".") && (val != ",") && (val != "!") && (val != ";") && (val != "/")){
       return val;
     }
   });
   var newString = arg.join('');
   return newString;
  },
  countWords: function(sen){
    var newStuff = sen.split(" ");
    return newStuff.length;
  },
  calcWPM: function(el){
  var answer =  el / wpm;
  var answerRound = Math.round(answer);
  return answerRound + " minute read";
  }
}
