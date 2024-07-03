
function verificar() {
    let campoA = document.getElementById('campo1').value
    let campoB = document.getElementById('campo2').value
    let campoC = document.getElementById('campo3').value
    let campoD = document.getElementById('campo4').value
    let V = 'V'
    let v = 'v'
    let f = 'f'
    let F = 'F'
    if (campoA == V || campoA == v) {
        campo1.style.background = '#83E509'
    } else {
        campo1.style.background = 'red'
    }

    if (campoB == F || campoB == f) {
        campo2.style.background = '#83E509'
    } else {
        campo2.style.background = 'red'
    }

    if (campoC == F || campoC == f) {
        campo3.style.background = '#83E509'
    } else {
        campo3.style.background = 'red'
    }

    if (campoD == F || campoD == f) {
        campo4.style.background = '#83E509'
    } else {
        campo4.style.background = 'red'
    }
}

function limpar() {
    let limpA = document.getElementById('campo1').value = ''
    let limpB = document.getElementById('campo2').value = ''
    let limpC = document.getElementById('campo3').value = ''
    let limpD = document.getElementById('campo4').value = ''
    if (limpA == 0 || limpB == 0 || limpC == 0 || limpD == 0) {
        limpA.innerHTML = ''
        limpB.innerHTML = ''
        limpC.innerHTML = ''
        limpD.innerHTML = ''
        campo1.style.background = ''
        campo2.style.background = ''
        campo3.style.background = ''
        campo4.style.background = ''
    }
}


function verificar2() {
    let campo2A = document.getElementById('campo2_1').value
    let campo2B = document.getElementById('campo2_2').value
    let campo2C = document.getElementById('campo2_3').value
    let campo2D = document.getElementById('campo2_4').value
    let V = 'V'
    let v = 'v'
    let f = 'f'
    let F = 'F'
    if (campo2A == V || campo2A == v) {
        campo2_1.style.background = '#83E509'
    } else {
        campo2_1.style.background = 'red'
    }

    if (campo2B == V || campo2B == v) {
        campo2_2.style.background = '#83E509'
    } else {
        campo2_2.style.background = 'red'
    }

    if (campo2C == V || campo2C == v) {
        campo2_3.style.background = '#83E509'
    } else {
        campo2_3.style.background = 'red'
    }

    if (campo2D == F || campo2D == f) {
        campo2_4.style.background = '#83E509'
    } else {
        campo2_4.style.background = 'red'
    }
}

function limpar2() {
    let limp2A = document.getElementById('campo2_1').value = ''
    let limp2B = document.getElementById('campo2_2').value = ''
    let limp2C = document.getElementById('campo2_3').value = ''
    let limp2D = document.getElementById('campo2_4').value = ''
    if (limp2A == 0 || limp2B == 0 || limp2C == 0 || limp2D == 0) {
        limp2A.innerHTML = ''
        limp2B.innerHTML = ''
        limp2C.innerHTML = ''
        limp2D.innerHTML = ''
        campo2_1.style.background = ''
        campo2_2.style.background = ''
        campo2_3.style.background = ''
        campo2_4.style.background = ''
    }
}


function verificar3() {
    let campo3A = document.getElementById('campo3_1').value
    let campo3B = document.getElementById('campo3_2').value
    let campo3C = document.getElementById('campo3_3').value
    let campo3D = document.getElementById('campo3_4').value
    let V = 'V'
    let v = 'v'
    let f = 'f'
    let F = 'F'
    if (campo3A == F || campo3A == f) {
        campo3_1.style.background = '#83E509'
    } else {
        campo3_1.style.background = 'red'
    }

    if (campo3B == V || campo3B == v) {
        campo3_2.style.background = '#83E509'
    } else {
        campo3_2.style.background = 'red'
    }

    if (campo3C == V || campo3C == v) {
        campo3_3.style.background = '#83E509'
    } else {
        campo3_3.style.background = 'red'
    }

    if (campo3D == F || campo3D == f) {
        campo3_4.style.background = '#83E509'
    } else {
        campo3_4.style.background = 'red'
    }
}

function limpar3() {
    let limp3A = document.getElementById('campo3_1').value = ''
    let limp3B = document.getElementById('campo3_2').value = ''
    let limp3C = document.getElementById('campo3_3').value = ''
    let limp3D = document.getElementById('campo3_4').value = ''
    if (limp3A == 0 || limp3B == 0 || limp3C == 0 || limp3D == 0) {
        limp3A.innerHTML = ''
        limp3B.innerHTML = ''
        limp3C.innerHTML = ''
        limp3D.innerHTML = ''
        campo3_1.style.background = ''
        campo3_2.style.background = ''
        campo3_3.style.background = ''
        campo3_4.style.background = ''
    }
}

function verificar4() {
    let campo4A = document.getElementById('campo4_1').value
    let campo4B = document.getElementById('campo4_2').value
    let campo4C = document.getElementById('campo4_3').value
    let campo4D = document.getElementById('campo4_4').value
    let V = 'V'
    let v = 'v'
    let f = 'f'
    let F = 'F'
    if (campo4A == V || campo4A == v) {
        campo4_1.style.background = '#83E509'
    } else {
        campo4_1.style.background = 'red'
    }

    if (campo4B == F || campo4B == f) {
        campo4_2.style.background = '#83E509'
    } else {
        campo4_2.style.background = 'red'
    }

    if (campo4C == V || campo4C == v) {
        campo4_3.style.background = '#83E509'
    } else {
        campo4_3.style.background = 'red'
    }

    if (campo4D == V || campo4D == v) {
        campo4_4.style.background = '#83E509'
    } else {
        campo4_4.style.background = 'red'
    }
}

function limpar4() {
    let limp4A = document.getElementById('campo4_1').value = ''
    let limp4B = document.getElementById('campo4_2').value = ''
    let limp4C = document.getElementById('campo4_3').value = ''
    let limp4D = document.getElementById('campo4_4').value = ''
    if (limp4A == 0 || limp4B == 0 || limp4C == 0 || limp4D == 0) {
        limp4A.innerHTML = ''
        limp4B.innerHTML = ''
        limp4C.innerHTML = ''
        limp4D.innerHTML = ''
        campo4_1.style.background = ''
        campo4_2.style.background = ''
        campo4_3.style.background = ''
        campo4_4.style.background = ''
    }
}


function verificar5() {
    let campo5A = document.getElementById('campo5_1').value
    let campo5B = document.getElementById('campo5_2').value
    let campo5C = document.getElementById('campo5_3').value
    let campo5D = document.getElementById('campo5_4').value
    let V = 'V'
    let v = 'v'
    let f = 'f'
    let F = 'F'
    if (campo5A == V || campo5A == v) {
        campo5_1.style.background = '#83E509'
    } else {
        campo5_1.style.background = 'red'
    }

    if (campo5B == F || campo5B == f) {
        campo5_2.style.background = '#83E509'
    } else {
        campo5_2.style.background = 'red'
    }

    if (campo5C == F || campo5C == f) {
        campo5_3.style.background = '#83E509'
    } else {
        campo5_3.style.background = 'red'
    }

    if (campo5D == V || campo5D == v) {
        campo5_4.style.background = '#83E509'
    } else {
        campo5_4.style.background = 'red'
    }
}

function limpar5() {
    let limp5A = document.getElementById('campo5_1').value = ''
    let limp5B = document.getElementById('campo5_2').value = ''
    let limp5C = document.getElementById('campo5_3').value = ''
    let limp5D = document.getElementById('campo5_4').value = ''
    if (limp5A == 0 || limp5B == 0 || limp5C == 0 || limp5D == 0) {
        limp5A.innerHTML = ''
        limp5B.innerHTML = ''
        limp5C.innerHTML = ''
        limp5D.innerHTML = ''
        campo5_1.style.background = ''
        campo5_2.style.background = ''
        campo5_3.style.background = ''
        campo5_4.style.background = ''
    }
}