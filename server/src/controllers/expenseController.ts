import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getExpensesByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const expensesByCategoryRaw = await prisma.expenseByCategory.findMany({
      orderBy: {
        date: "desc",
      },
    });
    const expanseByCategorySummary = expensesByCategoryRaw.map(item => ({
      ...item,
      amount: item.amount.toString(),
    }));
    res.status(200).json(expanseByCategorySummary);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve expenses" });
  }
};
