import "/global.css";
import FilterButton from './FilterButton';

export default function Filter(props) {
  return (
    <div className="h-12 items-center text-base sm:text-lg md:text-xl lg:text-2xl flex justify-between m-auto text-center px-0 my-0 sm:max-w-screen-sm font-bold text-gray-700">
      <FilterButton filterState={props.filterState} title='past'/>
      <FilterButton filterState={props.filterState} title='present'/>
      <FilterButton filterState={props.filterState} title='future'/>
    </div>
  );
}
