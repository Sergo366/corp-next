import React from 'react';
import {db} from "@/db";
import {notFound} from "next/navigation";

type SnippetEdit ={
    params: {
        id:string
    }
}

async function SnippetEdit (props:SnippetEdit) {
    const id = parseInt(props.params.id)

    const snippet = await db.snippet.findFirst({
        where: { id }
    })

    if (!snippet) {
       return notFound()
    }

    return (
        <div>
            Editing {snippet.id} with id ${snippet.id}
        </div>
    );
};

export default SnippetEdit;