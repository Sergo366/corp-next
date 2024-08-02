import React from 'react';
import PostCreateForm from "@/components/posts/post-create-form";

type TopicsShowPage = {
    params: {
        slug: string;
    }
}

const TopicsShowPage = ({params: {slug}}: TopicsShowPage) => {
    return (
        <div className={'grid grid-cols-4 gap-4 p-4'}>
            <div className={'col-span-3'}>
                <h1 className={'text-2xl font-bold mb-2'}>
                    {slug}
                </h1>
            </div>

            <div>
                <PostCreateForm slug={slug} />
            </div>
        </div>
    );
};

export default TopicsShowPage;