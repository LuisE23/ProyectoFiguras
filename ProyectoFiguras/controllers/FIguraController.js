
import FiguraService from "../models/FiguraService.js";

class FiguraController{

    figuraServices = null

    constructor(){
        this.figuraServices = new FiguraService();
        this.formularioCalcularArea=this.formularioCalcularArea.bind(this);
        this.calcularAreaFiguras=this.calcularAreaFiguras.bind(this);
        this.calcularPerimetroFiguras=this.calcularPerimetroFiguras(this);
    }

    formularioCalcularArea(request, response){
        response.render ('area');
        response.render ('perimetro');
    }

    calcularAreaFiguras(request, response) {
        let {figura, diagonalMayor, diagonalMenor, baseMayor, baseMenor, altura, base} = request.body;
        let resultado;
        if(figura=== 'rombo'){
            resultado = this.figuraServices.calcularAreaRombo(diagonalMayor, diagonalMenor);
        } 
        else if (figura === 'trapecio'){           
            resultado = this.figuraServices.calcularAreaTrapecio(Number(baseMayor), Number(baseMenor), Number(altura));        
        } 
        else if (figura === 'paralelogramo'){           
            resultado = this.figuraServices.calcularAreaParalelogramo(base, altura);
        }
        response.render ('area', {resultado});
    }
    calcularPerimetroFiguras(request, response) {
        let {figura, baseMayor, baseMenor, base, lado, lado1, lado2} = request.body;
        let resultado;
        if(figura=== 'rombo'){
            resultado = this.figuraServices.calcularPerimetroRombo(lado);
        } 
        else if (figura === 'trapecio'){           
            resultado = this.figuraServices.calcularPerimetroTrapecio(Number(baseMayor), Number(baseMenor), Number(lado1), Number(lado2));        
        } 
        else if (figura === 'paralelogramo'){           
            resultado = this.figuraServices.calcularPerimetroParalelogramo(base, lado);
        }
        response.render ('perimetro', {resultado});
    
    }
}
export default FiguraController;