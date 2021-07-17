module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: false,
  endOfLine: 'lf',
  printWidth: 80,
  proseWrap: 'preserve',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  vueIndentScriptAndStyle: true,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
};
