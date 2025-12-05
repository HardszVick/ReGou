import PlantRepo from "../../repository/PlantRepo";

export const getAllPlantsUseCase = async (repo: PlantRepo) => {
  return repo.getAll();
};
