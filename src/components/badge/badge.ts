import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import TuElement from "../../internal/tu-element.js";
import styles from './badge.css?inline';

@customElement("tu-badge")
export class TuBadge extends TuElement {
  static css = [styles];

  @property({ reflect: true }) variant: 'brand' | 'neutral' | 'success' | 'warning' | 'danger' = 'brand';
  
  render() {
    return html` <slot part="base" role="status"></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tu-badge": TuBadge;
  }
}
