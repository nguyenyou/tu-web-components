import { setCustomElementsManifest } from '@storybook/web-components-vite';
import type { Preview } from '@storybook/web-components-vite'

import customElements from "../dist/custom-elements.json";

// Components - Auto-import all components via barrel export
import '../src/index.js';

setCustomElementsManifest(customElements);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;