export default class engine {
    private gl;
    constructor(canvasId?: string);
    createProgram(vertices: number[], vertexShaderSrc: string, fragShaderSrc: string): WebGLProgram;
    getGl(): WebGLRenderingContext;
    private getProgram;
    getBuffer(): WebGLBuffer;
    createShader(shaderSource: string, shaderType: number): WebGLShader;
    bindBuffer(buff: WebGLBuffer, buffData: number[]): void;
    linkNuseProgram(prgrm: WebGLProgram): void;
    clear(r?: number, g?: number, b?: number, a?: number): void;
    setAttribute(nameStr: string, programe: WebGLProgram, numberOfComps: number, stride: number, offset?: number): void;
    stdVertexShaderSrc(): string;
    stdFragShaderSrc(): string;
}
//# sourceMappingURL=rawGl.d.ts.map