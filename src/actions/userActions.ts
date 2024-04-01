'use server'

import db from "@/db/drizzle";
import {user} from "@/db/schema";
import { randomUUID } from "crypto";

export const createUser = async (formData: FormData) => {
    const rawFormData = Object.fromEntries(formData) as any;

    const newUUID = randomUUID();
    await db.insert(user).values({...rawFormData, id: newUUID})
};