class Calculator {
  constructor(a,b){
    this._a = a;
    this._b = b;
  }
  add (){
    return this._a+this._b;
  }
}
module.exports.Calculator;