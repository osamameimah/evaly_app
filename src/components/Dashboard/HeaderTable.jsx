import { Link } from "react-router-dom";
import srh from "../../assets/images/search.svg";
import Button from "./Button";
import Search from "./Search";
import Style from "../../assets/css/style.module.css";

const HeaderTable = ({ placeholder, nameSearch, textButton, LinkTo }) => {
    return (
        <>
            <div className={Style.HeaderTable}>
                <Search
                    placeholder={[placeholder]}
                    imageSrc={srh}
                    padding="8px 16px"
                    name={nameSearch}
                />
                <Link to={LinkTo}>
                    <Button
                        text={textButton}
                        padding="10px"
                    />
                </Link>
            </div>

        </>
    )
}

export default HeaderTable;