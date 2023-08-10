import { useDispatch, useSelector } from "react-redux";
import Styled from "../../assets/css/style.module.css";

import { useState } from "react";
// import { TransactionActions } from "../../redux/transaction-slice";
import { OrderSliceActions } from "../../redux/order-slice";
import { filterByTransaction } from "../../redux/transaction-slice";
import Arrow from "../../assets/images/arrow-top.svg";
const CustomDrop = ({
  width,
  Option,
  height,
  placeHolder,
  backgroundColor,
  color = "#8B909A",
  start = "",
  boxShadow,
  setPostPerPage= ""
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(placeHolder);

  const option = ["Id", "Total"];
  const dispatch = useDispatch();
 
  const onChangeSelectHandler = () => {
    setIsActive(!isActive);
  };

  const handleOptionChange = (option) => {
    setSelected(option);
    setIsActive(false);
    console.log(option);
    dispatch(filterByTransaction(option));
    dispatch(OrderSliceActions.filteredData(option));
  };

  return (
    <>
      <div
        className={Styled.dropdownn}
        style={{ width: width, height: height }}
      >
        <div
          className={Styled.dropdown_btnn}
          style={{ backgroundColor: backgroundColor, color: color ,boxShadow:boxShadow }}
          onClick={onChangeSelectHandler}
        >
          {start} {selected}
          <img src={Arrow} />
        </div>

        {isActive && (
          <div className={Styled.dropdown_contentt}>
            {Option.map((option) => (
              <div
                className={Styled.dropdown_itemm}
                onClick={() => handleOptionChange(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CustomDrop;
