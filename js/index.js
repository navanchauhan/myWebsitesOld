var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChangingTitle = function () {
  function ChangingTitle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, ChangingTitle);

    this.node = x;
    this.letterfy(this.node.querySelector('h1'));
  }

  _createClass(ChangingTitle, [{
    key: 'letterfy',
    value: function letterfy(node) {
      var text = node.innerText;
      node.innerText = '';
      node.classList.add('current');
      for (var c in text) {
        var span = document.createElement('span');
        span.innerText = text[c];
        span.classList.add('letter', 'in');
        span.style.animationDelay = c * 0.1 + 's';
        node.appendChild(span);
      }
    }
  }, {
    key: 'changeText',
    value: function changeText(newText) {
      var oldTitle = this.node.querySelector('.current');
      var i = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = oldTitle.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var letter = _step.value;

          letter.style.animationDelay = i++ * 0.1 + 's';
          letter.classList.remove('in');
          letter.classList.add('out');
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      oldTitle.classList.remove('current');
      var newTitle = document.createElement('h1');
      newTitle.classList.add('current');
      for (var c in newText) {
        var span = document.createElement('span');
        span.innerText = newText[c];
        span.classList.add('letter', 'in');
        span.style.animationDelay = c * 0.1 + 0.5 + 's';
        newTitle.appendChild(span);
      }
      this.node.appendChild(newTitle);
      setTimeout(this.removeNode(oldTitle), 2000);
    }
  }, {
    key: 'removeNode',
    value: function removeNode(x) {
      return function () {
        x.remove();
      };
    }
  }]);

  return ChangingTitle;
}();

;

var ct = new ChangingTitle(document.querySelector('.changing-title'));
var texts = ['Hi! I am नवन'];
var count = 0;
setInterval(function () {
  ct.changeText(texts[++count % texts.length]);
}, 2000);
