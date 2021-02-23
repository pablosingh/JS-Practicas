
const $inputList = document.querySelectorAll('input')
const $overlay = document.querySelector('#overlay')

$inputList.forEach($input => {
    $input.addEventListener('focus', focus)
    $input.addEventListener('blur', blur)
})

$overlay.addEventListener('click', (event) => {
    console.log(event)
    $overlay.classList.remove('is-active')
    const $maybeIsAnInput = document.elementFromPoint(event.clientX, event.clientY)
    if ($maybeIsAnInput.tagName === 'INPUT') {
    $maybeIsAnInput.focus()
    }
})

function focus(event) {
    console.log('focus')
    event.target.classList.add('is-active')
    $overlay.classList.add('is-active')
}

function blur(event) {
    console.log('blur')
    event.target.classList.remove('is-active')
    // $overlay.classList.remove('is-active')
}