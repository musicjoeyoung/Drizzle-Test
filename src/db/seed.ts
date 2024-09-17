import { Post } from '../types/types';
import { Posts } from './schema';
import { User } from '../types/types';
import { Users } from './schema';
import { db } from './db';
import { postSeedData } from '../seeds/post-seeds';
import { userSeedData } from '../seeds/user-seeds';

const users: User[] = userSeedData as User[];
const posts: Post[] = postSeedData as Post[];

async function seed() {
    console.log('Seeding started');
    await db.insert(Users).values(users);
    await db.insert(Posts).values(posts);

    console.log('Seeding completed');
}

seed().then(() => {
    console.log('Seed process finished successfully.');
    process.exit(0);
}).catch((error) => {
    console.error('Error during seeding:', error);
    process.exit(1);
});
