'use client';

import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type FormComponentProps<T extends z.ZodType<any>> = {
  schema: T;
  formInputs: Array<{ name: keyof z.infer<T>; placeholder: string; type?: string }>;
  onSubmit: (values: z.infer<T>) => Promise<void>;
  cardTitle: string;
  submitButtonText: string;
};

export default function ReusableForm<T extends z.ZodType<any>>({
  schema,
  formInputs,
  onSubmit,
  cardTitle,
  submitButtonText
}: FormComponentProps<T>) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Card className="p-4 w-[50vh]">
        <CardHeader className="flex flex-col gap-2 text-center">
          <CardTitle>{cardTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col items-center space-y-2"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {formInputs.map((input) => (
                <FormField
                  key={input.name as string}
                  control={form.control}
                  name={input.name as any}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder={input.placeholder}
                          type={input.type || 'text'}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                className="w-full h-1/2 bg-[#007ec4] hover:bg-[#00a6ff] text-[#fff] hover:text-[#fff]"
                variant="ghost"
                type="submit"
              >
                {submitButtonText}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
