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
    
    // 数字を抜き出す
    let r = row.replace(/[^0-9]/g, '')
    for (i = r - 1; i > 0; i--) {
        row = 'row' + i
        // row行目col列の情報を取得
        results.push(document.querySelector(`#${row} #${col}`))
    }

    return results
}

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
            let col = e.target.getAttribute('id')
            
            // 上方向の石を取得
            upDisc(row, col)
            // 取得した石の色を変える
            reverseDisc(results, color, enemyColor)
            
            // 石の色を変える
            color = chengeColor(color)
            // 敵の石の色を変える
            enemyColor = changeEnemey(color)
        })
    })
}