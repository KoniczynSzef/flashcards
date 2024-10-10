CREATE TABLE `deck_flashcard` (
	`deck_id` text,
	`flashcard_id` text,
	`favorite` integer,
	PRIMARY KEY(`deck_id`, `flashcard_id`),
	FOREIGN KEY (`deck_id`) REFERENCES `deck`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`flashcard_id`) REFERENCES `flashcard`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `flashcard_progress` (
	`repetitions` integer,
	`learning_status` text,
	`incorrect_answers` integer,
	`last_reviewed_at` integer,
	`created_at` integer,
	`author_id` text,
	`user_id` text NOT NULL,
	`flashcard_id` text NOT NULL,
	PRIMARY KEY(`user_id`, `flashcard_id`),
	FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`flashcard_id`) REFERENCES `flashcard`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `deck_flashcard_deck_id_unique` ON `deck_flashcard` (`deck_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `deck_flashcard_flashcard_id_unique` ON `deck_flashcard` (`flashcard_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `flashcard_progress_user_id_unique` ON `flashcard_progress` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `flashcard_progress_flashcard_id_unique` ON `flashcard_progress` (`flashcard_id`);