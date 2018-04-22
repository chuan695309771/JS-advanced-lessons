var empty1 = {a:1};
console.log(Object.isExtensible(empty1));
empty2 = Object.create({},{
    "a":{
        value : 1,
        configurable : false,
        enumerable : true,
        writable : true
    }
});
console.log(Object.isExtensible(empty2));
