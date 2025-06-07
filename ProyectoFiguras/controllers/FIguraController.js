
import FiguraService from "../models/FiguraService.js";

class FiguraController{

    figuraServices = null

    constructor(){
        this.figuraServices = new FiguraService();
        this.formularioCalcularArea=this.formularioCalcularArea.bind(this);
        this.calcularAreaFiguras=this.calcularAreaFiguras.bind(this);
    }

    formularioCalcularArea(request, response){
        response.render ('area');
    }

    calcularAreaFiguras(request, response) {
        const {figura, diagonalMayor, diagonalMenor, baseMayor, baseMenor, altura, base} = request.body;
        let resultado;
        if(figura==='rombo'){
            resultado = this.figuraServices.calcularAreaRombo(diagonalMayor, diagonalMenor);
        } 
        else if (figura==='trapecio'){           
            resultado = this.figuraServices.calcularAreaTrapecio(Number(baseMayor), Number(baseMenor), Number(altura));        
        } 
        else if (figura==='paralelogramo'){           
            resultado = this.figuraServices.calcularAreaParalelogramo(base, altura);
        }
        response.render ('area', {resultado});
    }
    
}
export default FiguraController;