import {AssetBuilder,AssetsCollection,TriContainer,GlUtil,ClrObj,getClrObj } from "./moduleAssets/assets.js";


////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");
// const asset = new AssetBuilder(25,25,20,40);
// asset.setClrBg(0,0,1);

// asset.vertices.addRectangle(0,40,  100,20,   1,1,0);
// asset.vertices.addRectangle(40,0,  20,100,   1,1,0);
// ///////////
// const comp = asset.getAsset();


///////////////////////////
const assetOther = AssetsCollection.sq2X2(0,0,100,100,null,getClrObj(1),getClrObj(0,1),getClrObj(0,0,1),getClrObj(0.8,0.8,1));

const compOther = assetOther.getAsset();



//////////////////////---draw section
GlUtil.clear(gl,0.2,0.2,0.2);

compOther.init(gl);
compOther.draw( gl );

// comp.init(gl);
// comp.draw( gl );
