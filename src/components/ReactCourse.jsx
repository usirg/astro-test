import '/global.css';

export default function ReactCourse(props) {
    const coursePath = "/mf";
    const {id, title, duration, img} = props;
    return (
            <a href={coursePath + '/' + id} className="w-full max-w-screen-sm py-2 sm:w-[49%] lg:w-[32%]">
                <img className="rounded-2xl rounded-b-none" src={img}/>
                <div className={'bg-gray-800 max-w-screen-sm rounded-2xl h-20 relative' + (!img ? '' : ' rounded-t-none')}>
                    <div className="px-4 py-2 absolute w-1/2 top-0 left-0 text-gray-400 font-black text-2xl">MF {id}</div>
                    <div className="px-4 py-2 absolute top-0 right-0 text-gray-600 font-black text-xl">{duration}</div>
                    <div className="px-4 py-2 absolute bottom-0 left-0 text-gray-300 font-black text-xl truncate">{title}</div>
                </div>
            </a>
    );
  }
  