import * as $ from 'jquery';
// declare let $: any;

export class Foo {
    private myText = 'Whammo';
    constructor() {

    }

    init() {
        $('header').append(this.myText);
    }
}

// class FancyList extends HTMLElement {
//     constructor () {
//         super();
//         this.style.fontFamily = 'cursive'; // very fancy
//     }
//     connectedCallback() {
//         console.log('Make Way!');
//     }
//     disconnectedCallback() {
//         console.log('I Bid You Adieu.');
//     }
// }
//
// customElements.define('fancy-list', FancyList);
