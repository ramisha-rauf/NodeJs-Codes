//To create your own module use keyword exports
exports.sum=(a,b)=>{
    return a+b;
}

/*ES module------use type:module in package.json file
const sum=(a,b)=>{
    return a+b;
}

const diff=(a,b)=>{
    return a-b;
}

export {sum,diff}*/