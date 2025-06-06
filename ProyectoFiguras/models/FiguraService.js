
class FiguraService{
 //Area y perimetro figura Rombo
    calcularAreaRombo(diagonalMayor = 0, diagonalMenor = 0){
        let resultado = (diagonalMayor * diagonalMenor) / 2;
        return resultado;
    }
    calcularPerimetroRombo(lado = 0){
        let resultado = 4 * lado;
        return resultado;
    }
// Area y perimetro Figura Trapecio
    calcularAreaTrapecio(baseMayor = 0, baseMenor = 0, altura = 0){
        let resultado = ((baseMayor + baseMenor) * altura) / 2;   
        return resultado;     
    }
    calcularPerimetroTrapecio(baseMayor = 0, baseMenor = 0, lado1 = 0, lado2 = 0){
        let resultado =  baseMayor + baseMenor + lado1 + lado2;
        return resultado;
    }
// Area y perimetro Figura Paralelogramo
    calcularAreaParalelogramo(base = 0, altura = 0){
        let resultado = base * altura;
        return resultado;
    }
    calcularPerimetroParalelogramo(base = 0, lado = 0){
        let resultado = 2 * (base + lado);
        return resultado;
    }

}
export default FiguraService;