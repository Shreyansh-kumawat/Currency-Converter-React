import React,{useId} from "react";


function InputBox({
    label,
    amount,
    onAmtCh,
    onCurrCh,
    currOptions = [],
    selectCUrr = "inr",
    amountDisable = false,
    className = "",
}) {
    const amountInInputId = useId();

    return (
        <div className={`bg-blue-50 w-full h-full p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2 h-5/6">
                <label htmlFor={amountInInputId} className="text-black mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmtCh && onAmtCh(Number(e.target.value))}
                   
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCUrr}
                    onChange={(e) => onCurrCh && onCurrCh(e.target.value)}
                >
                    {currOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}


export default InputBox;