import React from 'react';
import Link from "next/link";
import {db} from "@/db";
import {Chip} from "@nextui-org/react";
import Paths from "@/paths";

const TopicList = async () => {
    const topics = await db.topic.findMany()
    return (
        <div className={'flex flex-row flex-wrap gap-2'}>
            {topics.map((topic) => (
                <div key={topic.id}>
                    <Link href={Paths.topicShow(topic.slug)}>
                        <Chip color={'warning'} variant={'shadow'}>
                            {topic.slug}
                        </Chip>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default TopicList;