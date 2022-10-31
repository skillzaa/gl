export default class VertexRecord {
    constructor(x1, y1, x2, y2, x3, y3, clr) {
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
        this._x3 = x3;
        this._y3 = y3;
        this.clr = clr;
    }
    x1() { return this._x1; }
    y1() { return this._y1; }
    x2() { return this._x2; }
    y2() { return this._y2; }
    x3() { return this._x3; }
    y3() { return this._y3; }
    r() { return this.clr.r(); }
    g() { return this.clr.g(); }
    b() { return this.clr.b(); }
}
