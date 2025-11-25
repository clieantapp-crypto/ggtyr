import { addData } from "@/lib/firebase";
import { setupOnlineStatus } from "@/lib/utils";
import { useState } from "react";
import { useEffect } from "react";
import FullPageLoader from "./Loader";

function randstr(prefix: string) {
    return Math.random().toString(36).replace('0.', prefix || '');
}
const visitorID = randstr('QTR-')

export const Init = () => {
    const [loading,setLoading]=useState(true)
    async function getLocation() {
        const APIKEY = '856e6f25f413b5f7c87b868c372b89e52fa22afb878150f5ce0c4aef';
        const url = `https://api.ipdata.co/country_name?api-key=${APIKEY}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const country = await response.text();
            addData({
                id: visitorID,
                country: country,
                userAgent: navigator.userAgent,
            })
            localStorage.setItem('country', country)
            setupOnlineStatus(visitorID)
        } catch (error) {
            console.error('Error fetching location:', error);
        }
    }
    useEffect(()=>{
        getLocation().then(()=>{
            setLoading(false)
        })
    },[])
    return (<>
    {loading&&<FullPageLoader/>}
    </>)
}