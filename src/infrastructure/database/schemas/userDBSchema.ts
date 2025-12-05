import { tableSchema } from "@nozbe/watermelondb/Schema";

export const userDBSchema = tableSchema({
  name: "user",
  columns: [{ name: "name", type: "string" }],
});
