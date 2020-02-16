export default class OHtmlBlink extends HTMLSpanElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("span");
    wrapper.classList.add("ohtml-blink");
    wrapper.textContent = this.textContent;

    const style = document.createElement("style");

    style.textContent = `
      .ohtml-blink {
        animation: 2s linear infinite condemned_blink_effect;
      }

      @media (prefers-reduced-motion: reduce) {
        .ohtml-blink {
          animation: none;
        }
      }

      @keyframes condemned_blink_effect {
        0% {
          visibility: hidden;
        }
        50% {
          visibility: hidden;
        }
        100% {
          visibility: visible;
        }
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}
