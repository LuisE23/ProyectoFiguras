
class FiguraService{
 //Area y perimetro figura Rombo
    calcularAreaRombo(diagonalMayor = 0, diagonalMenor = 0){
        let resultado = (diagonalMayor * diagonalMenor) / 2;
        return resultado;
    }
    calcularPerimetroRombo(lado = 0){
        return 4 * lado;
    }
// Area y perimetro Figura Trapecio
    calcularAreaTrapecio(baseMayor = 0, baseMenor = 0, altura = 0){
        return ((baseMayor + baseMenor) * altura) / 2;        
    }
    calcularPerimetroTrapecio(baseMayor = 0, baseMenor = 0, lado1 = 0, lado2 = 0){
        return baseMayor + baseMenor + lado1 + lado2;
    }
// Area y perimetro Figura Paralelogramo
    calcularAreaParalelogramo(base = 0, altura = 0){
        return base * altura;
    }
    calcularPerimetroParalelogramo(base = 0, lado = 0){
        return 2 * (base + lado);
    }

}
export default FiguraService;