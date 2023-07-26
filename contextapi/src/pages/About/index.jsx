import "./index.css";
import ChangeCounter from "../../components/ChangeCounter";

import { useCounterContext } from '../../hooks/useCounterContext';
import { useTitleColorContext } from "../../hooks/useTitleColorContext";

const About = () => {
  const { counter } = useCounterContext();
  const { color } = useTitleColorContext();

  return (
    <div>
      <h2 style={{ color: color}}>Page destined to About</h2>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default About;
