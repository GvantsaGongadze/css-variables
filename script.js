let base = getComputedStyle(document.documentElement).getPropertyValue('--base');
let spacing = getComputedStyle(document.documentElement).getPropertyValue('--spacing');
let blur = getComputedStyle(document.documentElement).getPropertyValue('--blur');

let colorPicker = document.querySelector('input[name=base]');
let pickedSpacing = document.querySelector('input[name=spacing]');
let pickedBlur = document.querySelector('input[name=blur]');


colorPicker.addEventListener('input', e => {
    document.documentElement.style.setProperty('--base', colorPicker.value)
})

pickedSpacing.addEventListener('input', e => {
    document.documentElement.style.setProperty('--spacing', pickedSpacing.value + 'px')
})

pickedBlur.addEventListener('input', e => {
    document.documentElement.style.setProperty('--blur', pickedBlur.value + 'px')
})