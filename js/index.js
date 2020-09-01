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

// 6. Hide/Show Sections on Double Click //
const destinationDivs = Array.from(document.querySelectorAll('.destination h4, .destination p'))

Array.from(document.querySelectorAll('.btn')).forEach(element => {
    element.addEventListener('dblclick', event => {
        for (let i = 0; i < destinationDivs.length; i++)
        if (destinationDivs[i].style.display === 'none') {
            destinationDivs[i].style.display = ''
        } else {
            destinationDivs[i].style.display = 'none'
        }
    })
})

// 7. Change Image Size on Window Resize //

const images = Array.from(document.querySelectorAll('img'))

window.addEventListener('resize', event => {
    images.forEach(element => {
        if (element.style.width === '50%') {
            element.style.width = ''
        } else {
            element.style.width = '50%'
        }
    })
})

// 8. Alert Copy Text //

document.addEventListener('copy', event => {
    let selection = document.getSelection()
    alert(`You copied "${selection}" to the clipboard`)
})

// 9. Change Background on Scroll //
document.addEventListener('scroll', event => {
    if (document.body.style.backgroundColor === '') {
        document.body.style.backgroundColor = 'red'
    } else {
        document.body.style.backgroundColor = ''
    }
})

// 10. Nest stopPropagation and Nav Items preventDefault Using Click//
const nav = document.querySelector('nav')
nav.addEventListener('click', event => {
    event.target.style.backgroundColor = 'dodgerblue'
})

Array.from(document.querySelectorAll('a')).forEach(element => element.addEventListener('click', event => {
    event.target.style.color = 'green'
    event.stopPropagation()
    event.preventDefault()
}))









