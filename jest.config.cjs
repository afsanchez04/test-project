module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transforma archivos JavaScript y JSX usando Babel
    },
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Archivo de configuración para Jest DOM
  };
  