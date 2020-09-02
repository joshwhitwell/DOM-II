// 1-2. Change Header Colors Using Mouseenter and Mouseleave//

Array.from(document.querySelectorAll('h1, h2, h4')).forEach(element => {
    element.addEventListener('mouseenter', event => {
        event.target.style.color = 'dodgerblue'
    })
    element.addEventListener('mouseleave', event => {
        event.target.style.color = ''
    })
})

// 3. Change Font Size with Keydown//

const allText = Array.from(document.querySelectorAll('h1, h2, h3, h4, p'))

document.addEventListener('keydown', event => {
    if (event.key === '+') {
        allText.forEach(element => {element.style.fontSize = '4rem'})
    } 
    if (event.key === '-') {
        allText.forEach(element => {element.style.fontSize = ''})
    }
})

// 4. Change Image Size With Wheel //

Array.from(document.querySelectorAll('img')).forEach(element => {
    //creates scale variable to use in each transform//
    let scale = 1
    element.addEventListener('wheel', event => {
        //prevents page from scrolling//
        event.preventDefault()
        //deltaY returns positive value when scrolling down or negative value when scrolling up; add that to scale//
        scale += event.deltaY * -0.01
        //Limits scale to .125 and 4//
        scale = Math.min(Math.max(.125, scale), 4)
        //Transforms target size by degree of scale//
        event.target.style.transform = `scale(${scale})`
    })
})

// 5. Alert Page Is Loaded On Load //

window.addEventListener('load', event => {
    // alert('The page is fully loaded')
})

// 6-7. Emphasize Links on Focus / De-emphasize on Blur //

Array.from(document.links).forEach(element => {
    element.addEventListener('focus', event => {
        event.target.style.color = 'red'
        event.target.style.fontSize = '3rem'})

    element.addEventListener('blur', event => {
        event.target.style.color = ''
        event.target.style.fontSize = ''})
})

// 8. Hide/Show Sections on Double Click //

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

// 9. Change Image Size on Window Resize //
// const images = Array.from(document.querySelectorAll('img'))

// window.addEventListener('resize', event => {
//     images.forEach(element => {
//         if (element.style.width === '50%') {
//             element.style.width = ''
//         } else {
//             element.style.width = '50%'
//         }
//     })
// })

// 10. Alert Copy Text //

document.addEventListener('copy', event => {
    let selection = document.getSelection()
    alert(`You copied "${selection}" to the clipboard`)
})

// 11-12. Drag & Drop //
let dragged;

Array.from(document.all).forEach(element => {
    element.setAttribute('draggable', true)
    element.classList.add('dropZone')
    document.addEventListener('dragstart', event => {
        dragged = event.target
        document.body.style.background = 'rgb(0, 0, 0, .7)'
    })
    element.addEventListener('dragend', event => {
        document.body.style.background = ''
    })
})

document.addEventListener('dragover', event => {
    event.preventDefault()
}, false)

document.addEventListener('drop', event => {
    event.preventDefault()
    if (event.target.className === 'dropZone') {
        dragged.parentNode.removeChild(dragged)
        event.target.appendChild(dragged)
    }
})

// 13. Nest stopPropagation and Nav Items preventDefault Using Click//
const nav = document.querySelector('nav')
nav.addEventListener('click', event => {
    event.target.style.backgroundColor = 'dodgerblue'
})

Array.from(document.querySelectorAll('a')).forEach(element => element.addEventListener('click', event => {
    event.target.style.color = 'green'
    //Prevents nav event listener from triggering on click of anchor//
    event.stopPropagation()
    //Prevents Links from reloading page//
    event.preventDefault()
}))









