window.onload = () => {
    // 石を置く
    Array.from(document.getElementsByClassName('col')).forEach(element => {
        element.addEventListener('click', (e) => {
            e.target.classList.add('black')
        })
    })
}