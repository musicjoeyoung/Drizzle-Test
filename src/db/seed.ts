import { Posts } from './schema';
import { User } from './schema';
import { db } from './db';
import { postData } from '../seeds/post-seeds';
import { seedData } from '../seeds/user-seeds';

async function seed() {
    console.log('Seeding started');
    await db.insert(User).values(seedData);
    await db.insert(Posts).values(postData);

    console.log('Seeding completed');
}

seed().then(() => {
    console.log('Seed process finished successfully.');
    process.exit(0);
}).catch((error) => {
    console.error('Error during seeding:', error);
    process.exit(1);
});
