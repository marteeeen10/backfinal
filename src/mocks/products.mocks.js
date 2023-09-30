import { faker } from "@faker-js/faker/locale/es";

export const generateProducts = () => {
  return {
    product: faker.commerce.product(),
    description: faker.commerce.productAdjective(),
    thumbnail: [],
    code: faker.string.alphanumeric(5),
    stock: faker.number.int({ max: 100 }),
    price: faker.commerce.price(),
    status: faker.datatype.boolean(),
  };
};
