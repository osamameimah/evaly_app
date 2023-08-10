 import Style from "../../../assets/css/style.module.css";

const HomeTableTransaction = () =>{
    const items = [
        {
          item1: "#5089",
          item2: "31 March 2023",
          item3: "$1200",
          item4: "View Detail",
        },
    
        {
          item1: "#5089",
          item2: "31 March 2023",
          item3: "$1200",
          item4: "View Detail",
        },
    
        {
          item1: "#5089",
          item2: "31 March 2023",
          item3: "$1200",
          item4: "View Detail",
        },
    
        {
          item1: "#5089",
          item2: "31 March 2023",
          item3: "$1200",
          item4: "View Detail",
        },
    
        {
          item1: "#5089",
          item2: "31 March 2023",
          item3: "$1200",
          item4: "View Detail",
        },
    
        {
          item1: "#5089",
          item2: "31 March 2023",
          item3: "$1200",
          item4: "View Detail",
        },
      ];
    
return(
    <>
    
    {items.map((items, id) => (
          <tr className={Style.row}>
            <td>{items.item1}</td>
            <td>{items.item2}</td>
            <td>{items.item3}</td>
            <td>
              <a href="#">{items.item4}</a>
            </td>
          </tr>
        ))}
    
    
    </>
)
}



export default HomeTableTransaction;