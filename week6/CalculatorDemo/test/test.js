const expect = require("chai").expect;
var assert= require("assert");

const calc = require("../moduleDemo/calculator/lib/calculator.js");

const calcClass = new Calculator(3,4);

const PORT = 1234;
const URL = "http://localhost:"+PORT+"/calc/add/";
const request = require("request");
let server;

describe('Array',function(){
  describe('#indexof()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal([1,2,3].indexOf(5),-1);
    });
  });
});

describe("Test the calculator",function(){
  it("3 + 4 should return 7",function(){
    expect(calcClass.add).to.equal(7);
  })
 })

describe("Testing the CALC-API",function(){
 before(function(done){
   calc.calcServer(PORT,function(s){
     server = s;
     done();
   })
 })
 after(function(){
   server.close();
 })


 it("/4/7 should return 11",function(done){
    request(URL+"4/7",function(err,res,body){
      console.log(err);
      let result = Number(body);
      expect(result).to.be.equal(11);
      done();
    })
  })

});

