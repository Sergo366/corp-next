'use client'

import {useFormState} from "react-dom";
import {Button, Input, Popover, PopoverContent, PopoverTrigger, Textarea} from "@nextui-org/react";
import FormButton from "@/components/common/form-button";
import {createPost} from "@/actions";
import {FC} from "react";

type PostCreateFormProps = {
    slug: string
}

const PostCreateForm:FC<PostCreateFormProps> = ({slug}) => {
    const [formState, action] = useFormState(
        createPost.bind(null, slug), {
        errors: {}
    })

    return (
       <Popover placement={'left'}>
           <PopoverTrigger>
               <Button color={'primary'}>
                   Create a Post
               </Button>
           </PopoverTrigger>
           <PopoverContent>
               <form action={action}>
                   <div className={'flex flex-col gap-4 p-4 w-80'}>
                       <h3 className={'text-lg'}>
                           Create a post
                       </h3>
                       <Input
                           label={'Title'}
                           name={'title'}
                           labelPlacement={'outside'}
                           placeholder={'Enter title'}
                           isInvalid={!!formState.errors.title}
                           errorMessage={formState.errors.title?.join(', ')}
                       />
                       <Textarea
                           label={'Content'}
                           name={'content'}
                           labelPlacement={'outside'}
                           placeholder={'Enter content'}
                           isInvalid={!!formState.errors.content}
                           errorMessage={formState.errors.content?.join(', ')}
                       />

                       {formState.errors._form && (
                           <div className={'rounded p-2 bg-red-200 border border-red-400'}>
                               {formState.errors._form?.join(', ')}
                           </div>
                       )}

                       <FormButton>
                           Create Post
                       </FormButton>
                   </div>
               </form>
           </PopoverContent>
       </Popover>
    );
};

export default PostCreateForm;