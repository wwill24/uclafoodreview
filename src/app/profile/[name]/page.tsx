'use client'

import React from 'react';

import { Circle, CircleUserRound, UserRound, UserRoundPen } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function Profile() {
  return (
    <div className='flex flex-row'>
      <div className='grid grid-cols-2 items-center h-full'>
        <Card className='w-[40vw]'>
          <CardHeader className='items-center'>
            <CircleUserRound className='scale-400 mt-5 mb-8' stroke="#6b7280"/>
            <div className='text-lg'>Admin</div>
          </CardHeader>
          <CardContent className='flex flex-row items-center justify-center'>
            <div className='flex flex-col items-center mr-5 transition ease-in-out hover:scale-125 delay-100 hover:cursor-pointer'>
              <Dialog>
                <DialogTrigger asChild>
                  <UserRoundPen className=''/>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        defaultValue="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <p className='text-xs'>Edit Profile</p>
            </div>
            <div className='flex flex-col items-center ml-5'>
              
              <p className='text-xs'>Change Profile Picture</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>

      </div>
    </div>
  )
}