import Style from "../../../assets/css/style.module.css";

const HomeCard = ({ maxWidth, title, time1, number1, number2, number3, time2, chart }) => {
  const customStyle = {
    width: maxWidth,
  }
  return (
    <>
      <div className={Style.card} style={customStyle}>
        <div className={Style.card_right} >
          <div>
            <p>{title}</p>
            <p>{time1}</p>
          </div>
          <div>
            <div>
              <p>${number1}</p>
              <p>{number2}</p>
            </div>
            <div>
              <p>{number3}</p>
              <p>{time2}</p>
            </div>
          </div>
        </div>
        <div>
          {chart}
        </div>
      </div>
    </>
  );
};

export default HomeCard;
