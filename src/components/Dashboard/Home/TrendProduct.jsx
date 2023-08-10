 import Style from "../../../assets/css/style.module.css";

const TrendProduct = () => {
  const trend = [
    {
      name: "Apple iPhone 13",
      item: "Item: #FXZ-4567",
      price: "$999.29",
    },
    {
      name: "Apple iPhone 13",
      item: "Item: #FXZ-4567",
      price: "$999.29",
    },

    {
      name: "Apple iPhone 13",
      item: "Item: #FXZ-4567",
      price: "$999.29",
    },

    {
      name: "Apple iPhone 13",
      item: "Item: #FXZ-4567",
      price: "$999.29",
    },

    {
        name: "Apple iPhone 13",
        item: "Item: #FXZ-4567",
        price: "$999.29",
      },

      {
        name: "Apple iPhone 13",
        item: "Item: #FXZ-4567",
        price: "$999.29",
      },
  ];

  return (
    <>
      {trend.map((trend, index) => (
        <div class={Style.trent_product}>
          <div>
            <span>{trend.name}</span>
            <span>{trend.item}</span>
          </div>
          <div>
            <span>{trend.price}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default TrendProduct;
