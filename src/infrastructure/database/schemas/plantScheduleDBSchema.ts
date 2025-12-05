import { tableSchema } from "@nozbe/watermelondb/Schema";

export const plantWateringScheduleSchema = tableSchema({
  name: "plant_watering_schedule",
  columns: [
    { name: "plant_id", type: "string", isIndexed: true },
    { name: "frequency", type: "string" },        
    { name: "day_of_week", type: "number", isOptional: true }, 
    { name: "hour", type: "string" },      
    { name: "enabled", type: "boolean" },
  ],
});
