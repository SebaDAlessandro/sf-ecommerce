import React from 'react'
import './addProduct.css'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { db } from '../../components/firebase/firebase';
import { addDoc, collection } from "firebase/firestore";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const AddProduct = () => {

  const navigate = useNavigate();

  const productsCollection = collection(db, "products");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data, e) => {
    //console.log('data: ', data)
    addDoc(productsCollection, data)
    .then(() => {
        MySwal.fire({
            position: "top-end",
            icon: "success",
            title: "Producto cargado correctamente.",
            showConfirmButton: false,
            timer: 2000,
        });
        navigate("/admin");
    })
    .catch((error) => {
        MySwal.fire({
            title: "Oops...",
            text: error.message,
            icon: "error",
            confirmButtonText: "Ok",
        });
        reset();
    });
    e.target.reset();
  };

  return (
    <section className="addProduct__container">
      <div className="addProduct__background">
        <form className="addProduct__form" onSubmit={handleSubmit(onSubmit)}>

          <label>Title</label>
          <input
            className="create__input"
            type="text"
            placeholder="Title"
            autoComplete="off"
            {...register("title", {
              required: {
                value: true,
                message: "The title input is required",
              },
            })}
          />
          {errors.title && (
            <span className="addProduct__form-input-error">
              {errors.title.message}
            </span>
          )}

          <label>Description</label>
          <textarea
            className="create__input"
            type="text"
            name="description"
            rows="10"
            placeholder="Description"
            autoComplete="off"
            {...register("description", {
              required: {
                value: true,
                message: "The description input is required",
              },
            })}
          ></textarea>
          {errors.description && (
            <span className="addProduct__form-input-error">
              {errors.description.message}
            </span>
          )}

          <label>Stock</label>
          <input
            className="create__input"
            type="number"
            {...register("stock", {
              required: {
                value: true,
                message: "The stock input is required",
              },
            })}
          />
          {errors.stock && (
            <span className="addProduct__form-input-error">
              {errors.stock.message}
            </span>
          )}

          <label>Price</label>
          <input
            className="create__input"
            type="number"
            {...register("price", {
              required: {
                value: true,
                message: "The price input is required",
              },
            })}
          />
          {errors.price && (
            <span className="addProduct__form-input-error">
              {errors.price.message}
            </span>
          )}

          <label>Image</label>
          <input
            className="create__input"
            type="url"
            placeholder="Image"
            autoComplete="off"
            {...register("image", {
              required: {
                value: true,
                message: "The image input is required",
              },
            })}
          />
          {errors.image && (
            <span className="addProduct__form-input-error">
              {errors.image.message}
            </span>
          )}

          <button className="addProduct__btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default AddProduct