// 1. Change Header Colors Using Mouseenter and Mouseleave//

Array.from(document.querySelectorAll('h1, h2, h4')).forEach(element => {
    element.addEventListener('mouseenter', event => {
        event.target.style.color = 'dodgerblue'
    })
    element.addEventListener('mouseleave', event => {
        event.target.style.color = ''
    })
})

// 2. Change Font Size with Keydown//
const allText = Array.from(document.querySelectorAll('h1, h2, h3, h4, p'))

document.addEventListener('keydown', event => {
    if (event.key === '+') {
        allText.forEach(element => {element.style.fontSize = '4rem'})
    } 
    if (event.key === '-') {
        allText.forEach(element => {element.style.fontSize = ''})
    }
})

// 3. Change Image Size With Wheel //

Array.from(document.querySelectorAll('img')).forEach(element => {
    let scale = 1
    element.addEventListener('wheel', event => {
        event.preventDefault()
        scale += event.deltaY * -0.01
        scale = Math.min(Math.max(.125, scale), 4)
        event.target.style.transform = `scale(${scale})`
    })
})

// 4. Alert Page Is Loaded On Load //

window.addEventListener('load', event => {
    // alert('The page is fully loaded')
})

// 5. Emphasize Links on Focus / on Blur //

Array.from(document.links).forEach(element => {
    element.addEventListener('focus', event => {
        event.target.style.color = 'red'
        event.target.style.fontSize = '3rem'})

    element.addEventListener('blur', event => {
        event.target.style.color = ''
        event.target.style.fontSize = ''})
})








