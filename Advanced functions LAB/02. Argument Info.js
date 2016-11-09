function result() {
    let firstArg = arguments[0];
    let summary=[];
    for(let i=0; i<arguments.length; i++){
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type+ ': ' + obj);

        if(!summary[type]){
            summary[type]=0;
        }else {
            summary[type]++
        }

    }
    let sortedTypes=[];
    for(let currentType in summary){
        sortedTypes.push({
            count: summary[currentType],
            type: currentType
        })
    }
    sortedTypes.sort((a,b)=> {
        return b.count - a.count;
    });

    for(let index in sortedTypes){
        console.log(`${sortedTypes[index].type} = ${sortedTypes[index].count}`)
    }

    //console.log(firstArg)
}
result({ name: 'bob'}, 3.333, 9.999);
//result('cat', 42, function () { console.log('Hello world!'); });