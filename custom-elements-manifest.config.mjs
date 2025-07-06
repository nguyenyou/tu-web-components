export default {
  // Analyze all TypeScript files in the components folder
  globs: ['src/components/**/*.ts'],

  // Enable LitElement support so that the analyzer correctly interprets Lit-specific decorators
  litelement: true,
}; 