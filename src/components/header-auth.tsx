'use client'

import {useSession} from "next-auth/react";
import {Avatar, Button, NavbarItem, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {signIn, signOut} from "@/actions";

const HeaderAuth = () => {
    const session = useSession();

    if (session.status === 'loading') return null

    return (
        <>
            {session.data?.user ? (
                    <Popover placement={'left'}>
                        <PopoverTrigger className={'cursor-pointer'}>
                            <Avatar src={session.data.user.image || ''} />
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className={'p-4'}>
                                <form action={signOut}>
                                    <Button
                                        type={'submit'}
                                    >
                                        Sign Out
                                    </Button>
                                </form>
                            </div>
                        </PopoverContent>
                    </Popover>
                )
            : <>
                    <NavbarItem>
                        <form action={signIn}>
                            <Button
                                type="submit"
                                color="secondary"
                                variant="bordered"
                            >
                                Sign In
                            </Button>
                        </form>
                    </NavbarItem>

                    <NavbarItem>
                        <form action={signIn}>
                            <Button
                                type="submit"
                                color="primary"
                                variant="flat"
                            >
                                Sign Up
                            </Button>
                        </form>
                    </NavbarItem>
                </>
            }
        </>
    );
};

export default HeaderAuth;