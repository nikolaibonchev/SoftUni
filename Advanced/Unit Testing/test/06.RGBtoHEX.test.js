import { expect } from "chai";
import { rgbToHexColor } from "../06.RGBtoHEX.js";

describe("Converting RGB to HEX", ()=>{
    it("Return a HEX string Check", ()=>{
        expect(rgbToHexColor(0,0,0)).to.equal("#000000");
        expect(rgbToHexColor(127,127,127)).to.equal("#7F7F7F");
        expect(rgbToHexColor(255,255,255)).to.equal("#FFFFFF");
    })

    it("Return a Undefined for Out of Bounds", ()=>{
        expect(rgbToHexColor(-1,-1,-1)).to.be.undefined;
        expect(rgbToHexColor(256,256,256)).to.be.undefined;
        expect(rgbToHexColor(-1,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,-1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,-1)).to.be.undefined;
        expect(rgbToHexColor(256,255,255)).to.be.undefined;
        expect(rgbToHexColor(255,256,255)).to.be.undefined;
        expect(rgbToHexColor(255,255,256)).to.be.undefined;
    })
})