const { execSync } = require('child_process');

const AND = '%s';
const ESCAPE = '\x1b';
const DEFAULT_COLOR = '[0m';
const CYAN = '[36m';
const GREEN = '[32m';

const setForegroundColor = color => `${ESCAPE}${color}${AND}${ESCAPE}${DEFAULT_COLOR}`;
const emphasize = text => `[...${text}...]`;

console.log(
  setForegroundColor(CYAN),
  emphasize('Linking cooking-with-amateurs/react and related libs to chemistry-ui'),
);
process.chdir('../chemistry-ui');
execSync(
  /*
  Library (chemistry-ui) will use App's (cooking-with-amateurs) React libraries
  to avoid crash when having multiple React instantes with Hooks
  */
  'npm link ' +
    '../cooking-with-amateurs/node_modules/react ' +
    '../cooking-with-amateurs/node_modules/react-dom ' +
    '../cooking-with-amateurs/node_modules/react-router-dom',
  { stdio: 'inherit' },
);
execSync('npm ls react', { stdio: 'inherit' });
execSync('npm ls react-dom', { stdio: 'inherit' });
execSync('npm ls react-router-dom', { stdio: 'inherit' });

console.log(setForegroundColor(CYAN), emphasize('Building chemistry-ui'));
execSync('npm run build', { stdio: 'inherit' });

console.log(setForegroundColor(CYAN), emphasize('Linking chemistry-ui to cooking-with-amateurs'));
process.chdir('../cooking-with-amateurs');
execSync('npm link ../chemistry-ui', { stdio: 'inherit' });
execSync('npm ls chemistry-ui', { stdio: 'inherit' });

console.log(setForegroundColor(GREEN), emphasize('Success!'));
