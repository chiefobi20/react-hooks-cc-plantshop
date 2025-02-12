import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(plantsData => setPlants(plantsData))
  }, [])

  const filteredPlants = plants.filter(plant => {
    return plant.name.toUpperCase().includes(searchText.toUpperCase())
  })

  function updateSearchText(event){
    setSearchText(event.target.value)
  }

  // function deletePlant(id){
  //   setPlants(plants.filter(plant => {
  //     return plant.id !== id
  //   }))
  // }

  // function updatePlant(updatedPlantData){
  //   setPlants(plants.map(plant => {
  //     if(plant.id === updatedPlantData.id){
  //       return updatedPlantData
  //     }
  //     else{
  //       return plant
  //     }
  //   }))
  // }

  function addPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search updateSearchText={updateSearchText} searchText={searchText}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
