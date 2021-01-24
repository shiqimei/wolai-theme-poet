interface IKeyMap {
    from: string;
    to: string;
}

export const shortcuts = [
    { from: 'ctrl+n', to: 'ArrowDown' },
    { from: 'ctrl+p', to: 'ArrowUp' },
] as Array<IKeyMap>;