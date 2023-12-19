import * as z from 'zod';

export const task = z.object({
  id: z.number(),
  body: z.string().optional(),
  title: z.string(),
  userId: z.number().optional()
});

export type Task = z.infer<typeof task>;
export type Tasks = Task[];

export const taskEdit = z.object({
  idTask: z.number(),
  title: z.string(),
  status: z.string()
});

export type TaskEdit = z.ZodType<typeof taskEdit>;
