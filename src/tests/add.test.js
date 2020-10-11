function add(a, b){
    if(arguments.length > 2){
        throw new Error('2 are just enough')
    }
    return a + b
};
test('should add two numbers',()=>{
    add(10, 20)
    expect(add(10,20)).toBe(30)

});