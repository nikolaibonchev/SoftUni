import { expect } from "chai";
import { gymMembership } from "./GymMembership.js";
import { describe } from "mocha";

describe("Test GymMembership Program", function() {
    describe("Buying Membership", function() {
        //Invalid Tests
        it("Invalid Membership Type", function() {
            expect(()=> gymMembership.buyMembership("plus", 1, true)).to.Throw("Invalid membership type!");
        });
        it("Invalid Number of Months", function() {
            expect(()=>gymMembership.buyMembership("vip", 0, true)).to.Throw("Invalid number of months!");
        })
        it("Invalid Number of Months", function() {
            expect(()=>gymMembership.buyMembership("vip", 13, true)).to.Throw("Invalid number of months!");
        })
        it("Invalid Discount parameter", function() {
            expect(()=>gymMembership.buyMembership("vip", 1, 'hello')).to.Throw("Invalid discount parameter!");
        })
        //Valid Tests
        it("Valid Vip Membership /No Discount/", function() {
            expect(gymMembership.buyMembership("vip", 1, false)).equal("You bought a vip membership for 1 months. Total price: 120.00$.");
        })
        it("Valid Vip Membership /No Discount/", function() {
            expect(gymMembership.buyMembership("vip", 12, false)).equal("You bought a vip membership for 12 months. Total price: 1440.00$.");
        })
        it("Valid Vip Membership /With Discount/", function() {
            expect(gymMembership.buyMembership("vip", 1, true)).equal("You bought a vip membership for 1 months. Total price: 108.00$.");
        })
        it("Valid Vip Membership /With Discount/", function() {
            expect(gymMembership.buyMembership("vip", 12, true)).equal("You bought a vip membership for 12 months. Total price: 1296.00$.");
        })
     });
    
    describe("Checking Access", function(){
        //Invalid tests
        it("Invalid Membership Type", function(){
            expect(()=>gymMembership.checkAccess('plus', 'gym')).to.Throw("Invalid membership type!");
        })
        it("Invalid Membership Type /Not a String/", function(){
            expect(()=>gymMembership.checkAccess(5, 'gym')).to.Throw("Invalid membership type!");
        })
        it("Invalid Facility", function(){
            expect(()=>gymMembership.checkAccess('basic', 'hello')).to.Throw("Invalid facility!");
        })
        it("Invalid Facility /Not a String/", function(){
            expect(()=>gymMembership.checkAccess('basic', 5)).to.Throw("Invalid facility!");
        })

        //Valid Tests
        it("Access Granted for Basic", function(){
            expect(gymMembership.checkAccess('basic', 'gym')).equal("Access granted to gym.");
        })
        it("Access Granted for Premium", function(){
            expect(gymMembership.checkAccess('premium', 'gym')).equal("Access granted to gym.");
        })
        it("Access Granted for Vip", function(){
            expect(gymMembership.checkAccess('vip', 'gym')).equal("Access granted to gym.");
        })
    });

    describe("Buying Suppliments", function(){
        //Invalid Tests
        it("Invalid Suppliment /Not a String/", function(){
            expect(()=>gymMembership.buySupplements(5)).to.Throw("Invalid supplement!");
        })
        it("Invalid Suppliment /Not such a Suppliment/", function(){
            expect(()=>gymMembership.buySupplements('Cola')).to.Throw("Invalid supplement!");
        })

        //Valid Tests
        it("Bought a Shake", function(){
            expect(gymMembership.buySupplements('shake')).equal("You bought a shake for 3.00$.");
        })
        it("Bought a Bar", function(){
            expect(gymMembership.buySupplements('bar')).equal("You bought a bar for 2.00$.");
        })
        it("Bought a Water", function(){
            expect(gymMembership.buySupplements('water')).equal("You bought a water for 1.00$.");
        })
    });
});