let keyboard = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
]
// https://www.javascripttutorial.net/javascript-multidimensional-array/
function qwerty(word) {
    let arrayOfDirections = []

    console.table(keyboard)
    let startingPoint = 'q'
    for (let char of word) {
        if (startingPoint === 'q') {
            if (keyboard[0].includes(char)) {
                let distance = keyboard[0].indexOf(char)
                while (distance > 0) {
                    arrayOfDirections.push('right')
                    distance -= 1
                }
                arrayOfDirections.push('select')
                startingPoint = char
            } else if (keyboard[1].includes(char)) {
                let distance = keyboard[1].indexOf(char)
                while (distance > 0) {
                    arrayOfDirections.push('right')
                    distance -= 1
                }
                arrayOfDirections.push('select')
                startingPoint = char
            } else {
                let distance = keyboard[2].indexOf(char)
                while (distance > 0) {
                    arrayOfDirections.push('right')
                    distance -= 1
                }
                arrayOfDirections.push('select')
                startingPoint = char
            }
            console.log('DIRECTIONS', arrayOfDirections)
        } //q
    }
    console.log('STARTING POINT', startingPoint)
    keyboard.forEach((row) => {
        if (row.includes(startingPoint)) {
            console.log(row.indexOf(startingPoint))
            for (let char of word) {
                if (char == startingPoint) {
                    console.log(char)
                }
            }
        }
    })
}
qwerty('mat')
