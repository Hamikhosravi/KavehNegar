module.exports = {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/app/$1',
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    roots: ['<rootDir>/app', '<rootDir>/__tests__'],
    transform: {
        "^.+\\.(ts|tsx)$": "babel-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    testEnvironment: "jsdom",
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
