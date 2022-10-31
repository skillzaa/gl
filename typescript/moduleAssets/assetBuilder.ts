import TriContainer from "./triContainer.js";
import VAO from "./core/vao.js";
import ClrObj from "./core/clrObj.js";
import { getClrObj } from "./assets.js";

/**
 * The AssetBuilder takes in instructions and spits out a CoreTriContainer filled with given shapes
*/

export default class AssetBuilder {
public showBackground :boolean;
public x :number;
public y :number;
public width :number;
public height :number;
public palette :ClrObj[];
public clrMain :ClrObj;
public clrBg :ClrObj;
//----------------
public vertices :VAO;
//////////////////////////////////////////////////
constructor(x:number=0,y:number=0,width:number=100,height:number=100,clrBg :ClrObj| null=null,clrMain:ClrObj| null=null){

//black-default main
if (clrMain == null){clrMain = new ClrObj(0,0,0);}
//white-default main
if (clrBg == null){clrBg = new ClrObj(1,1,1);}
//--------------------------------------------------
this.clrMain = clrMain;
this.clrBg = clrBg;
this.palette = this.initPalette();
//--------------------------------------------------
this.showBackground = true;
this.vertices = new VAO();
//--------------------------------------------------
this.x = x;
this.y = y;
this.width = width;
this.height = height;
}


setClrBg(r:number=0,g:number=0,b:number=0){
this.clrBg = new ClrObj(r,g,b);    
}

getAsset():TriContainer{
    
const  ctc = new TriContainer(this.x,this.y,this.width,this.height);
if (this.showBackground == true){

const bgVertices = new VAO();
bgVertices.addRect(0,0,100,100,  this.clrBg.r(),this.clrBg.g(),this.clrBg.b());

//-----------Add back gr vertices
ctc.vertices.concat(bgVertices);
}
//------------
ctc.vertices.concat(this.vertices);
// ctc.setVAO(this.vertices);
return ctc;
}
////////////////////////////////////////
setClrIfNull(clrobj :ClrObj | null,r:number,g:number,b:number):ClrObj{
if (clrobj == null){
    clrobj = new ClrObj(r,g,b);
}
return clrobj;
}
private initPalette():ClrObj[]{
const ar = [];
    ar[0] = getClrObj(1,0,0); 
    ar[1] = getClrObj(0,1,0); 
    ar[2] = getClrObj(0,0,1); 
    ar[3] = getClrObj(1,1,0); 
    ar[4] = getClrObj(0,1,1); 
    ar[5] = getClrObj(1,0,1); 
    ar[6] = getClrObj(0.3,0.5,0.8); 
    ar[7] = getClrObj(0.3,0.5,0.8); 
    ar[8] = getClrObj(0.3,0.5,0.8); 
    ar[9] = getClrObj(0.3,0.5,0.8);
    return ar; 
}
}