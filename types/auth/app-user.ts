import { UserTable } from "@/database/schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type AppUser = InferSelectModel<typeof UserTable> | null;

export type AppUserInsert = InferInsertModel<typeof UserTable>;
