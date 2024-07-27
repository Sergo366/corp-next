'use client'
import React, {useState} from 'react';
import type {Snippet} from '@prisma/client'
import Editor from '@monaco-editor/react'
import {editSnippet} from "@/actions";

type SnippetEditForm = {
    snippet: Snippet
}

const SnippetEditForm = ({snippet}: SnippetEditForm) => {
    const [code, setCode] = useState<string>(snippet.code)
    const handleChange = (value: string = '' ) => {
        setCode(value)
    }

    const editSnippetAction = editSnippet.bind(null, snippet.id, code)

    return (
        <div>
            <Editor
                height={'40vh'}
                theme={'vs-dark'}
                language={'JavaScript'}
                defaultValue={snippet.code}
                onChange={handleChange}
                options={{
                    minimap: {enabled: false},
                }}
            />
            <form action={editSnippetAction}>
                <button className={'p-2 border rounded'}>Save</button>
            </form>
        </div>
    );
};

export default SnippetEditForm;