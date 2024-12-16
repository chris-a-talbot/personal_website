type MousePosition = {
    x: number;
    y: number;
    normX: number;
    normY: number;
    velocity: number;
};
type MousePositionOptions = {
    smooth?: boolean;
    smoothingFactor?: number;
};
export declare const useMousePosition: ({ smooth, smoothingFactor }?: MousePositionOptions) => MousePosition;
export {};
