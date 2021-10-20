/* console.log('TypeScript');

const soma = (a: number, b: number) => {
    return a + b;
}

//types: usado para juntar diferentes interfaces
type IDomestico = IFelinos | ICanino; //Ou juntar "IFelinos & ICanino"

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    tipo: 'Terrestre',
    porte: 'medio'
}

//interfaces: usado para definir contratos
interface IAnimal {
    nome: String;
    tipo: 'Terrestre' | 'Aquático';
    domestico: boolean;
    //executarRugido(alturaEmDecibeis: number): void;
}

interface IFelinos extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

// const animal: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'Terrestre',
//     domestico: false
//     //executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
// }

// animal.executarRugido(5);

const felinos: IFelinos = {
    nome: 'Leão',
    tipo: 'Terrestre',
    domestico: false,
    visaoNoturna: true
    //executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}
//INPUT - Tratando
const input = document.getElementById('input') as HTMLInputElement;
//as HTML<nome> mostra para o typescript que isso é um "input"

input.addEventListener('input', (event) => {
    // console.log('Digitei');
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
}); 

//Generic types
function addApendiceLista<NaoSei>(array: any[], value: NaoSei) {
    return array.map(item => item + value);
}

addApendiceLista([1, 2 ,3], 1);

//Condicionais a partir de parametros
interface IUsuario {
    id: String;
    email: String;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

const redirecione = (usuario: IUsuario | IAdmin) => {
    if('cargo' in usuario) {
        //redireciona para area de administracao
    }
    //redireciona para area do usuario
}

//Utilizando "?" para variavel opcional
interface IUsuario {
    id: String;
    email: String;
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';
}

const redirecione = (usuario: IUsuario) => {
    if (usuario.cargo) {
        //redirecionar(usuario.cargo);
    }
    //redirecionar para a area do usuario
}

//Propriedade readonly e private
interface AnimalDomestico {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type AnimalDomesticoSomenteLeitura = {
    +readonly [key in keyof AnimalDomestico]-?: AnimalDomestico[key];
}

class meuAnimal implements AnimalDomesticoSomenteLeitura {
    idade;
    nome;
    parqueFavorito;
    
    constructor(nome, idade) {
        this.idade = idade;
        this.nome = nome;
    }
}

const cao = new meuAnimal('Spike', 5);

//Importando bibliotecas em typescript

import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao');
    }
});

$('body').novaFuncao();

export const numero = 2;
*/

//Omit
interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {
    
}