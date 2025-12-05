// models/PlantWateringSchedule.ts
import { Model } from "@nozbe/watermelondb";
import { field, relation } from "@nozbe/watermelondb/decorators";
import PlantDB from "./plantDBModel";

export default class PlantWateringSchedule extends Model {
  static table = "plant_watering_schedule";

  @field("frequency")
  frequency!: string;

  @field("day_of_week")
  dayOfWeek!: number | null;

  @field("hour")
  hour!: string;

  @field("enabled")
  enabled!: boolean;

  @relation("plant", "plant_id")
  plant!: PlantDB;
}
