import React, { useState } from 'react';
import axios from 'axios';
import './AddFood.css';

const AddFood = () => {
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: ""
    });
    const [image, setImage] = useState(false);

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("category", data.category);
        formData.append("image", image);

        try {
            const response = await axios.post("http://localhost:4000/api/food/add", formData);
            if (response.data.success) {
                alert("Food added successfully");
                // Reset form
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: ""
                });
                setImage(false);
            } else {
                alert("Error adding food");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error adding food");
        }
    };

    return (
        <div className="add-food">
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={data.name} onChange={onChangeHandler} required />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" value={data.description} onChange={onChangeHandler} required />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" name="price" value={data.price} onChange={onChangeHandler} required />
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <input type="text" id="category" name="category" value={data.category} onChange={onChangeHandler} required />
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input
                        onChange={(e)=>setImage(e.target.files[0])}
                        type="file"
                        required
                    />
                </div>
                <button type="submit">Add Food</button>
            </form>
        </div>
    );
};

export default AddFood;