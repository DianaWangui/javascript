const obj = {
    a: 'foo',
    b() {
        return this.a
    },
};
console.log(obj.b());