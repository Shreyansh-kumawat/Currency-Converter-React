import { useState, useEffect } from "react";
// import InputBox from "./components/InputBox";
import InputBox from "./components/Input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";


function App() {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState("inr");
    const [to, setTo] = useState("usd");
    const [convertedAmt, setConvertedAmt] = useState(0);

    const currInfo = useCurrencyInfo(from);
    const options = Object.keys(currInfo);

    // Automatically convert currency when amount, from, or to changes
    useEffect(() => {
        setConvertedAmt(amount * (currInfo[to] || 0));
    }, [amount, from, to, currInfo]);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmt);
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('images/bg.jpeg')`,
                color: "black",
                backgroundSize: 'cover'
            }}
        >
            <div className="w-full">
                <div className="w-3xl max-w-4xl h-96 mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm  flex justify-center items-center">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                        className="w-3/4 h-full flex flex-col justify-center"
                    >
                        <div className="w-full mb-1 h-1/3">
                            <InputBox
                                label="From"
                                amount={amount}
                                currOptions={options}
                                onCurrCh={(currency) => setFrom(currency)}
                                selectCUrr={from}
                                onAmtCh={(amount) => setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-gray-700 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4 h-1/3">
                            <InputBox
                                label="To"
                                amount={convertedAmt}
                                currOptions={options}
                                onCurrCh={(currency) => setTo(currency)}
                                selectCUrr={to}
                                amountDisable
                            />
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
