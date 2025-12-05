import { tableSchema } from "@nozbe/watermelondb/Schema";

export const plantDBSchema = tableSchema({
  name: "plant",
  columns: [
    { name: "name", type: "string" },
    { name: "image", type: "string" },
  ],
});
