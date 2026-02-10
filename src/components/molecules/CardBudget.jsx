import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Input from "../atoms/Input";
import { useBudgetStore } from "../../store/budgetStore";
import { useState } from "react";
import { useNumberMask } from "../../utils/currency";
import { RiLogoutCircleLine } from "@remixicon/react";

export default function CardBudget() {
  const { addBudget } = useBudgetStore();
  const { value, displayValue, onChange } = useNumberMask(0);
  const [category, setCategory] = useState();

  const resetForm = () => {
    setCategory("");
    onChange({ target: { value: "" } });
  };

  return (
    <Card>
      <div className="flex justify-between mb-4 text-center items-center">
        <p className="font-bold text-lg flex items-center gap-2">
          <RiLogoutCircleLine size={20} /> Allocated Budget
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Income Category"
          className="w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
            onClick={() => {
              addBudget({ category, amount: value });
              resetForm();
            }}
          >
            Add Budget
          </Button>
        </div>
        <div className="flex justify-end gap-2">
          <span className="text-xs text-right text-gray-500">
            *Budget category is optional, will be categorized as "Uncategorized"
            if not specified
          </span>
        </div>
      </div>
    </Card>
  );
}
