const kupAjax = function (method, page, asyn) {
  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (err) {
      xhr = new ActiveXObject("Msxm12.XMLHTTP");
    }
  }
  xhr.open(method, page, asyn);
  xhr.send();
  if (xhr.status != 200) {
    alert(xhr.status + ": " + xhr.statusText + " что-то не так");
    return;
  } else {
    return xhr.responseText;
  }
};

const copyObj = function (obj) {
  return Object.fromEntries(Object.entries(obj));
};

function addEvent(target, type, handler) {
  if (target.addEventListener) {
    target.addEventListener(type, handler, false);
  } else {
    target.attachEvent("on" + type, function (e) {
      return handler.call(target, e);
    });
  }
}

const cel = function (el) {
  return document.createElement(el);
};

const gel = function (id) {
  return document.getElementById(id);
};

const qel = (el) => document.querySelector(el);

const qell = (el) => document.querySelectorAll(el);

/*
Object.prototype.appendOn = function (el) {
  this.append(el);
  return this;
};

Object.prototype.appendIn = function (el) {
  this.append(el);
  return el;
};
*/

const rnd = function (n, d) {
  return Math.round(((n % d) / d) * 10) / 10 + Math.floor(n / d);
};

const cutF = (n, a = 1) => {
  const s = Math.pow(10, a);
  return Math.floor(n) + Math.round((n - Math.floor(n)) * s) / s;
};

const pipe = (...rest) => {
  return function (arg) {
    return rest.reduce((t, a) => a(t), arg);
  };
};

const createArr = (n, m) => new Array(n).fill(m);
const createIndexArr = (n) => new Array(n).fill("*").map((v, i) => i);
const createIndexStartArr = (n, start = 0) =>
  new Array(n).fill("*").map((v, i) => i + start);

module.exports = {
  kupAjax,
  copyObj,
  addEvent,
  cel,
  gel,
  qel,
  qell,
  rnd,
  cutF,
  pipe,
  createArr,
  createIndexArr,
  createIndexStartArr,
};
