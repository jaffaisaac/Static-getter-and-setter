class person{
    static #count = 0;
    static get count(){
        return this.#count;
    }

    static set count(value){
        if(typeof value !== 'number'){
            throw new TypeError(`count is not a Number`);
        }
        return this.#count
    }
}
console.log(person.count) // 0
console.log(person.count=40) //40