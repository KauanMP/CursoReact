import "./index.css";
import ChangeCounter from "../../components/ChangeCounter";

import { useCounterContext } from '../../hooks/useCounterContext';

const About = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h2>Page destined to About</h2>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default About;
