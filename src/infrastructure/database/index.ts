import { plantDBSchema } from "./schemas/plantDBSchema";
// database/index.ts
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { schema } from "./schemas";
import Plant from "./models/plantDBModel";
import PlantWateringSchedule from "./models/plantScheduleDBSchema";

const adapter = new SQLiteAdapter({
  schema,
});

export const database = new Database({
  adapter,
  modelClasses: [Plant, PlantWateringSchedule],
});
