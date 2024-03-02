class ClassWithPublicInstanceMethod {
    publicMethod() {
      return "hello world";
    }
    secondPublicMethod() {
      return "goodbye world";
    }
  }
  
  const instance = new ClassWithPublicInstanceMethod();
  console.log(instance.publicMethod());