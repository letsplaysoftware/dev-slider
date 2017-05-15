(function(exports) {
  e = exports;
  e.listeners = e.l = {};
  e.handlers = e.h = {};
  e.state = e.s = {};
  e.utilities = e.u = {};

  var cBody;
  var lBody = document.createElement('body');
  var state = 'content';

  document.addEventListener('touchstart', function() {
    if (event.touches.length > 2) {
      exports.toggleLog();
    }
  });

  exports.log = function(args) {
    console.log.apply(console, Array(args));
    var el = document.createElement('li');
    el.innerText = args;
    lBody.append(el);
  }

  exports.toggleLog = function() {
    if (state === 'content') {
      if (!cBody) {
        cBody = document.getElementsByTagName('body')[0];
      }
      cBody = cBody.parentNode.replaceChild(lBody, cBody);
      state = 'log';
    } else {
      lBody = lBody.parentNode.replaceChild(cBody, lBody);
      state = 'content';
    }
  }
})(this.app = {});
