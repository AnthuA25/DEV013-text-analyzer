const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let indice = 0;
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== "") {
        indice++;
      }
    }
    return indice;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const characters = text.length;
    return characters;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const charactersWithoutSpaces = text.replace(/\W/g, "").length;
    return charactersWithoutSpaces;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(/\s+/).length;
    const charactersWithoutSpace = text.replace(/\W/g, "").length;
    const avgWordLength = charactersWithoutSpace / words;
    return avgWordLength.toFixed(2);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // pasar el texto en array
    // verificar cada elemento del array si es un numero entero o decimal
    // const numbers = text.match(/\d+(\.\d+)?/g);
    // const arrayNumbers = numbers.filter((number) =>{
    //   return !isNaN(parseFloat(number));
    // })
    const numbers = text.split(/\s+/);
    const arrayNumbers = numbers.filter((number) =>{
      return /^\d+(\.\d+)?$/g.test(number);
    })
    return arrayNumbers.length;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    //TODO: esta función debe retornar la suma total de los numeros encontrados en el parámetro `text`
    const arrayNumber = text.match(/[0-9]/g);
    // if(!arrayNumber){
    //   return 0;
    // } else{
    const convertNumber = arrayNumber
      .map((numero) => {
        const numbers = parseInt(numero);
        return numbers;
      })
      .reduce((acc, n) => {
        return acc + n;
      });
    return convertNumber;
    // }
  },
};

export default analyzer;
