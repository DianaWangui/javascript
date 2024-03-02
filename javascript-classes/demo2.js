const obj = {
    method() {
        console.log('hey');
    },
  };

//   new obj.method(); // TypeError: obj.method is not a constructor
  obj.method();