function calcularIngresso(idade, isEstudante){
    if(idade <= 5) return 0
    if(idade >= 65) return 20
    if(isEstudante) return 25
    return 50
}
module.exports = calcularIngresso;