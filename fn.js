var kupAjax = function (method, page, asyn){
    var xhr; 
    if(window.XMLHttpRequest){ 
      xhr = new XMLHttpRequest();
    }else if(window.ActiveXObject){
      try{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
      }catch(err){
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

  // copyObj - функция глубокого копирования объектов (два объекта будут независимыми)
  let copyObj = function(obj){return Object.fromEntries(Object.entries(obj))}

  // addEvent - кросбраузерное решение для addEventListener
  function addEvent(target, type, handler){
    if(target.addEventListener){
      target.addEventListener(type, handler, false);
    }else{
      target.attachEvent('on'+type, function(e){
       return handler.call(target, e);
      });
    }
  }

  // cel - функция создания нового элемента
  var cel = function(el){
    return document.createElement(el);
  }
  
  // gel - функция нахождения элемента по id
  var gel = function(id){
    return document.getElementById(id);
  }
  
  // appendIn & appendOn - добавление элементов с продолжением
  Object.prototype.appendOn = function(el) {
    this.append(el);
    return this;
}

Object.prototype.appendIn = function(el) {
    this.append(el);
    return el;
}
  
