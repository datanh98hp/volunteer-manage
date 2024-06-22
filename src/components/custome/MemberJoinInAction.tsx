'use client'
import axiosClient from '@/lib/axiosClient';
import { CircleX } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from '../ui/use-toast';

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
    const router = useRouter()
    const handleDeleteFromPerformList =  async () => {
        try {
            await axiosClient.delete(`/api/perform/member/${item.memberId}/${item.perform.id}`, {
                data: {
                    performId: item.perform.id
                }
            })
            // console.log(`Delete from list`, item.perform.id);
            toast({
                title: "Success",
                color: "green",
                description: "Member deleted successfully",
            });
            router.refresh()
        } catch (error) {
            console.log(error);
        }
        
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
