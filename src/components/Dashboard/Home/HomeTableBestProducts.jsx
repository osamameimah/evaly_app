import Style from "../../../assets/css/style.module.css";

const HomeTableBestProducts = () => {
  const items = [
    {
      item1: "Apple iPhone 13",
      item2: "506",
      item3: "Stock",
      item4: "$999.29",
    },

    {
      item1: "Apple iPhone 13",
      item2: "506",
      item3: "Stock",
      item4: "$999.29",
    },

    {
      item1: "Apple iPhone 13",
      item2: "506",
      item3: "Stock",
      item4: "$999.29",
    },

    {
      item1: "Apple iPhone 13",
      item2: "506",
      item3: "Stock",
      item4: "$999.29",
    },

    {
      item1: "Apple iPhone 13",
      item2: "506",
      item3: "Stock",
      item4: "$999.29",
    },
  ];
  return (
    <>
      {items.map((items, id) => (
        <tr className={Style.row_best}>
          <td>{items.item1}</td>
          <td>{items.item2}</td>
          <td>{items.item3}</td>
          <td>{items.item4}</td>
        </tr>
      ))}
    </>
  );
};

export default HomeTableBestProducts;
