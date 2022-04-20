import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('rate-component')
class RateComponent extends LitElement {

    static override styles = css`
        .wrapper {
            border: 1px solid black;
            border-radius: 4px;
        }
        ul {
            display: flex;
            padding: 0.5rem;
            margin: 0;
        }
        li {
            list-style: none;
            margin-right: 0.25rem;
            cursor: pointer;
        }
        li:last-child {
            margin-right:0;
        }
    `;

    /**
     * The selected rate value.
     */
    @property({ type: Number })
    value: number = 0;

    /**
     * The allowed star values (default 5).
     */
    @property({ type: Number })
    range: number = 5;

    /**
     * The icon size (width & height will use the same value).
     */
    @property({ type: String })
    iconSize: string = '1.5rem';

    override render() {
        const starsSlots = this.createStarsTemplate(this.range);

        return html`
            <ul class="wrapper">
                ${starsSlots}
            </ul>
        `;
    }

    private createStarsTemplate(range: number) {
        const starsSlots: any[] = [];
        for (let i = 0; i < range; i++) {
            const starTemplate = i <= this.value ?
                html`<li><svg width="${this.iconSize}" height="${this.iconSize}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.1"><defs><style>.cls-1{fill:#ffd401;}</style></defs><title>star-symbol</title><path class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"/></svg></li>` :
                html`<li><svg width="${this.iconSize}" height="${this.iconSize}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.42"><path d="M66.71 3.55L81.1 37.26l36.58 3.28v-.01c1.55.13 2.91.89 3.85 2.01a5.663 5.663 0 011.32 4.13v.01a5.673 5.673 0 01-1.69 3.57c-.12.13-.25.25-.39.36L93.25 74.64l8.19 35.83c.35 1.53.05 3.06-.73 4.29a5.652 5.652 0 01-3.54 2.52l-.14.03c-.71.14-1.43.15-2.12.02v.01c-.75-.13-1.47-.42-2.11-.84l-.05-.03-31.3-18.71-31.55 18.86a5.664 5.664 0 01-7.79-1.96c-.38-.64-.62-1.33-.73-2.02-.1-.63-.09-1.27.02-1.89.02-.13.04-.27.08-.4l8.16-35.7c-9.24-8.07-18.74-16.1-27.83-24.3l-.08-.08a5.64 5.64 0 01-1.72-3.7c-.1-1.45.36-2.93 1.4-4.12l.12-.13.08-.08a5.668 5.668 0 013.77-1.72h.06l36.34-3.26 14.44-33.8c.61-1.44 1.76-2.5 3.11-3.05 1.35-.54 2.9-.57 4.34.04.69.29 1.3.71 1.8 1.22.53.53.94 1.15 1.22 1.82l.02.06zm10.19 37.2L61.85 5.51a.42.42 0 00-.09-.14.42.42 0 00-.14-.09.427.427 0 00-.35 0c-.1.04-.19.12-.24.24L45.98 40.75c-.37.86-1.18 1.49-2.18 1.58l-37.9 3.4c-.08.01-.16.02-.24.02-.06 0-.13.02-.18.05-.03.01-.05.03-.07.05l-.1.12c-.05.08-.07.17-.06.26.01.09.04.18.09.25.06.05.13.11.19.17l28.63 25c.77.61 1.17 1.62.94 2.65l-8.51 37.22-.03.14c-.01.06-.02.12-.01.17a.454.454 0 00.33.36c.12.03.24.02.34-.04l32.85-19.64c.8-.5 1.85-.54 2.72-.02L95.43 112c.08.04.16.09.24.14.05.03.1.05.16.06v.01c.04.01.09.01.14 0l.04-.01c.12-.03.22-.1.28-.2.06-.09.08-.21.05-.33L87.8 74.28a2.6 2.6 0 01.83-2.55l28.86-25.2c.04-.03.07-.08.1-.13.02-.04.03-.1.04-.17a.497.497 0 00-.09-.33.48.48 0 00-.3-.15v-.01c-.01 0-.03 0-.03-.01l-37.97-3.41c-1-.01-1.93-.6-2.34-1.57z" fill="#ffcf00"/></svg></li>`;
            starsSlots.push(starTemplate);
        }
        return starsSlots;
    }
}