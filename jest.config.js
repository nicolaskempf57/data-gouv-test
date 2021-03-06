module.exports = {
    moduleFileExtensions: [
        'js',
        'json',
        'vue'
    ],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': 'vue-jest'
    },
    moduleNameMapper: {
        '\\.(css)$': '<rootDir>/src/__mocks__/styleMock.js',
    }
}