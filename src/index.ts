import './index.scss';
import { shortcuts } from './shortcut';

window.addEventListener('keydown', ev => {
    if (ev instanceof KeyboardEvent) {
        console.log(shortcuts);
        return;
    }
}, { capture: true });