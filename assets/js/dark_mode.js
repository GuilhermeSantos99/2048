const togBtn = document.getElementById('togBtn')
const rootElement = document.documentElement

const lightTheme = {
    '--background-color': '#faf8ef',
    '--font-color': '#776e65'
}

const darkTheme = {
    '--background-color': '#696969',
    '--font-color': '#DAA520',
}

togBtn.addEventListener('change', function () {
    const isChecked = togBtn.checked
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})

function changeTheme(theme) {
    for(let prop in theme){
        changeProperty(prop, theme[prop])
    }
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value)
}