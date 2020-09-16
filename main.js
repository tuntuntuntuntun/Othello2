let color = 'black'

// 石の色を変える
const checkColor = (color) => {
    if (color == 'black') {
        return (color = 'white')
    } else {
        return (color = 'black')
    }
}

window.onload = () => {

    // 石を置く
    Array.from(document.getElementsByClassName('col')).forEach(element => {
        element.addEventListener('click', (e) => {
            e.target.classList.add(color)
            color = checkColor(color)
        })
    })
}