CREATE TABLE `posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(100) NOT NULL,
	`content` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`user_id` int,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `posts` ADD CONSTRAINT `posts_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;