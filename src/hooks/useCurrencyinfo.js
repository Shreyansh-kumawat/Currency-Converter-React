import { useEffect, useState } from "react";

function useCurrencyInfo(currencyInformation){

    const [data, setData] = useState({})


        useEffect(()=>{
            fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currencyInformation}.json`)
            .then((res)=> res.json()).
            then((res)=> setData(res[currencyInformation]));
            console.log(data)
            // console.table(data)
        }, [currencyInformation]);
        console.log(data)

        return data;
}

export default useCurrencyInfo;