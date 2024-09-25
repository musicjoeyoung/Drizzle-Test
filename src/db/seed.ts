import { Categories, Comments, PostCategories, PostLikes, PostTags, Posts, Tags, Users } from './schema';
import { Category, Comment, Post, PostCategory, PostLike, PostTag, Tag, User } from '../types/types';

import { categorySeedData } from '../seeds/category-seeds';
import { commentsSeedData } from '../seeds/comments-seeds';
import { db } from './db';
import { postCategoriesSeedData } from '../seeds/post-category-seeds';
import { postLikesSeedData } from '../seeds/post-likes-seeds';
import { postSeedData } from '../seeds/post-seeds';
import { postTagsSeedData } from '../seeds/post-tags-seeds';
import { tagSeedData } from '../seeds/tags-seeds';
import { userSeedData } from '../seeds/user-seeds';

const users: User[] = userSeedData as User[];
const posts: Post[] = postSeedData as Post[];
const categories: Category[] = categorySeedData as Category[];
const tags: Tag[] = tagSeedData as Tag[];
const comments: Comment[] = commentsSeedData as Comment[];
const postCategories: PostCategory[] = postCategoriesSeedData as PostCategory[];
const postTags: PostTag[] = postTagsSeedData as PostTag[];
const postLikes: PostLike[] = postLikesSeedData as PostLike[];

async function seed() {
    console.log('Seeding started');
    await db.insert(Users).values(users);
    await db.insert(Posts).values(posts);
    await db.insert(Categories).values(categories);
    await db.insert(Tags).values(tags);
    await db.insert(Comments).values(comments);
    await db.insert(PostCategories).values(postCategories);
    await db.insert(PostTags).values(postTags);
    await db.insert(PostLikes).values(postLikes);


    console.log('Seeding completed');
}

seed().then(() => {
    console.log('Seed process finished successfully.');
    process.exit(0);
}).catch((error) => {
    console.error('Error during seeding:', error);
    process.exit(1);
});
