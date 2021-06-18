import { Refeicao } from './Refeicao';
export class Dieta {
    _id?: string;
    descricao!: string;
    //! digo q n quero inicializar
    data_inicio!: Date;
    data_fim!: Date;
    refeicoes!: Refeicao[];
    //? diz q é opcional
    //usuario!: ver como fazer relacionamento ; 
    //refeicao array!: ver como fazer relacionamento ;

    
}