export const productErrorIncompleteValues = (product) => {
    return `Todos los parametros obligatorios no fueron proporcionados:
    Los obligatorios son:
    title: se esperaba una cadena y se recibio ${product.title},
    description: se esperaba una cadena y se recibio ${product.description},
    code: se esperabauna cadena y se recibio:´ ${product.code}
    y asi con el resto de los requisitos..`;
  };
  
  export const productErrorAddProducts = () => {
    return `No se pudo agregar el producto al carrito`;
  };
  
  export const productErrorDeleteProducts = () => {
    return `No se pudo eliminar el productoo `;
  };
  