import { FlashcardTable } from "@/database/schema/schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Flashcard = InferSelectModel<typeof FlashcardTable>;
export type FlashcardInsert = InferInsertModel<typeof FlashcardTable>;
