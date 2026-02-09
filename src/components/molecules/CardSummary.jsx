import Card from "../atoms/Card";
import Divider from "../atoms/Divider";
import { useBudgetStore } from "../../store/budgetStore";

export default function CardSummary() {
  const { incomes, budgets, getTotalIncome, getTotalBudget, getLeftover } =
    useBudgetStore();

  return (
    <Card>
      <div className="flex mb-4 text-center items-center">
        <p className="font-bold text-lg">Summary</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p>Leftover</p>
          <p>{getLeftover()}</p>
        </div>
        <div className="relative">
          <Divider position="bottom" />
        </div>

        <div className="flex justify-between">
          <p>Total Income</p>
          <p>{getTotalIncome()}</p>
        </div>
        {incomes.length > 0 && (
          <div>
            <p>List Income</p>
            <div className="flex flex-col gap-1">
              {incomes.map((income, index) => (
                <span className="flex justify-between" key={index}>
                  {income.category} <span>{income.amount}</span>
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
          <p>{getTotalBudget()}</p>
        </div>
        <div>
          <p>List Budget</p>
          <div className="flex flex-col gap-1">
            {budgets.map((budget, index) => (
              <span className="flex justify-between" key={index}>
                {budget.category} <span>{budget.amount}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
