// import Styled from "../../assets/css/style.module.css";
import Styled from "../../../assets/css/style.module.css";
import ButtomCustom from "../ButtonCustom";

const OrderTable = ({ postPage, Order }) => {


  return (
    <>
    <div style={{overflowX:"auto"}}> 
      <table className={Styled.table}>
        <thead>
          <tr>
            <th>Order id</th>
            <th>Created</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Profit</th>
            <th>Status</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {Order.map((post, index) => (
            <tr key={index} className={Styled.items_order}>
              <td>#{post.item1}</td>
              <td>{post.item2}</td>
              <td>{post.item3}</td>
              <td>${post.item4}</td>
              <td>

                {post.item5}<span className={Styled.persentage}>16%</span></td>
              <td>
                <ButtomCustom item6={post.item6} />
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default OrderTable;
