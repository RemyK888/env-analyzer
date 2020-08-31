# Env-Analyzer
[![NPM](https://nodei.co/npm/env-analyzer.png)](https://nodei.co/npm/env.analyzer/)

The Env-Analyzer package is a simple way to parse and write `.env` files.

**Install**
```
npm i env-analyzer@latest
```

**Basic stuff**
```javascript
const EnvAnalyzer = require('env-analyzer'); // Require the package
const Analyzer = new EnvAnalyzer({ fileName: 'some-file.env' }); // Place your file name here.
```
*Note: `fileName` is required.*

# **ExistValue()**

*My `.env` file content:*
```
VALUE=YES
```
*Javascript file content:*
```javascript
console.log(Analyzer.existsValue('VALUE'));
// Output: TRUE
```

# **GetValue()**

*My `.env` file content:*
```
VALUE=YES
```
*Javascript file content:*
```javascript
console.log(Analyzer.getValue('VALUE'));
// Output: YES
```

# **SetValue() and SaveFile()**

*My `.env` file content:*
```
VALUE=YES
```
*Javascript file content:*
```javascript
Analyzer.setValue('VALUE', 'NO');
Analyzer.saveFile();
```
*`.env` file content:*
```
VALUE=NO
```
If the package doesn't find the value, he will create a new one with those two values inserted.

―――――――――――――――――――――――――

If you have any problems, you can contact: `RemyK#3876`
**Discord Server:** [Server Link](https://discord.gg/ZCzxymB)


**Made with ❤ by RemyK**

