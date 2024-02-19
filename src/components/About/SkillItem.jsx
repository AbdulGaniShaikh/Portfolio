import { highlight } from './skillsData';

const SkillItem = (props) => {
  var { skill, color, borderColor } = props;
  if (highlight.indexOf(skill) === -1) {
    color = '';
  }

  return (
    <div className={`border-2 ${color} ${borderColor} px-2 py-1 m-1 rounded-md inline-block select-none`}>{skill}</div>
  );
};

export default SkillItem;
