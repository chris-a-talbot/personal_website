export type Position3D = {
    x: number;
    y: number;
    z: number;
};

export const createDNAPosition = (index: number, total: number): Position3D => {
    const t = (index / total) * Math.PI * 12;
    const strand = index % 2;
    const radius = 8;

    return {
        x: Math.cos(t + (strand * Math.PI)) * radius,
        y: (t / (Math.PI * 2)) * 60 - 30, // Height spread
        z: Math.sin(t + (strand * Math.PI)) * radius
    };
};

export const createFlowerPosition = (index: number, total: number): Position3D => {
    const petalCount = 5;
    const petalIndex = Math.floor((index / total) * petalCount);
    const progressInPetal = (index % (total / petalCount)) / (total / petalCount);

    const baseAngle = (petalIndex / petalCount) * Math.PI * 2;
    const radius = 12 * progressInPetal;

    // Add some randomness to make it more organic
    const angleOffset = (Math.random() - 0.5) * 0.3;
    const angle = baseAngle + angleOffset;

    return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        z: 0
    };
};

export const createScatterPosition = (): Position3D => {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    const r = 50 + Math.random() * 100;

    return {
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi)
    };
};