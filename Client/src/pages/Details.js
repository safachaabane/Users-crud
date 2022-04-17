import React from 'react';
import InputGroup from '../components/InputGroup';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
function Details() {
    const [form, setForm] = useState({});
    const [errors,setErrors] = useState({});
    const navigate = useNavigate();
    const {id}= useParams();

  const onChangeHandler = (e) => {
      setForm({
          ...form,
          [e.target.name]:e.target.value,
      });
  };
  const onSubmitHandler =(e)=>{
      e.preventDefault();
      axios.put(`/api/users/${id}`,form)
      .then(res=>{
        navigate('/')
      })
  
  .catch(err=>setErrors(err.response.data))
}

const getUser = async () => {
    await axios.get(`/api/users/${id}`).then((res) => {
        setForm(res.data)})
      };
useEffect(() => {
    getUser();

});

  return (
    <div className="container mt-4 col-12 col-lg-4">
    <form onSubmit={onSubmitHandler}>
      <InputGroup
        onSubmit
        label="Email"
        type="text"
        name="Email"
        onChangeHandler={onChangeHandler}
        errors={errors.Email}
        value={form.Email}
      />
      <InputGroup
        label="Lastname"
        type="text"
        name="Lastname"
        onChangeHandler={onChangeHandler}
        errors={errors.Lastname}
        value={form.Lastname}
      />
      <InputGroup
        label="Firstname"
        type="text"
        name="Firstname"
        onChangeHandler={onChangeHandler}
        errors={errors.Firstname}
        value={form.Firstname}
      />
      <InputGroup
        label="Age"
        type="text"
        name="Age"
        onChangeHandler={onChangeHandler}
        errors={errors.Age}
        value={form.Age}
      />
      <button className="btn btn-primary" type="submit">Add user</button>
    </form>
  </div>
  )
}

export default Details