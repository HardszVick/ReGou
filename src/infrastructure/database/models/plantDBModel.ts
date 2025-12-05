import { plantWateringScheduleSchema } from './../schemas/plantScheduleDBSchema';
// models/Plant.ts
import { Model, Query } from "@nozbe/watermelondb";
import { children, text } from "@nozbe/watermelondb/decorators";
import PlantWateringSchedule from './plantScheduleDBSchema';

export default class PlantDB extends Model {
  static table = "plant";

  @text("name")
  name!: string;

  @text("image")
  image!: string;

  @children("plant_watering_schedule")
  schedules!: Query<PlantWateringSchedule>;
}