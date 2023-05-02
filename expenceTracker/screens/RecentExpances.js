import { Text } from "react-native";
import ExpencesOutput from "../components/ExpencesOutput/ExpencesOutput";
import { ExpenceContext } from "../store/expence-context";
import { useContext, useEffect, useState } from "react";
import { getDateMinusDays } from "../util/date";
import { fetchExpences } from "../util/http";

function RecentExpences() {
    const expencesCtx = useContext(ExpenceContext);

    useEffect(() => {
        async function getExpences() {
            const expences = await fetchExpences();
            expencesCtx.setExpences(expences);
        }

        getExpences();
    }, []);

    const recentExpences = expencesCtx.expences.filter(expence => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 70);

        return expence.date > date7DaysAgo;
    });
    return <ExpencesOutput expences={recentExpences} expencesPeriod="Last 7 days" fallbackText="No Expences Registered for the last 7 days" />
}

export default RecentExpences;