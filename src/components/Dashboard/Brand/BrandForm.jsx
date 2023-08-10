import React, { useRef } from "react";
import Button from "../../Dashboard/Button"
import Style from "../../../assets/css/style.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DropImage from "../DropImage";
import { useSelector } from "react-redux";

const BrandForm = ({ initialValues, onSubmit }) => {
    // const handleFileInputChange = (event, setFieldValue) => {
    //     const file = event.currentTarget.files[0];
    //     setFieldValue("image", file);
    // };

    const brandData = useSelector((state) => state.brand.data);
    function checkIfNameExists(name) {
        return brandData.some((Prdct) => Prdct.name === name);
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .test('unique-name', 'The name already exists', function (value) {
                return !checkIfNameExists(value);
            }),
    });

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isValid, dirty, isSubmitting, errors, touched, setFieldValue }) => (
                    <Form className={Style.CustomForm}>
                        <div>
                            <label>Brand Name</label>
                            <Field
                                type="text"
                                name="name"
                                placeholder="Enter Brand Name"
                                style={{ border: touched.name && errors.name ? "1px solid red" : "" }}
                            />
                            <ErrorMessage name="name" component="div" className={Style.error_message} />
                        </div>

                        {/* <div>
                            <label>Brand Image</label>
                            <input type="file" name="image"
                                onChange={(event) => handleFileInputChange(event, setFieldValue)}

                            />
                        </div> */}

                        <div>
                            <label>Brand Image</label>
                            <Field name="image">
                                {({ field }) => (
                                    <DropImage
                                        image={field.value}
                                        onDrop={(acceptedFiles) => setFieldValue("image", acceptedFiles[0])}

                                    />
                                )}
                            </Field>
                            <ErrorMessage name="image" component="div" className={Style.error_message} />
                        </div>

                        <div>
                            <Button text="Add" type="submit" disabled={!isValid || !dirty || isSubmitting} />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default BrandForm;
