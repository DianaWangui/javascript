class ClassWithGetSet {
    #msg = "Hello Diana";
    get msg() {
        return this.#msg;
    }
    set msg(x) {
        return this.#msg = `Hello ${x}`;
    }
};
const instance = new ClassWithGetSet();
console.log(instance.msg);
instance.msg = 'Ivy';
console.log(instance.msg);
