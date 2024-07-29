'use server';

import {z} from "zod";
import {auth} from "@/auth";
import {db} from "@/db";
import {redirect} from "next/navigation";
import Paths from "@/paths";
import {revalidatePath} from "next/cache";

const createTopicScheme = z.object({
    name: z.string().min(3).regex(/[a-z-]/, {
        message: 'Must be lowercase letters or dashes without spaces'
    }),
    description: z.string().min(10)
})

interface CreateTopicFormState {
    errors: {
        name?: string[];
        description?: string[];
        _form?: string[]
    }
}

export async function createTopic(
    formState: CreateTopicFormState,
    formData: FormData
): Promise<CreateTopicFormState> {
    const session = await auth()
    const result = createTopicScheme.safeParse({
        name: formData.get('name'),
        description: formData.get('description'),
    })

    if (!session || !session.user) {
        return {
            errors: {
                _form: ["You must be signed in to do this!"]
            }
        }
    }

    if (!result.success) {
        return {errors: result.error.flatten().fieldErrors}
    }

    try {
        await db.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description,
            }
        })
    } catch (e: unknown) {
        if (e instanceof Error) {
            return {
                errors: {
                    _form: [e.message]
                }
            }
        }

        return {
            errors: {
                _form: ['Something went wrong'],
            }
        }
    }

    revalidatePath(Paths.home())
    redirect(Paths.topicShow(result.data.name))
}
