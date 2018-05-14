require("../testdbSetup");
const expect = require("chai").expect;
var assert = require("assert");
var userFacade = require("../facades/userFacade");
var loginFacade = require("../facades/loginFacade");
var User = require("../models/user");
var LocationBlog = require("../models/locationBlog");

// runs before each test in this block
beforeEach(async function(){
    // Clearing Users and LocationBlogs from the database
    await User.remove({});
    await LocationBlog.remove({});
    // Adding two users to the database
    await userFacade.addUser("Test","test","test","test");
    await userFacade.addUser("Test2","test2","test2","test2");

});

describe("Test userFacade methods", function(){
    
    describe("Testing the addUser() method", function(){
        it("Should add and find two users, then comparing their names", async function(){
            
            await userFacade.addUser("Kurt","Wonnegut","kw","test");
            await userFacade.addUser("Kurt2","Wonnegut2","kw2","test2");

            user1 = await User.findOne( { userName : "kw"}).exec();
            user2 = await User.findOne( { userName : "kw2"}).exec();

            await expect(user1.userName).to.be.equal("kw");
            await expect(user2.userName).to.be.equal("kw2");
        });
    });

    describe("Test find ll users method()", function () {
        it("Should find all useres and comparing the length of the User Schema", async function () {
            // We know that there is two default users
            var getAllUsers = await userFacade.getAllUsers();
            expect(getAllUsers.length).to.be.equal(2);
        })
    })

    describe("Testing addLocationBlog() method", function(){
        it("Should find two userIds and add two new locationblogs, then compare those info", async function(){

            user1 = await User.findOne( { userName : "test" }).exec();
            user2 = await User.findOne( { userName : "test2" }).exec();

            await userFacade.addLocationBlog("Legoland",user1._id,"1111","2222");
            await userFacade.addLocationBlog("Dyrhaven",user2._id,"3333","4444");

            locationBlog1 = await LocationBlog.findOne( { info : "Legoland"});
            locationBlog2 = await LocationBlog.findOne( { info : "Dyrhaven"});

            await expect(locationBlog1.info).to.be.equal("Legoland");
            await expect(locationBlog2.info).to.be.equal("Dyrhaven");
        });
    });
    
    describe("Testing likeLocationBlog method", function(){
        it("Should find two users ID, add two locationBlog, then use user_ID and loc_ID to add likes", async function(){

            user1 = await User.findOne( { userName : "test" }).exec();
            user2 = await User.findOne( { userName : "test2" }).exec();

            await userFacade.addLocationBlog("New Place",user1._id,"1111","2222");
            await userFacade.addLocationBlog("New Place2",user2._id,"3333","4444");

            locationBlog1 = await LocationBlog.findOne( { info : "New Place"});
            locationBlog2 = await LocationBlog.findOne( { info : "New Place2"});

            await userFacade.likeLocationBlog(locationBlog1._id,user1._id);
            await userFacade.likeLocationBlog(locationBlog2._id,user2._id);
            
        });
    });

    describe("Testing login method", function(){
        it("Should login with username, password, longitude, latitude, distance", async function(){

            await userFacade.addUser("Kurt","Wonnegut","Swimmer1","test");
            await userFacade.addUser("Kurt2","Wonnegut2","Swimmer2","test2");

            
            //await loginFacade.login("Swimmer1","test",12.512381672859192,55.769998281557164,5);
            
        });
    });

    describe("Testing loginFacade", function(){
        describe("Login as a user", function() {
            it("Should return a friend", async function() {
                // We know our first user is Kurt
                var friends = await loginFacade("test", "test",12.562179565429688, 55.79143827447144, 1000);
                expect(friends.length).to.be.equal(0);
            })
        })
    })
});

