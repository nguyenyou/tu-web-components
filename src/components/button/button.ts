import { html } from "lit";
import { customElement } from "lit/decorators.js";
import TuElement from "../../internal/tu-element.js";
import styles from './button.css?inline';

@customElement("tu-button")
export class TuButton extends TuElement {
  static css = [styles];
  render() {
    return html`
      <button>
        <slot>Button</slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tu-button": TuButton;
  }
}
