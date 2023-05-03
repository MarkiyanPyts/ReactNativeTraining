import ExpencesOutput from "../components/ExpencesOutput/ExpencesOutput";
import { ExpenceContext } from "../store/expence-context";
import { useContext, useEffect, useState } from "react";
import { getDateMinusDays } from "../util/date";
import { fetchExpences } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function RecentExpences() {
    const [isFetching, setIsFetching] = useState(true);
    const expencesCtx = useContext(ExpenceContext);

    useEffect(() => {
        async function getExpences() {
            setIsFetching(true);
            const expences = await fetchExpences();
            setIsFetching(false);
            expencesCtx.setExpences(expences);
        }

        getExpences();
    }, []);

    if (isFetching) {
        return <LoadingOverlay />
    }

    const recentExpences = expencesCtx.expences.filter(expence => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 70);

        return expence.date > date7DaysAgo;
    });
    return <ExpencesOutput expences={recentExpences} expencesPeriod="Last 7 days" fallbackText="No Expences Registered for the last 7 days" />
}

export default RecentExpences;