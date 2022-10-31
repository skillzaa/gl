import ClrObj from "./clrObj.js";



export default class VertexRecord{
private readonly _x1:number;
private readonly _y1:number;
private readonly _x2:number;
private readonly _y2:number;
private readonly _x3:number;
private readonly _y3:number;
//-------------------------
private  clr :ClrObj;

constructor(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number,clr :ClrObj){

this._x1 = x1;
this._y1 = y1;
this._x2 = x2;
this._y2 = y2;
this._x3 = x3;
this._y3 = y3;
this.clr = clr;
}

x1():number{ return this._x1;}
y1():number{ return this._y1;}
x2():number{ return this._x2;}
y2():number{ return this._y2;}
x3():number{ return this._x3;}
y3():number{ return this._y3;}

r():number{return this.clr.r()}
g():number{return this.clr.g()}
b():number{return this.clr.b()}

}