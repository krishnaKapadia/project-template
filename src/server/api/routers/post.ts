import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const { postService } = ctx.services;
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return postService.create(input.name);
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    const { postService } = ctx.services;
    return postService.getLatest();
  }),
});
