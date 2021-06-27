import './index.scss'

import { Keyboard } from './keyboard'
import { shortcuts } from './shortcut'

// 按键重映射
window.addEventListener('keydown', ev => {
    if (ev instanceof KeyboardEvent) {
        for (const { from, to } of shortcuts) {
            if (['Control', 'Meta', 'Shift', 'Alt'].includes(ev.key)) {
                ev.preventDefault()
                return ev.stopImmediatePropagation()
            }

            if (
                from.ctrlKey === ev.ctrlKey &&
                from.altKey === ev.altKey &&
                from.shiftKey === ev.shiftKey &&
                from.metaKey === ev.metaKey &&
                from.key === ev.key
            ) {
                Keyboard.trigger(ev.target, to)

                ev.preventDefault()
                return ev.stopImmediatePropagation()
            }
        }
    }
}, { capture: true })

// 自动点击加载更多 5 次
setTimeout(() => {
    const loadMoreButton = document.querySelector('#private-tree nav>div:last-child') as HTMLDivElement
    for (let i = 0; i < 5; i++) loadMoreButton.click()
}, 500)