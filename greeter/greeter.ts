export class Greeter {
    element: HTMLElement;
    span: HTMLElement;

    constructor() {
    }

    init(element: HTMLElement): HTMLElement {
        this.element = element;
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = 'KABLAMM!';
        return this.element;
    }
}
