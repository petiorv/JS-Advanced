class TextBox {
    constructor(selector, regex){
        this.value = '';
        this._elements = [];
        this.invalidSymbols = regex;
    }

    get value(){
        return this.value;
    }

    set value(value){
        this._value=value;
    }

    inValid(){
        return this._invalidSymbols.test(this.value);
    }
}