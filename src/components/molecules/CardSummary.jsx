import Card from "../atoms/Card";
import Divider from "../atoms/Divider";
import { useBudgetStore } from "../../store/budgetStore";
import { RiCashLine } from "@remixicon/react";
import { formatRupiah } from "../../utils/currency";
import { cn } from "../../utils/cn";

export default function CardSummary() {
  const { incomes, budgets, getTotalIncome, getTotalBudget, getLeftover } =
    useBudgetStore();

  return (
    <Card>
      <div className="flex mb-4 text-center items-center">
        <p className="font-bold text-lg flex items-center gap-2"><RiCashLine size={20} /> Summary</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p>Leftover</p>
          <p className={cn("font-bold", getLeftover() < 0 ? "text-red-500" : "text-green-500")}>{formatRupiah(getLeftover())}</p>
        </div>
        <div className="relative">
          <Divider position="bottom" />
        </div>

        <div className="flex justify-between">
          <p>Total Income</p>
          <p className="font-bold">{formatRupiah(getTotalIncome())}</p>
        </div>
        {incomes.length > 0 && (
          <div>
            <p className="pb-2">List Income</p>
            <div className="flex flex-col">
              {incomes.map((income, index) => (
                <span className={cn("flex justify-between p-1 text-sm", index % 2 === 1 ? "bg-gray-50" : "")} key={index}>
                  {income.category || 'Uncategorized'} <span>{formatRupiah(income.amount)}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="relative">
          <Divider position="bottom" />
        </div>
        <div className="flex justify-between">
          <p>Total Budget</p>
          <p className="font-bold">{formatRupiah(getTotalBudget())}</p>
        </div>
        <div>
          <p className="pb-2">List Budget</p>
          <div className="flex flex-col">
            {budgets.map((budget, index) => (
              <span className={cn("flex justify-between p-1 text-sm border-b border-gray-200", index % 2 === 1 ? "bg-gray-50" : "")} key={index}>
                {budget.category || 'Uncategorized'} <span>{formatRupiah(budget.amount)}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
