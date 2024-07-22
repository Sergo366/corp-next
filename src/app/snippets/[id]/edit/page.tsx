import React from 'react';
import {db} from "@/db";
import {notFound} from "next/navigation";
import type {Snippet} from '@prisma/client'
import SnippetEditForm from "@/components/snippetEditForm/Snippet-edit-form";

type SnippetEdit ={
    params: {
        id:string
    }
}

async function SnippetEditPage (props:SnippetEdit) {
    const id = parseInt(props.params.id)

    const snippet = await db.snippet.findFirst({
        where: { id }
    }) as Snippet

    if (!snippet) {
       return notFound()
    }

    return (
        <div>
            Editing {snippet.id} with id {snippet.id}
            <SnippetEditForm snippet={snippet}/>
        </div>
    );
};

export default SnippetEditPage;