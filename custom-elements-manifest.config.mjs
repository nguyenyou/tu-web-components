import { customElementJetBrainsPlugin } from 'custom-element-jet-brains-integration';
import { customElementVsCodePlugin } from 'custom-element-vs-code-integration';

const outdir = 'dist';

export default {
  // Analyze all TypeScript files in the components folder
  globs: ['src/components/**/*.ts'],

  // Enable LitElement support so that the analyzer correctly interprets Lit-specific decorators
  litelement: true,
  outdir,

  // Generate IDE integration files so that our components have rich IntelliSense support
  plugins: [
    // JetBrains IDEs (WebStorm, IntelliJ, etc.)
    customElementJetBrainsPlugin({
      outdir,
      excludeCss: true,
      packageJson: false,
    }),

    // Visual Studio Code
    customElementVsCodePlugin({
      outdir,
      cssFileName: null,
    }),
  ],
}; 