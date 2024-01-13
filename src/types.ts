import * as z from 'zod';

export const task = z.object({
  id: z.union([z.string(), z.number()]),
  body: z.string().optional(),
  title: z.string(),
  status: z.string().default('open')
});

export type Task = z.infer<typeof task>;
export type Tasks = Task[];

export const taskSchema = z.object({
  id: z.string().min(1, { message: 'This field is required' }),
  title: z.string().min(1, { message: 'This field is required' }),
  status: z.string().min(1, { message: 'This field is required' })
});
