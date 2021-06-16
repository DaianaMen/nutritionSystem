import { Usuario } from './Usuario';
export class Dieta {
    _id?: string;
    descricao!: string;
    //! digo q n quero inicializar
    data_inicio!: Date;
    data_fim!: Date;
    //? diz q é opcional
    //usuario!: ver como fazer relacionamento ; 
    //refeicao array!: ver como fazer relacionamento ;

    createdAt?: Date;
    updatedAt?: Date;
    
}