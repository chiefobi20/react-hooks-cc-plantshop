import React, {useState} from "react";

function NewPlantForm({addPlant}) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()

    const newPlant = {
      ...formData
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newPlant)
    })
    .then(response => {
      // if(response.ok){
       return response.json()


      // }
    })
    .then(newPlantData => addPlant(newPlantData))
    // setFormData({
    //   name: "",
    //   image: "",
    //   price: ""
    // })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updateFormData} type="text" name="name" placeholder="Plant name" value={formData.name} required/>
        <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} required/>
        <input onChange={updateFormData} type="number" name="price" step="0.01" placeholder="Price" value={formData.price} required/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
