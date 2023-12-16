import React, { useState } from 'react'
import { useFormik } from 'formik'
import "./ModelPopup.css";
import { axiosPut } from "../../axiosServices";

const EditDetailsModal = ({ empById, setEditModal }) => {
    const { firstname, lastname, email, phone, job,age,salary, dateofjoining, image } = empById
    //const date = new Date(dateofjoining)
    const [loading, setLoading] = useState(false)
    const handleEdit = async (values) => {
        setLoading(true)
        try {
            const res = await axiosPut(`/employee/${empById._id}`, values)
            setLoading(false)
            setEditModal(false)
            console.log(res)

        }
        catch (err) {
            console.log(err)
        }
    }
    const formik = useFormik({
        initialValues: {
            firstname,
            lastname,
            email,
            phone,
            job,
            age,
            salary,
            dateofjoining,
            image,
        },
        onSubmit: values => {
            handleEdit(values)

        }
    })
    console.log(formik.initialValues)


    return (
        <div className="modalContainer">
            <form action="" onSubmit={formik.handleSubmit}>
                <div className="modalBox">
                    <div className="modalHeader">
                        <h2>New Employee Details</h2>
                    </div>
                    <div className="modalInner">
                        <div className="input-container">
                            <div className="input-box">
                                <label htmlFor="">First Name</label>
                                <input type="text" name="firstname"
                                    required
                                    defaultValue={firstname}
                                    onChange={formik.handleChange}
                                    values={formik.values.firstname}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="">Last Name</label>
                                <input type="text" name="lastname"
                                    required
                                    defaultValue={lastname}
                                    onChange={formik.handleChange}
                                    values={formik.values.lastname}
                                />
                            </div>
                        </div>
                        <div className="input-box">
                                <label htmlFor="">Image</label>
                                <input type="text" name="image"
                                    required
                                    defaultValue={image}
                                    onChange={formik.handleChange}
                                    values={formik.values.image}
                                />
                            </div>

                        <div className="input-container">
                            <div className="input-box">
                                <label htmlFor="">Email Address</label>
                                <input type="email" name="email"
                                    required
                                    defaultValue={email}
                                    onChange={formik.handleChange}
                                    values={formik.values.email}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="">Phone</label>
                                <input type="text" name="phone"
                                    required
                                    defaultValue={phone}
                                    onChange={formik.handleChange}
                                    values={formik.values.phone}
                                />
                            </div>
                        </div>
                        <div className="input-box">
                            <label htmlFor="">Job-Department</label>
                            <input type="text" name="job"
                                required
                                defaultValue={job}
                                onChange={formik.handleChange}
                                values={formik.values.job}
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="">{"Age (in Years)"}</label>
                            <input type="number" name="age"
                                required
                                defaultValue={age}
                                onChange={formik.handleChange}
                                values={formik.values.job}
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="">{"Salary (in Rupees)"}</label>
                            <input type="number" name="salary"
                                required
                                defaultValue={salary}
                                onChange={formik.handleChange}
                                values={formik.values.job}
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="">Date of Joining</label>
                            <input type="date" name="dateofjoining"
                                required
                                defaultValue={dateofjoining}
                                onChange={formik.handleChange}
                                values={formik.values.dateofjoining}
                            />
                        </div>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',gap:'5px',alignItems:'center',justifyContent:'space-evenly'}}>
                        <div className="modalFooter">
                            <button className="add-btn" type="submit">{loading ? 'Editing' : 'Edit and Save'}</button>
                        </div>
                        <div className="modalFooter">
                            <button className="add-btn" type="submit" onClick={()=>{setEditModal(false)}} style={{backgroundColor:'red'}}>{'Close'}</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditDetailsModal