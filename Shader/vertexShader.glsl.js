const vShader=`
void main() {
    uniform float u_time;
    float newX=sin(position.x * u_time) * sin(position.y * u_time)
    
    vec3 newPosition=vec3(newX,position.y,position.z)
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition , 1.0);
	gl_Position = projectionMatrix * modelViewPosition;

}
`
export default vShader