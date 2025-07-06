import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('tu-button')
export class TuButton extends LitElement {
  render() {
    return html`
      <button>
        <slot>Button</slot>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tu-button': TuButton
  }
}
