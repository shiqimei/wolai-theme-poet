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
}, 1500)

// 更新默认图为我的头像
const defaultFavicon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAFAAAAACy3fD9AAABG0lEQVQ4Ee2UMU7DMBSG04DElLFIHIChaiSO0ali4BwcARZUpp6gh2BAAlU9QZcuPQVtOrQbCNHy/a6NEikWT4nExC99tuO89yd24pckR13RzWAHezgY+SJuC6+Qg5PMNmA1icWt8cg7NFMYwBLuoAAlWaT8LjxCH17AvbIMhrpoqBvy5LFJaTJvomU3lVYlZTIUknWZx+hqG3LTYFa93eLq37DF5vnUP9nDSx42gXs48w82d6c1kU/MhYOuwz+qiYlO1S35ohRdHpem40MZhr9cB126hRUsYAwWhVyVvp/icG3JjMSE4lBoD+eg8qW9OoFQGxn+Kr3ZOTz4SHm5D6DiqKW34Y38Hjjpq6o4qgx9wKeRd5/zTO/MvgGHOWNG89+XIAAAAABJRU5ErkJggg==`
const avatar = `https://secure.wostatic.cn/icon%2FwXKikVstmrJGrfhmEDu82D%2Fcat.png?auth_key=1625120203-p5tZLJ9ic4x8VyXj6qfxav-0-50336f1d9f55c5e3b7299df89866e99d&image_process=resize,w_48`

setTimeout(() => {
    const faviconElements = document.querySelectorAll("link[rel~='icon']") as NodeListOf<HTMLLinkElement>
    faviconElements.forEach(favicon => {
        favicon.href = avatar
        const ovserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'attributes') {
                    favicon.href = avatar
                }
            })
        })
    })
}, 1000)