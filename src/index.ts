import './index.scss';

import { shortcuts } from './shortcut';

window.addEventListener('keydown', ev => {
    if (!(ev instanceof KeyboardEvent)) {
        return;
    }

    shortcuts.forEach(keyMap => {
        console.log(keyMap);
    });
}, { capture: true });