// import {Car} from './app/ts-course/car';
// import {Animal, Plant} from './app/ts-course/decorator-example';
//
// console.info(Car);
// console.info(Plant);
// console.info(Animal);


// import jQueryFactory = require('jquery');
// const jQuery = jQueryFactory(window, true);

// import './app/styles/styles.less';

// export {Foo} from './app/sandbox/foo';
// import {Foo} from './app/sandbox/foo';
import {Greeter} from './app/greeter/greeter';

export function main(el: HTMLElement): HTMLElement {
    let greeter = new Greeter();
    return greeter.init(el);
}


// let foo = new Foo();
// foo.init();





let boo = document.createElement('div');
let foo2 = main(boo);
document.getElementsByTagName('header')[0].appendChild(foo2);
