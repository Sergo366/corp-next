import React from 'react';
import {Button} from "@nextui-org/react";
import {useFormStatus} from "react-dom"

type FormButton = {
    children: React.ReactNode;
}

const FormButton = ({children}:FormButton) => {
    const {pending} = useFormStatus()
    return (
        <Button
            type="submit"
            isLoading={pending}
        >
            {children}
        </Button>
    );
};

export default FormButton;