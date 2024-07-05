import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const appRouter = router({
  getProducts: publicProcedure.query(() => {
    return [
      {
        id: 1 as unknown as number,
        name: "Product 1",
        price: 10,
        description: "Description 1",
      },
      {
        id: 2 as unknown as number,
        name: "Product 2",
        price: 20,
        description: "Description 2",
      },
      {
        id: "3" as unknown as number,
        name: "Product 3",
        price: "30",
        description: "Description 3",
      },
    ];
  }),
  addProduct: publicProcedure
    .input(
      z.object({
        name: z.string(),
        price: z.number(),
        description: z.string(),
      }),
    )
    .mutation(({ input }) => {
      // Simulated adding a product
      console.log("Adding product:", input);
      return { id: Math.floor(Math.random() * 1000), ...input };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
