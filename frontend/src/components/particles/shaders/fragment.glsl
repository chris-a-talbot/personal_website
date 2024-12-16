varying vec3 vColor;
varying float vProgress;

void main() {
    // Calculate distance from center of point
    float dist = length(gl_PointCoord - vec2(0.5));

    // Discard pixels outside of circle
    if (dist > 0.5) discard;

    // Smooth edges and add glow
    float alpha = 1.0 - smoothstep(0.3, 0.5, dist);

    // Adjust color based on progress
    vec3 color = mix(vColor, vColor * 1.2, vProgress);

    // Output final color with glow
    gl_FragColor = vec4(color, alpha);
}