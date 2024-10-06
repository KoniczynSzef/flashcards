CREATE TABLE `user` (
	`id` text,
	`username` text,
	`email` text,
	`last_login` integer,
	`created_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);