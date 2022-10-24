#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 loc = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    vec2 pos = vec2(0.5)-loc;

    float radius = length(pos)* 5.0;
    //since y go from 0 to 1 thus the fol atan will complete 1 circle. the crest of tan are peaks of the pattles
    float a = atan(pos.y,pos.x);

    float f = cos(a*3.);
    // float f = abs(cos(a*3.));
    // float f = abs(cos(a*2.5))*.5+.3;
    // float f = abs(cos(a*12.)*sin(a*3.))*.8+.1;
    // float f = smoothstep(-.5,1., cos(a*10.))*0.2+0.5;

    // color = vec3( 1.0 -smoothstep(f,f+0.05,radius) );
    color = vec3( 1.0 - f);

    gl_FragColor = vec4(color, 1.0);
}
