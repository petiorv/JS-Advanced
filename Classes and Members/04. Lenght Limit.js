class Stringer {
    constructor(singleString, length){
        this.innerString = singleString;
        this.innerLength = length;
    }

    increase(length){
        this.innerLength += length;
    }

    decrease(length){
        this.innerLength -= length;
        if(this.innerLength < 3){
            this.innerLength = 0;
        }
    }

    toString(){
        if(this.innerString.length > this.innerLength){

            return this.innerString.slice(0, this.innerString.length-(this.innerString.length - this.innerLength))+'...';
        }else if(this.innerLength == 0){
            return '...';
        }

        return this.innerString
    }
}