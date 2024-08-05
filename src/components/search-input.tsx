'use client'

import {useSearchParams} from "next/navigation";
import {Input} from "@nextui-org/react";
import {search} from "@/actions";

type SearchInputProps = {

}

const SearchInput = ({}: SearchInputProps) => {
    const searchParams = useSearchParams()

    return (
        <form action={search}>
            <Input
                name={'term'}
                defaultValue={searchParams.get('term') || ''}
            />
        </form>
    );
};

export default SearchInput;