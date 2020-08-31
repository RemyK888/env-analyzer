const fs = require('fs');
const utils = require('util');
const dotenv = require('dotenv');
const writeFile = utils.promisify(fs.writeFile);

module.exports = class EnvAnalyzer {
    /**
     * @typedef {object} Options
     * @property {string} fileName - Insert the file name here.
     */

    /**
     * The file name is required.
     * @param {Options} options
     */
    constructor(options) {
        if (!options.fileName) {
            throw new Error('The file name is required.');
        };
        this.fileName = options.fileName;
        try {
            fs.accessSync(this.fileName);
            const fileContent = fs.readFileSync(this.fileName);
            this.dotenvReaderContent = dotenv.parse(fileContent);
        } catch (err) {
            this.dotenvReaderContent = {};
            throw new Error('An error occured while parsing the file, Verify the file directory.');
        };
    }

    existsValue(value) {
        return this.dotenvReaderContent[value] !== undefined;
    };

    getValue(value, basicValue = undefined) {
        if (!value) {
            throw new Error('You must insert a value to find it.');
        };
        if (!this.existsValue(value) && basicValue !== undefined) {
            return basicValue;
        };
        return this.dotenvReaderContent[value];
    };

    setValue(value, newValue) {
        if (!value || !newValue) {
            throw new Error('You must insert the value and the new value.');
        };
        this.dotenvReaderContent[value] = newValue;
    };

    saveFile(line_separator = '\n') {
        let fileContent = '';
        for (let key in this.dotenvReaderContent)
            fileContent += `${key} = ${this.dotenvReaderContent[key]}${line_separator}`;

        return writeFile(this.fileName, fileContent);
    };
};
