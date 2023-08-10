import Style from "../../../assets/css/style.module.css";

const HomeTableOrder = () =>{
    const items = [
        {
          item1: "#6548",
          item2: "Joseph Wheeler",
          item3: "Pending",
          item4: "$999.29",
        },
     
        {
            item1: "#6548",
            item2: "Joseph Wheeler",
            item3: "Pending",
            item4: "$999.29",
          },

          {
            item1: "#6548",
            item2: "Joseph Wheeler",
            item3: "Pending",
            item4: "$999.29",
          },

          {
            item1: "#6548",
            item2: "Joseph Wheeler",
            item3: "Pending",
            item4: "$999.29",
          },

          {
            item1: "#6548",
            item2: "Joseph Wheeler",
            item3: "Pending",
            item4: "$999.29",
          },
      ];
return(
    <>
          {items.map((items, id) => (
        <tr className={Style.row_order}>
          <td>{items.item1}</td>
          <td>{items.item2}</td>
          <td>{items.item3}</td>
          <td>{items.item4}</td>
        </tr>
      ))}
    
    
    </>
)

}


export default HomeTableOrder;