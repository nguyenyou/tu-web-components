import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('tu-button')
export class Button extends LitElement {
  render() {
    return html`
      <button>
        Button
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tu-button': Button
  }
}
