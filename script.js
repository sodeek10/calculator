function toggleQuadratic() {
    document.querySelector('.Box2').classList.toggle('hidden')
    document.querySelector('.box1').classList.toggle('hidden')
}

let numbers = document.querySelectorAll('.btn')
const input = document.getElementById('box1')


numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        input.value += btn.value
    })
})

function clearDisplay() {
    input.value = ""
}
function Delete() {
    input.value = input.value.slice(0, -1)
}
let signs = document.querySelectorAll('.signs')
signs.forEach(btn => {
    btn.addEventListener('click', () => {
        let sign = ['+', '-', '×', '%', '÷']
        if (sign.includes(input.value.trim()[input.value.length - 1]) || input.value.trim() == '') {
            return;

        } else {
            input.value += btn.value
        }
    })
})
function calculate() {
    if (document.querySelector('.Box2').classList.contains('hidden')) {
        solveEquation()
    } else {
        solveQuad()
    }
}

function solveQuad() {
    let a, b, c;
    a = document.getElementById('a')
    b = document.getElementById('b')
    c = document.getElementById('c')

    a = parseInt(a.value)
    b = parseInt(b.value)
    c = parseInt(c.value)

    let d = b ** 2 - 4 * a * c;
    let rootd = d ** 0.5;

    let root1 = (-b + rootd) / (2 * a);
    let root2 = (-b - rootd) / (2 * a);

    if (root1.toString().includes('.') || root2.toString().includes('.')) {
        root1 = root1.toFixed(2)
        root2 = root2.toFixed(2)
    }

    input.value = `Results = ${root1} or ${root2}`;
    console.log(input.value);
    document.querySelector('.Box2').classList.toggle('hidden')
    document.querySelector('.box1').classList.toggle('hidden')
}

function solveEquation() {
    let value = input.value;
    let splitValue = value.split('')
    let sign = ['+', '-', '×', '%', '÷']

    let newValue1 = splitValue.map(x => x == '×' ? '*' : x)
    let newValue2 = newValue1.map(x => x == '÷' ? '/' : x)

    console.log(newValue2)
    strValue = newValue2.join('')
    input.value = eval(strValue)
}