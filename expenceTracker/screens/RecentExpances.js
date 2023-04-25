import { Text } from "react-native";
import ExpencesOutput from "../components/ExpencesOutput/ExpencesOutput";

function RecentExpences() {
    return <ExpencesOutput expencesPeriod="Last 7 days" />
}

export default RecentExpences;