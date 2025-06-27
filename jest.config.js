import { createDefaultEsmPreset } from 'ts-jest';

const tsJestTransformCfg = createDefaultEsmPreset({
    tsConfig: '<rootDir>/tsconfig.test.json',
}).transform;

/** @type {import("jest").Config} **/
export default {
    testEnvironment: 'node',
    transform: {
        ...tsJestTransformCfg,
    },
};
