import React from 'react';
import {redirect} from "next/navigation";
import Paths from "@/paths";
import PostList from "@/components/posts/post-list";
import {fetchPostBySearchTerm} from "@/db/queries/posts";

type SearchPageProps = {
    searchParams: {
        term: string
    }
}

const SearchPage = ({searchParams: { term }}: SearchPageProps) => {
    if (!term) {
        redirect(Paths.home())
    }

    return (
        <PostList
            fetchData={() => fetchPostBySearchTerm(term)}
        />
    );
};

export default SearchPage;