const show_pw_btn = document.querySelector('#show_passwd');
const show_pw_icon = document.querySelector('img');
const pw_input = document.querySelector('#password')

show_pw_btn.addEventListener('click', () => {
    pw_input.type = pw_input.type === 'password' ? 'text' : 'password'
    show_pw_icon.src = show_pw_icon.src.includes('open') ? 'eye_close.svg' : 'eye_open.svg'
})