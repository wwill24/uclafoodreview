'use client'

import React, { useEffect, useState } from 'react';

import Star from "@/components/ui/star";
import ArrowUp from './ui/arrowup';
import ArrowDown from './ui/arrowdown';

import {
    Card,
    CardDescription,
    CardTitle,
    CardHeader,
    CardContent
} from '@/components/ui/card';

interface Props {
    id: number,
    title: string,
    rating: number,
    reviewText: string,
    reviewDate: string,
    reviewTime: string,
    upvotes: number,
    userid: number
}

export default function ReviewCard( props: Props ) {
    const [highlightedArrow, setHighlightedArrow] = useState<'up' | 'down' | null>(null);
    const [isArrowUpHovered, setIsArrowUpHovered] = useState(false);
    const [isArrowDownHovered, setIsArrowDownHovered] = useState(false);
    const [username, setUsername] = useState<String | null>(null);

    useEffect(() => {
        switch (highlightedArrow) {
            case 'up':
                Upvote();
                break;
            case 'down':
                Downvote();
                break;
        }
    }, [highlightedArrow]);

    useEffect(() => {
        (async() => await getUsername())()
    }, []);
    async function getUsername() {
        try {
            const usernameReq = await fetch(`http://localhost:8080/user?userId=${props.userid}`);

            if (usernameReq.ok) {
                const username: String = await usernameReq.text();
                setUsername(username);
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    async function Upvote() {
        try {
            const upvoteReq = await fetch(`http://localhost:8080/upvote/${props.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (upvoteReq) {
                console.log("Upvote successful!");
            }
            
            else {
                console.log("Unsuccessful upvote");
            }
        }
        catch (e){
            console.error(e);
        }
    }

    async function RemoveUpvote() {
        try{
            const removeUpvoteReq = await fetch(`http://localhost:8080/removeUpvote/${props.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (removeUpvoteReq) {
                console.log("Upvote removal successful!")
            }
            else{
                console.log("Unsuccessful removal")
            }
        }
        catch (e){
            console.error(e);
        }
    }

    async function Downvote() {
        try{
            const downvoteReq = await fetch(`http://localhost:8080/downvote/${props.id}`, {                
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (downvoteReq) {
                console.log("Downvote successful")
            }
            else {
                console.log("Unsuccessful downvote")
            }
        }
        catch (e){
            console.error(e);
        }
    }

    async function RemoveDownvote() {
        try{
            const removeDownvoteReq = await fetch(`http://localhost:8080/removeDownvote/${props.id}`, {                
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (removeDownvoteReq) {
                console.log("Downvote removal successful")
            }
            else {
                console.log("Unsuccessful")
            }
        }
        catch (e){
            console.error(e);
        }
    }

    return (
        <div className='w-[40vw]'>
            <Card className=''>
                <CardHeader>
                    <div className='flex flex-col'>
                      <CardTitle>{props.title}</CardTitle>
                      <div className='flex flex-row gap-2 items-center'>
                          <Star isHighlighted></Star>
                          <CardDescription>{username}</CardDescription>
                      </div>
                      <CardContent>{props.reviewText}</CardContent>
                    </div>
                    <div className='flex flex-row justify-end'>
                      <div className='pl-1 pr-1'>{props.upvotes}</div>
                      <ArrowUp 
                        isHighlighted={highlightedArrow === 'up'}
                        isHovered={isArrowUpHovered}
                        onClick={() => setHighlightedArrow('up')}
                        onMouseEnter={() => setIsArrowUpHovered(true)}
                        onMouseLeave={() => setIsArrowUpHovered(false)}
                      />
                      <ArrowDown 
                        isHighlighted={highlightedArrow === 'down'}
                        isHovered={isArrowDownHovered}
                        onClick={() => setHighlightedArrow('down')}
                        onMouseEnter={() => setIsArrowDownHovered(true)}
                        onMouseLeave={() => setIsArrowDownHovered(false)}
                      />
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
}
