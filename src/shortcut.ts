interface IShortcutMap {
    from: IShortcut;
    to: IShortcut;
}

interface IShortcut {
    ctrlKey: boolean;
    metaKey: boolean;
    altKey: boolean;
    shiftKey: boolean;
    key: string;
}

const parseShortcut = (sct: string): IShortcut => {
    const shortcut = {
        ctrlKey: false,
        metaKey: false,
        altKey: false,
        shiftKey: false,
        key: ''
    };

    sct.split('+')
        .forEach(key => {
            if (key.toLowerCase() === 'ctrl') {
                return shortcut.ctrlKey = true;
            }
            if (['meta', 'command'].includes(key.toLowerCase())) {
                return shortcut.metaKey = true;
            }
            if (key.toLowerCase() === 'alt') {
                return shortcut.altKey = true;
            }
            if (key.toLowerCase() === 'shift') {
                return shortcut.shiftKey = true;
            }
            return shortcut.key = key;
        });

    return shortcut;
}

export const shortcuts = [
    { from: 'ctrl+n', to: 'ArrowDown' },
    { from: 'ctrl+p', to: 'ArrowUp' },
]
    .map(({ from, to }) => ({
        from: parseShortcut(from),
        to: parseShortcut(to)
    })) as IShortcutMap[];
