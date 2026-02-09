import { create } from "zustand";

export const useBudgetStore = create((set, get) => ({
  incomes: [],
  budgets: [],
  addIncome: (income) =>
    set((state) => ({ incomes: [...state.incomes, income] })),
  addBudget: (budget) =>
    set((state) => ({ budgets: [...state.budgets, budget] })),
  getTotalIncome: () => {
    return get().incomes.reduce((total, income) => total + income.amount, 0);
  },
  getTotalBudget: () => {
    return get().budgets.reduce((total, budget) => total + budget.amount, 0);
  },
  getLeftover: () => {
    return get().getTotalIncome() - get().getTotalBudget();
  },
}));
