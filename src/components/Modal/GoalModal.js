import GoalForm from "../Form/GoalForm";
import GlobalModal from "./GlobalModal";

function GoalModal() {
    return <GlobalModal title="목표 설정" icon="goal"><GoalForm /></GlobalModal>;
}

export default GoalModal;