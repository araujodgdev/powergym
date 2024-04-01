import {pgTable, uuid, text} from 'drizzle-orm/pg-core';

export const user = pgTable('users', {
    id: uuid('id').primaryKey(),
    name: text('name'),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
})