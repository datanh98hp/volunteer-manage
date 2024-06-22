'use client'
import axiosClient from '@/lib/axiosClient';
import { CircleX } from 'lucide-react';
import React from 'react'

export default function MemberJoinInAction({
    item,
}: {
    item: {
        id: string,
        memberId: string,
        perform: {
            id: string,
            name: string
        }
    }
}) {
    const handleDeleteFromPerformList =  () => {
        //  axiosClient.delete(`/api/perform/member/${item.memberId}`)
        console.log(`Delete from list`, item.perform.id);
    }
    return (
        <div
            className="mr-2 flex gap-3 items-center p-2 border-[0.1rem] w-fit rounded-full mx-2x"

        >
            <p>{item.perform.name}</p>
            <div onClick={() => handleDeleteFromPerformList()}>
                <CircleX className="h-5 w-5" />
            </div>
        </div>
    )
}
