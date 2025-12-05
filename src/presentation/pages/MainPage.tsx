import { useEffect, useState } from "react";
import PlantRepo, { Plants } from "../../infrastructure/repository/PlantRepo";
import ImageComponent from "../components/imageComponent";
import { getAllPlantsUseCase } from "../../infrastructure/application/usecases/getAllPlantsUseCase";

const MainPage = () => {
  const [plants, setPlants] = useState<Plants[]>([]);

  useEffect(() => {
    const loadPlants = async () => {
      const repo = new PlantRepo();
      const result = await getAllPlantsUseCase(repo);
      setPlants(result);
    };

    loadPlants();
  }, []);

  const getAllFotos = () => {
    return plants.map((p, count) => (
      <ImageComponent
        name={p.name}
        image={p.image}
        key={count}
      ></ImageComponent>
    ));
  };

  return <div>{getAllFotos()}</div>;
};

export default MainPage;
