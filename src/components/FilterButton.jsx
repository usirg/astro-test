import "/global.css";

export default function FilterButton(props) {

  function ToggleFilter () {
    if (!props.filterState[0].includes(props.title)) {
      props.filterState[1](props.filterState[0].push(props.title));
    } else {
      props.filterState[1](props.filterState[0].filter((item)=> item != props.title));
    }
  }

  // const isSelected = props.filterState[0].includes(props.title);
  return (
    <div onClick={ToggleFilter} className={'active:bg-blue-500 active:text-gray-100 text-gray-200 bg-yellow-300 hover:bg-gray-400 px-6 py-0 border border-transparent rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-100 ' + (props.filterState[0].includes(props.title) ? 'bg-blue-500 text-gray-200' : 'bg-gray-500 text-gray-700')}>{props.title}</div>
  );
}
