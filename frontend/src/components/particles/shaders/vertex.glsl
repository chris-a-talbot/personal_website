uniform float uTime;
uniform float uProgress;
uniform float uSize;
uniform vec3 uMouse;

attribute vec3 aStartPosition;
attribute vec3 aEndPosition;
attribute vec3 aScatterPosition;
attribute float aOffset;
attribute vec3 aColor;

varying vec3 vColor;
varying float vProgress;

void main() {
    vColor = aColor;
    vProgress = uProgress;

    // Calculate position based on transition progress
    vec3 finalPosition;
    if (uProgress < 0.5) {
        // DNA to flower transition
        float normalizedProgress = uProgress * 2.0;
        finalPosition = mix(aStartPosition, aEndPosition, normalizedProgress);

        // Add wave effect only during DNA phase
        float wave = sin(aOffset * 3.14159 + uTime * 2.0) * 0.1;
        finalPosition.y += wave * (1.0 - normalizedProgress);

        // Add mouse influence only during DNA phase
        float mouseInfluence = 1.0 - min(1.0, length(finalPosition - uMouse) / 5.0);
        mouseInfluence *= (1.0 - normalizedProgress);
        finalPosition += normalize(finalPosition - uMouse) * mouseInfluence * 0.5;
    } else {
        // Flower to scatter transition
        float normalizedProgress = (uProgress - 0.5) * 2.0;
        finalPosition = mix(aEndPosition, aScatterPosition, normalizedProgress);
    }

    vec4 mvPosition = modelViewMatrix * vec4(finalPosition, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Size attenuation
    float size = uSize * (1.0 + sin(aOffset * 3.14159 + uTime) * 0.2);
    gl_PointSize = size * (300.0 / -mvPosition.z);
}