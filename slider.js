(function(exports) {
  exports.load = function(url) {
    fetch(url, { 'credentials': 'same-origin' })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        exports.menu = data.keys;
        console.log("fetched from %s:", url);
        console.log(exports.menu);
      });
  }

  exports.listen = function() {
    document.addEventListener('keypress', myListen);
  }
  exports.unListen = function() {
    document.removeEventListener('keypress', myListen);
  }

  myListen = function(event) {
    console.log(event.key);
  }

})(this.slider = {});

