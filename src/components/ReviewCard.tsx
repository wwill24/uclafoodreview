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

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { CircleUserRound } from 'lucide-react';

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
    const [previousArrow, setPreviousArrow] = useState<string | null>(null);
    const [isArrowUpHovered, setIsArrowUpHovered] = useState(false);
    const [isArrowDownHovered, setIsArrowDownHovered] = useState(false);
    const [username, setUsername] = useState<String | null>(null);
    const [upvotes, setUpvotes] = useState(0);

    useEffect(() => { setUpvotes(props.upvotes) }, []);

    useEffect(() => {
        if (highlightedArrow === 'up' && previousArrow === 'down') {
          RemoveDownvote();
          Upvote();      
        } else if (highlightedArrow === 'up') {
          Upvote(); 
        } else if (highlightedArrow === 'down' && previousArrow === 'up') {
          RemoveUpvote();  
          Downvote();    
        } else if (highlightedArrow === 'down') {
          Downvote(); 
        } else if (highlightedArrow === null) {
          if (previousArrow === 'up') {
            RemoveUpvote(); 
          } else if (previousArrow === 'down') {
            RemoveDownvote(); 
          }
        }
    
        setPreviousArrow(highlightedArrow);
      }, [highlightedArrow]);

    useEffect(() => {
        (async() => await getUsername())()
    }, []);
    async function getUsername() {
        try {
            const usernameReq = await fetch(`http://localhost:8080/user/username/${props.userid}`);

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
            const upvoteReq = await fetch(`http://localhost:8080/reviews/upvote/${props.id}`, {
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
            const removeUpvoteReq = await fetch(`http://localhost:8080/reviews/downvote/${props.id}`, {
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
            const downvoteReq = await fetch(`http://localhost:8080/reviews/downvote/${props.id}`, {                
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
            const removeDownvoteReq = await fetch(`http://localhost:8080/reviews/upvote/${props.id}`, {                
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
                    <div className='flex flex-row'>
                      <div className='flex flex-col'>
                        <div className='flex flex-row'>
                          <Avatar className='mr-2'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>
                              <CircleUserRound />
                            </AvatarFallback>
                          </Avatar>  
                          <div className='flex flex-col'>
                            <CardTitle className='text-[#238dd3]'>{props.title}</CardTitle>
                            <CardDescription className='text-[#3f3f46] hover:underline hover:cursor-pointer'>{username}</CardDescription>
                          </div>
                        </div>
                        <div className='flex flex-row'>
                          {[...Array(5)].map((_, index: number) => (
                            <div key={index} className='flex flex-row gap-2 items-center'>
                              <Star isHighlighted={index < props.rating} />
                            </div>
                          ))}
                        </div>
                        <CardDescription className='text-black text-md mt-1 mb-3'>{props.reviewText}</CardDescription>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                      <div className='flex flex-row justify-start'>{props.reviewDate} {props.reviewTime}</div>
                      <div className='flex flex-row justify-end items-center'>
                        <div className='pl-1 pr-1'>{upvotes}</div>
                        <ArrowUp 
                          isHighlighted={highlightedArrow === 'up'}
                          isHovered={isArrowUpHovered}
                          onClick={() => {
                              setHighlightedArrow('up'); 
                              if (previousArrow === 'down'){
                                setUpvotes(upvotes + 2);
                              } else {
                                setUpvotes(upvotes + 1);
                              }
                            }
                          }
                          onMouseEnter={() => setIsArrowUpHovered(true)}
                          onMouseLeave={() => setIsArrowUpHovered(false)}
                        />
                        <ArrowDown 
                          isHighlighted={highlightedArrow === 'down'}
                          isHovered={isArrowDownHovered}
                          onClick={() => {
                            setHighlightedArrow('down'); 
                            if (previousArrow === 'up'){
                              setUpvotes(upvotes - 2);
                            } else {
                              setUpvotes(upvotes - 1);
                            }
                          }}
                          onMouseEnter={() => setIsArrowDownHovered(true)}
                          onMouseLeave={() => setIsArrowDownHovered(false)}
                        />
                      </div>
                    </div>

                </CardHeader>
            </Card>
        </div>
    );
}
