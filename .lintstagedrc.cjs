const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{ts,tsx}': [
    // 型チェック
    () => 'tsc --incremental false --noEmit',
    // next lint
    buildEslintCommand,
    // Prettierフォーマット
    "prettier --write --ignore-path .gitignore './**/*.{js,jsx,ts,tsx,json,css}'",
  ],
};
