/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var vararray = ["Walber", 30, "Mah", 31, true]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(vararray)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(args, index) {
    return args[index]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var vararray2 = ["String", 5, true, undefined, null]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(vararray2, 0));
console.log(myFunction2(vararray2, 1));
console.log(myFunction2(vararray2, 2));
console.log(myFunction2(vararray2, 3));
console.log(myFunction2(vararray2, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome) {
    var objeto = {
          "O rei do inverno": {
            quantidadePaginas: 352,
            autor: 'Bernard Cornwell',
            editora: 'Dark Horse'

          },
          "O arqueiro": {
            quantidadePaginas: 388,
            autor: 'Bernard Cornwell',
            editora: 'Dark Horse'

          },
          "O negócio do seculo 21": {
            quantidadePaginas: 141,
            autor: 'Robert Kyosaki',
            editora: 'Rich Dad'

          }
    }

    return !nome ? objeto : objeto[nome];
    
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro O Arqueiro tem " + book("O arqueiro").quantidadePaginas + " paginas");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(" O autor do livro O rei do inverno é " + book("O rei do inverno").autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro O Arqueiro foi publicado pela editora " + book("O arqueiro").editora + ".");
