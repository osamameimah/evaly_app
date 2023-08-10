import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Dashboard/Layout/Header/Header";
import Style from "./brand.module.css";
import Button from "../../components/Dashboard/Button";
import { useDispatch, useSelector } from "react-redux";
// import { BrandActions } from "../../redux/brand-slice";
import LogoBrand from "../../assets/images/logobrand.png";
import Alert from "../../components/Dashboard/alert/alert";
import { useState } from "react";
import { deleteBrand } from "../../redux/brand-slice";

const Brand = () => {
  const brandData = useSelector((state) => state.brand.data);
  const dispatch = useDispatch();
  const [successMessages, setSuccessMessages] = useState([]);

  const onDeleteBrandHandler = (id) => {
    dispatch(deleteBrand(id));
    setSuccessMessages((prevMessages) => [...prevMessages, "Brand Deleted Successfully"]);

  };

  return (
    <>
      <Header headerName="Brand" />
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="red" />

      <div className={Style.Add_brand}>
        <Link to="/dashboard/brand/add">
          <Button text="Add Brand" type="submit" padding="10px" />
        </Link>
      </div>
      <div className={Style.Brand_items}>
        {brandData.map((brand) => (
          <div className={Style.Brand_item} key={brand.id}>
            <span style={{ textAlign: "center" }}>{brand.name}</span>
            <img
              src={brand.image ? URL.createObjectURL(brand.image) : LogoBrand}
              alt="Customer Avatar"
              style={{ width: "80px", height: "80px" }}
            />

            <div className={Style.Brand_oparation}>
              <Link to={`/dashboard/brand/edit/${brand.name}`}>
                <Button text="Edit" padding="5px 10px" />
              </Link>
              <Link to="">
                <Button
                  text="Delete"
                  background="red"
                  padding="5px 10px"
                  onClick={() => onDeleteBrandHandler(brand.id)}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Brand;
