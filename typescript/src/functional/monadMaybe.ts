function Just(value) {
  this.value = value;
}

Just.prototype.bind = function(transform) {
  return transform(this.value);
};

Just.prototype.toString = function() {
  return "Just(" + this.value + ")";
};

var Nothing = {
  bind: function() {
    return this;
  },
  toString: function() {
    return "Nothing";
  }
};

// var result = new Just(5).bind(value =>
//   new Just(null).bind(value2 => {
//     console.log("value", value);
//     console.log("value2", value2);
//     new Just(value + value2);
//   })
// );

// console.log(result);

function getUser() {
  return new Just({
    getAvatar: function() {
      return Nothing; // no avatar
    }
  });
}

console.log(getUser().value.value);
