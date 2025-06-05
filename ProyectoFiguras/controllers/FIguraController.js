
import FiguraService from "../models/FiguraService";
class FiguraController{

    figuraServices = null

    constructor(){
        this.figuraServices = new FiguraService();
        this.formularioCalcularArea=this.formularioCalcularArea.bind(this);
        this.calcularAreaFiguras=this.calcularAreaFiguras.bind(this);
    }

    formularioCalcularArea(request, reponse){
        reponse.render ('area');
    }

    calcularAreaFiguras(){
        const {figura, base, altura,} = request.body;
        let resultado;
        if(figura==='rombo'){
            resultado = this.figuraServices.calcularAreaRombo(diagonalMayor, diagonalMenor);
        } else if (figura==='trapecio'){
            resultado = this.figuraServices.
        }
    }
    
}
export default FiguraController;