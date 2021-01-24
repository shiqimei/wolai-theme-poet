import './index.scss';

console.log('Hello World!');
window.addEventListener('keydown', ev => {
    console.log(ev.key, ev.metaKey);
}, { capture: true });