const { commerce, datatype, image } = require("faker");
const { times } = require("lodash");

const createRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const numberOfItems = createRange(10, 30);

module.exports = function () {
  return {
    items: times(numberOfItems, function () {
      return {
        id: datatype.uuid(),
        name: commerce.productName(),
        description: commerce.productDescription(),
        variants: times(createRange(1, 6), function () {
          return {
            id: datatype.uuid(),
            name: commerce.productName(),
            description: commerce.productDescription(),
            price: commerce.price() * 100,
          };
        }),
        imageUrls: [
          {
            url: image.imageUrl(350, 350, "technics", true),
          },
        ],
      };
    }),
  };
};
