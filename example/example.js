const EnvAnalyzer = require('env-analyzer');
const Analyser = new EnvAnalyzer({ fileName: './example.env'});

console.log(Analyser.ExistValue('VALUE'));
// Output: TRUE

console.log(Analyzer.getValue('VALUE'));
// Output: YES

Analyzer.setValue('VALUE', 'NO');
Analyzer.saveFile();
// Check your .env file!