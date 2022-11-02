import TriContainer from "../../core/triContComp.js";
import ClrObj from "./clrObj.js";
import FiveFifteenDb from "../../primtives/fiveFifteenDb-canab.js";
import Palette from "./palette.js";
export default class AssetBuilder {
    showBackground: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
    palette: Palette;
    sizes: number[];
    switches: boolean[];
    add: FiveFifteenDb;
    constructor(x?: number, y?: number, width?: number, height?: number);
    getAsset(): TriContainer;
    setClrIfNull(clrobj: ClrObj | null, r: number, g: number, b: number): ClrObj;
}
//# sourceMappingURL=assetBuilder.d.ts.map