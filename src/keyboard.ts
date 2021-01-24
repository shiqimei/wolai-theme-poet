import { IShortcut} from './shortcut';

interface INumberDict {
    [key: string]: number;
}

const keycodes: INumberDict = {
    'ArrowDown': 40,
    'ArrowUp': 38
};

export const Keyboard = new class {
    trigger(target: EventTarget, shortcut: IShortcut) {
        const event = new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            ...shortcut,
            code: shortcut.key,
            keyCode: keycodes[shortcut.key]
        });
        console.log('dispatched event', shortcut);
        target.dispatchEvent(event);
    }
};