import { useContext } from "react";
import ExpencesOutput from "../components/ExpencesOutput/ExpencesOutput";
import { ExpenceContext } from "../store/expence-context";

function AllExpences() {
    const expencesCtx = useContext(ExpenceContext);
    return <ExpencesOutput expences={expencesCtx.expences} expencesPeriod="Total" fallbackText="No Registered Expences Found" />
}

export default AllExpences;