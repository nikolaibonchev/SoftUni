import { expect } from "chai";
import { isSymmetric } from "../05. checkForSymmetry.js";

describe ("Check for Symmetry", ()=>{
    it("it's symmetric", ()=>{
        expect(isSymmetric([2,1,1,2])).to.be.true;
    })

    it("it's not symmetric", ()=>{
        expect(isSymmetric([1,2,3,4])).to.be.false;
    })
})