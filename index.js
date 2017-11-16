var Validator = {
  /* ИНН */
  inn: function(inn){
    if (typeof inn != "string" && typeof inn != "number") return false;
    inn = inn.toString();
    var check = function(num){
      var n = [3,7,2,4,10,3,5,9,4,6,8,0].slice(-num.length)
      var summ = 0;
      for (var i=0; i<num.length; i++) {
        summ += num[i] * n[i];
      }
      var control = summ%11;
      if(control>9) control = control%10;
      return control;
    }
    if(inn.length == 10){
      return check(inn) == inn.slice(-1);
    }else if(inn.length == 12){
      return check(inn.slice(0,11)) == inn.slice(10,-1) && check(inn) == inn.slice(-1);
    }else {
      return false;
    }
  },
  
  /* ОГРН,ОГРНИП */
  ogrn: function(ogrn){
    if (typeof ogrn != "string" && typeof ogrn != "number") return false;
    ogrn = ogrn.toString();
    if(ogrn.length == 13 || ogrn.length == 15){
      return (parseInt((ogrn).slice(0,ogrn.length-1))%(ogrn.length-2)).toString().slice(-1) == ogrn.slice(-1)
    }else {
      return false;
    }
  }
};

module.exports = Validator;