import { UserTable } from "@/database/schema/schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type UserFromDb = InferSelectModel<typeof UserTable>;
export type UserFromDbInsert = InferInsertModel<typeof UserTable>;
