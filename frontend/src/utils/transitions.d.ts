export type Position3D = {
    x: number;
    y: number;
    z: number;
};
export declare const createDNAPosition: (index: number, total: number) => Position3D;
export declare const createFlowerPosition: (index: number, total: number) => Position3D;
export declare const createScatterPosition: () => Position3D;
