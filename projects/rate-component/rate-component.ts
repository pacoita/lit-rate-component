import { css, customElement, html, LitElement, property } from "lit-element";


@customElement('rate-component')
class RateComponent extends LitElement {

    static override styles = css``;

    /**
     * The selected rate value.
     */
    @property()
    value: number = 0;

    /**
     * The allowed star values (default 5).
     */
    @property()
    range: number = 5;

    override render() {

        return html`
        <span>rate: ${this.value} </span>
    `;
    }
}