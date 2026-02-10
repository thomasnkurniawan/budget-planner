import Card from "../atoms/Card";
import Button from "../atoms/Button";
import { useState } from "react";
import Input from "../atoms/Input";
import { useBudgetStore } from "../../store/budgetStore";
import { useNumberMask } from "../../utils/currency";
import { RiLoginCircleLine } from "@remixicon/react";

export default function CardIncome() {
  const { addIncome } = useBudgetStore();

  const [incomeCategory, setIncomeCategory] = useState("");
  const { value, displayValue, onChange } = useNumberMask(0);


  const handleIncomeSubmit = () => {
    addIncome({ category: incomeCategory, amount: value });
    setIncomeCategory("");
    onChange({ target: { value: "" } });
  };

  return (
    <Card>
      <div className="flex justify-between mb-4 text-center items-center">
        <p className="font-bold text-lg flex items-center gap-2"><RiLoginCircleLine size={20} /> Add Income</p>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Income Category"
          className="w-full"
          type="text"
          value={incomeCategory}
          onChange={(e) => setIncomeCategory(e.target.value)}
        />
        <Input
          placeholder="Amount"
          type="text"
          className="w-full"
          value={displayValue}
          onChange={onChange}
        />
        <div className="flex gap-2">
          <Button
            variant="primary"
            className="w-full"
            onClick={handleIncomeSubmit}
          >
            Add Income
          </Button>
        </div>
        <div className="flex justify-end gap-2">
          <span className="text-xs text-right text-gray-500">*Income category is optional, will be categorized as "Uncategorized" if not specified</span>
        </div>
      </div>
    </Card>
  );
}
