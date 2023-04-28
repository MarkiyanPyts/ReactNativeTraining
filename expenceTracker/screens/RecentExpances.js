import { Text } from "react-native";
import ExpencesOutput from "../components/ExpencesOutput/ExpencesOutput";
import { ExpenceContext } from "../store/expence-context";
import { useContext } from "react";
import { getDateMinusDays } from "../util/date";

function RecentExpences() {
    const expencesCtx = useContext(ExpenceContext);
    const recentExpences = expencesCtx.expences.filter(expence => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expence.date > date7DaysAgo;
    });
    return <ExpencesOutput expences={recentExpences} expencesPeriod="Last 7 days" />
}

export default RecentExpences;