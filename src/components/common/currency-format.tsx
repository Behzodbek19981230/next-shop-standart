import React from "react";

export default function CurrencyFormatter({
  amount,
  currency,
  size,
  color,
}: {
  amount: number;
  currency: string;
  size: number;
  color?: string;
}) {
  const formattedAmount = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: currency,
  }).format(amount / 100);
  let parts = formattedAmount.split("SUM");
  let result = parts.slice(0, -1).join("");
  return (
    <React.Fragment>
      <div style={{ fontSize: size }} className={color ?? "text-primary"}>
        {result} сум
      </div>
    </React.Fragment>
  );
}
