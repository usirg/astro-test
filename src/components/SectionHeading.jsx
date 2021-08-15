export default function SectionHeading(props) {
  const title = props.title;
  const rule = props.rule;

  return (
    <div>
      <div className={'border-t-2 border-gray-700 mt-10' + (!rule ? ' hidden' : '')}></div>
      <div className="text-2xl font-black text-gray-200 px-2 pt-5 pb-5 ">{title}</div>
    </div>
  );
}

