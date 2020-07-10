import { Link } from "react-router-dom";
import AddHabit from "../../components/AddHabit";
import HabitListItem from "../../components/HabitListItem";
import {useSelector} from "react-redux";


const New = () => {
    const habitList = useSelector(state => state.habits)
    return (
    <div>
      <h2>Register Page</h2>
      <Link to={"/"}>トップページ</Link>
      <AddHabit />
      <ul>
        {habitList.map((habit) => (
          <HabitListItem key={habit.name} name={habit.name} number={habit.number} unit={habit.unit} />
        ))}
      </ul>
    </div>
    );
};

export default New;
