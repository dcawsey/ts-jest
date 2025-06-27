# Typescript testing environment
Base configuration for running testing in Typescript for code that is not intended for the DOM.

### Notes:
- Typescript configuration was decided based on the following [cheat sheet](https://www.totaltypescript.com/tsconfig-cheat-sheet).
- There are two different tsconfig files because testing does not require transpiling Typescript to Javascript as we are using <code>ts-jest</code>.
- Implementation files require relative imports to have a <code>.js</code> extension; read why [here](https://www.totaltypescript.com/relative-import-paths-need-explicit-file-extensions-in-ecmascript-imports).