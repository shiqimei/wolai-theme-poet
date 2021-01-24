import './index.scss';

import { Keyboard } from './keyboard';
import { shortcuts } from './shortcut';

window.addEventListener('keydown', ev => {
    if (ev instanceof KeyboardEvent) {
        for (const { from, to } of shortcuts) {
            if (['Control', 'Meta', 'Shift', 'Alt'].includes(ev.key)) {
                ev.preventDefault();
                return ev.stopImmediatePropagation();
            }
            console.log(ev);

            if (
                from.ctrlKey === ev.ctrlKey &&
                from.altKey === ev.altKey &&
                from.shiftKey === ev.shiftKey &&
                from.metaKey === ev.metaKey &&
                from.key === ev.key
            ) {
                Keyboard.trigger(ev.target, to)

                ev.preventDefault();
                return ev.stopImmediatePropagation();
            }
        }
    }
}, { capture: true });