'use client'
import React, {useState} from 'react';
import type {Snippet} from '@prisma/client'
import Editor from '@monaco-editor/react'

type SnippetEditForm = {
    snippet: Snippet
}

const SnippetEditForm = ({snippet}: SnippetEditForm) => {
    const [code, setCode] = useState<string>(snippet.code)
    const handleChange = (value: string = '' ) => {
        setCode(value)
    }

    async function editSnippet(snippet: SnippetEditForm) {
        'use client'
    }

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
        </div>
    );
};

export default SnippetEditForm;