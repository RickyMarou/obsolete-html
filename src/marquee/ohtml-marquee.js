export default class OHtmlMarquee extends HTMLDivElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("div");
    wrapper.classList.add("ohtml-marquee");
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

  updateStyles() {
    this.behavior = this.getAttribute("behavior");
    this.bgcolor = this.getAttribute("bgcolor");
    this.height = this.getAttribute("height");
    this.hspace = this.getAttribute("hspace");
    this.loop = this.getAttribute("loop");
    this.scrollamount = this.getAttribute("scrollamount");
    this.scrolldelay = this.getAttribute("scrolldelay");
    this.truespeed = this.getAttribute("truespeed");
    this.vspace = this.getAttribute("vspace");
    this.width = this.getAttribute("width");
  }
}
