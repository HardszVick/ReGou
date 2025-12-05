import { appSchema } from "@nozbe/watermelondb";
import { plantDBSchema } from "./plantDBSchema";
import { plantWateringScheduleSchema } from "./plantScheduleDBSchema";

export const schema = appSchema({
  version: 1,
  tables: [
    plantDBSchema,
    plantWateringScheduleSchema,
  ],
});
