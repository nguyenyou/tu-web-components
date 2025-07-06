import type { CSSResult, CSSResultGroup } from 'lit';
import { LitElement, unsafeCSS } from 'lit';

export default class TuElement extends LitElement {
  static css?: CSSResultGroup | CSSResult | string | (CSSResult | string)[];


  static get styles(): CSSResultGroup {
    const styles = Array.isArray(this.css) ? this.css : this.css ? [this.css] : [];
    return [...styles].map(style => (typeof style === 'string' ? unsafeCSS(style) : style));
  }

}