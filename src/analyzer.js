const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let indice = 0;
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== "") {
        indice++
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
    const charactersWithoutSpace = text.replace(/\s/g, "").length;
    const avgWordLength = charactersWithoutSpace / words;
    return Math.round(avgWordLength * 100) / 100;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // pasar el texto en array
    // verificar cada elemento del array si es un numero entero o decimal
    // const numbers = text.match(/\d+(\.\d+)?/g);
    const numbers = text.split(/\s+/);
    // const arrayNumbers = numbers.filter((number) =>{
    //   return !isNaN(parseFloat(number));
    // })
    const arrayNumbers = numbers.filter((number) => {
      return /^\d+([.\d.]+)?$/g.test(number);
    });
    return arrayNumbers.length;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    //TODO: esta función debe retornar la suma total de los numeros encontrados en el parámetro `text`
    // busque que numeros, pero que no tenga ni un caracter antes ni despues
    // const arrayNumber = text.match(/\d+(\.\d+)?/g);
    const arrayNumber = text.split(/\s+/);
    const findNumber = arrayNumber.filter((number) => {
      return /^\d+([.\d.]+)?$/g.test(number);
    });
    console.log(findNumber)
    if (!findNumber) {
      return 0;
    } else {
      const convertNumber = findNumber
        .map((numero) => {
          const numbers = parseFloat(numero);
          return numbers;
        })
        .reduce((acc, n) => {
          return acc + n;
        },0);
      return convertNumber;
    }
  },
};

export default analyzer;
