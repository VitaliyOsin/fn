var kupAjax = function (method, page, asyn){
    var xhr; 
    if(window.XMLHttpRequest){ 
      xhr = new XMLHttpRequest();
    }else if(window.ActiveXObject){
      try{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
      }catch{
        xhr = new ActiveXObject('Msxm12.XMLHTTP');
      }
     }
    xhr.open(method, page, asyn);
    xhr.send();
    if (xhr.status != 200) {
      // обработать ошибку
       alert( xhr.status + ': ' + xhr.statusText + ' что-то не так'); // пример вывода: 404: Not Found
       return;
    } else {
    // вывести результат 
    return xhr.responseText;     
    }
  }

  let copyObj = function(obj){return Object.fromEntries(Object.entries(obj))}
  
  function addEvent(target, type, handler){
    if(target.addEventListener){
      target.addEventListener(type, handler, false);
    }else{
      target.attachEvent('on'+type, function(e){
       return handler.call(target, e);
      });
    }
  }

  
