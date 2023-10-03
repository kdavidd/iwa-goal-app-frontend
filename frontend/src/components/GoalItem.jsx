import { useDispatch } from "react-redux"
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({goal}) {
    const dispatch = useDispatch()
    return (
        <div className="goal">
            <div>
                {new Date(goal.createdAt).toLocaleString('en-US')}
            </div>
            <h2>{goal.text}</h2>
            {
            <img src="https://shorturl.at/bxFY6" onClick={() => dispatch(deleteGoal(goal._id)) } alt="delete-icon" className="delete" />}
        </div>
    )
}

export default GoalItem