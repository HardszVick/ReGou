import { fetch } from "./../../../node_modules/rxjs/src/internal/umd";
import { database } from "./../database/index";
import PlantDB from "../database/models/plantDBModel";

export type Plants = {
  name: string;
  image: string;
};

export type Schedule = {
  frequency: string;
  day_of_week?: number | null;
  hour: string;
  enabled: boolean;
};

export type Plant = {
  name: string;
  image: string;
  schedules: Schedule[];
};

export default class PlantRepo {
  create = async (name: string, image: string): Promise<void> => {
    await database.write(async () => {
      await database.get<PlantDB>("plant").create((plant) => {
        plant.name = name;
        plant.image = image;
      });
    });
  };

  getById = async (id: string): Promise<Plant | null> => {
    const plant = await database.get<PlantDB>("plant").find(id);
    if (!plant) {
      return null;
    }

    let schedules = await this.getAllSchedules(plant);
    if (!schedules) schedules = [];

    return { ...plant, schedules };
  };

  getAll = async () => {
    return database.get<PlantDB>("plant").query().fetch();
  };

  private getAllSchedules = async (plant: PlantDB) => {
    return plant.schedules.fetch();
  };
}
