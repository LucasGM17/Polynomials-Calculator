// Variables

// Terms

const inputtxt = document.querySelectorAll('.inputtxt')

const a_term = document.getElementById('a-term')
const b_term = document.getElementById('b-term')
const c_term = document.getElementById('c-term')

// res div

const res = document.getElementById('res')

// Button

const btn = document.getElementById('btn')

// Functions

function Discriminant(a, b, c) {
    let disc = b**2 - 4*a*c
    return disc
}

function QuadForm() {
    let letternumber = /^[a-zA-Z]+$/
    if(a_term.value.length === 0 || b_term.value.length === 0 || c_term.value.length === 0) {
        alert('The terms are empty!')
    } else if(a_term.value.match(letternumber) || b_term.value.match(letternumber) || c_term.value.match(letternumber)) {
        alert('Not a number!')
    }
    else {

        let num_a = Number(a_term.value)
        let num_b = Number(b_term.value)
        let num_c = Number(c_term.value)
        
        let disc = Discriminant(num_a, num_b, num_c)
        
        // Adding answer
        
        let AddResult = -num_b + Math.sqrt(disc)
        AddResult = AddResult / (num_a * 2)
        
        // Subtracting answer
        
        let SubResult = -num_b - Math.sqrt(disc)
        SubResult = SubResult / (num_a * 2)
        DisplayResults(AddResult.toFixed(5), SubResult.toFixed(5))
    }
}

function DisplayResults(res1, res2) {
    res.innerHTML = `
    <p>The results are: </p>
    <p>X = ${res1} and X = ${res2}</p>`

}

btn.addEventListener('click', QuadForm)
