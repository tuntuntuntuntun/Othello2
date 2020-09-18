let color = 'black'
let enemyColor = 'white'

// 石の色を変える
const chengeColor = (color) => {
    if (color == 'black') {
        return color = 'white'
    } else {
        return color = 'black'
    }
}

// 敵の石の色を変える
const changeEnemey = (color) => {
    if (color == 'black') {
        return enemyColor = 'white'
    } else {
        return enemyColor = 'black'
    }
}

// 上方向の石を取得
const upDisc = (row, col) => {
    results = []
    col = col.replace(/[^0-9]/g, '')
    col = 'col' + col
    
    // 数字を抜き出す
    let r = Number(row.replace(/[^0-9]/g, ''))
    for (i = r - 1; i > 0; i--) {
        row = 'row' + i
        // row行col列目の情報を取得
        results.push(document.querySelector(`#${row} .${col}`))
    }

    return results
}

// 右方向の石を取得
const rightDisc = (row, col) => {
    results = []
    
    // 数字を抜き出す
    let c = Number(col.replace(/[^0-9]/g, ''))
    for (i = c + 1; i < 9; i++) {
        col = 'col' + i
        // row行目col列目の情報を取得
        results.push(document.querySelector(`#${row} .${col}`))
    }

    return results
}

// 下方向の石を取得
const downDisc = (row, col) => {
    results = []
    col = col.replace(/[^0-9]/g, '')
    col = 'col' + col
    
    // 数字を抜き出す
    let r = Number(row.replace(/[^0-9]/g, ''))
    for (i = r + 1; i < 9; i++) {
        row = 'row' + i
        // row行目col列目の情報を取得
        results.push(document.querySelector(`#${row} .${col}`))
    }

    return results
}

// 左方向の石を取得
const leftDisc = (row, col) => {
    results = []

    // 数字を抜き出す
    let c = Number(col.replace(/[^0-9]/g, ''))
    for (i = c - 1; i > 0; i--) {
        col = 'col' + i
        // row行目col列目の情報を取得
        results.push(document.querySelector(`#${row} .${col}`))
    }

    return results
}

// 右上方向の石を取得
const upRightDisc = (row, col) => {
    results = []

    let r = Number(row.replace(/[^0-9]/g, ''))    
    let c = Number(col.replace(/[^0-9]/g, ''))
    while (r - 1 > 0 && c + 1 < 9) {
        r--
        c++

        row = 'row' + r
        col = 'col' + c

        results.push(document.querySelector(`#${row} .${col}`))
    }

    return results
}

// 右下方向の石を取得
const downRightDisc = (row, col) => {
    results = []

    let r = Number(row.replace(/[^0-9]/g, ''))    
    let c = Number(col.replace(/[^0-9]/g, ''))
    while (r + 1 < 9 && c + 1 < 9) {
        r++
        c++

        row = 'row' + r
        col = 'col' + c

        results.push(document.querySelector(`#${row} .${col}`))
    }

    return results
}

// 左下方向の石を取得
const downLeftDisc = (row, col) => {
    results = []

    let r = Number(row.replace(/[^0-9]/g, ''))    
    let c = Number(col.replace(/[^0-9]/g, ''))
    while (r + 1 < 9 && c - 1 > 0) {
        r++
        c--

        row = 'row' + r
        col = 'col' + c

        results.push(document.querySelector(`#${row} .${col}`))
    }

    return results
}

// 左上方向の石を取得
const upLeftDisc = (row, col) => {
    results = []

    let r = Number(row.replace(/[^0-9]/g, ''))    
    let c = Number(col.replace(/[^0-9]/g, ''))
    while (r - 1 > 0 && c - 1 > 0) {
        r--
        c--

        row = 'row' + r
        col = 'col' + c

        results.push(document.querySelector(`#${row} .${col}`))
    }

    return results
}

// 石の色を変える
function reverseDisc (results, color, enemyColor)
{
    reverses = []
    
    for (result of results) {
        let resultClass = result.getAttribute('class')

        // 相手の色があったとき
        if (resultClass.match(enemyColor)) {
            reverses.push(result)
        }
        // 自分の色があったとき
        else if (resultClass.match(color)) {
            // 色を変えるべき石があったとき
            if (reverses.length) {
                for (reverse of reverses) {
                    reverse.classList.add((color))
                    reverse.classList.remove((enemyColor))
                }
            } else {
                return
            }
        } else {
            return
        }
    }
}

window.onload = () => {
    // 石を置く
    Array.from(document.getElementsByClassName('col')).forEach(element => {
        element.addEventListener('click', (e) => {
            e.target.classList.add(color)
            
            // クリックされたマスの行・列を取得
            let row = e.target.parentNode.getAttribute('id')
            let col = e.target.className
            
            everyDirection = [
                // 上方向の石を取得
                upDisc(row, col),
                // 右
                rightDisc(row, col),
                // 下
                downDisc(row, col),
                // 左
                leftDisc(row, col),
                // 右上
                upRightDisc(row, col),
                // 右下
                downRightDisc(row, col),
                // 左下
                downLeftDisc(row, col),
                // 左上
                upLeftDisc(row, col)
            ];

            for (result of everyDirection) {
                // 取得した石の色を変える
                reverseDisc(result, color, enemyColor)
            }
            
            // 石の色を変える
            color = chengeColor(color)
            // 敵の石の色を変える
            enemyColor = changeEnemey(color)
        })
    })
}