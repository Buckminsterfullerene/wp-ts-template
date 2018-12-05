// import './greeter.less';
import './greeter.scss';
import greeterHTML from './greeter.html';

export class Greeter {
    element: HTMLElement;
    span: HTMLElement;

    private makeGreeterHTML() {
        let bodyEl = document.getElementsByTagName('body')[0];
        let html = greeterHTML;
        console.info(greeterHTML);
        // bodyEl.appendChild(html);
    }

    constructor() {
    }

    init(element: HTMLElement): HTMLElement {
        this.element = element;
        this.element.classList.add('greeter-hdr');
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = 'KABLAMM!';

        this.makeGreeterHTML();

        return this.element;
    }
}
