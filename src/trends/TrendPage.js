import { HiDotsHorizontal } from 'react-icons/hi';
import '../style.css';

const TrendPage = () => {
    return(
        <>
            <div className={' w-[22rem] h-22 flex justify-start flex-col px-4 py-3 hover:bg-gray-200 cursor-pointer'}>
                <div className={'flex justify-between flex-row items w-full'}>
                    <h1 className={'text-sm text-gray-400'}>Politics · Trending</h1>
                    <h2 className={'hover:bg-blue-200 h-[1.5rem] w-[2rem] flex justify-center items-center rounded-3xl'}><HiDotsHorizontal/></h2>
                </div>
                <div className={'font-bold text-sm'}>#mersin</div>
                <div className={'text-sm text-gray-500'}>2,962 Tweets</div>
            </div>
            <div className={' w-[22rem] h-22 flex justify-start flex-col px-4 py-3 hover:bg-gray-200 cursor-pointer'}>
                <div className={'flex justify-between flex-row items w-full'}>
                    <h1 className={'text-sm text-gray-400'}>Politics · Trending</h1>
                    <h2 className={'hover:bg-blue-200 h-[1.5rem] w-[2rem] flex justify-center items-center rounded-3xl'}><HiDotsHorizontal/></h2>
                </div>
                <div className={'font-bold text-sm'}>#benkemal</div>
                <div className={'text-sm text-gray-500'}>595K Tweets</div>
            </div>
            <div className={' w-[22rem] h-22 flex justify-start flex-col px-4 py-3 hover:bg-gray-200 cursor-pointer'}>
                <div className={'flex justify-between flex-row items w-full'}>
                    <h1 className={'text-sm text-gray-400'}>Trending in Turkey</h1>
                    <h2 className={'hover:bg-blue-200 h-[1.5rem] w-[2rem] flex justify-center items-center rounded-3xl'}><HiDotsHorizontal/></h2>
                </div>
                <div className={'font-bold text-sm'}>#Giderlerse</div>
                <div className={'text-sm text-gray-500'}>125K Tweets</div>
            </div>
            <div className={' w-[22rem] h-22 flex justify-start flex-col px-4 py-3 hover:bg-gray-200 cursor-pointer'}>
                <div className={'flex justify-between flex-row items w-full'}>
                    <h1 className={'text-sm text-gray-400'}>Trending in Turkey</h1>
                    <h2 className={'hover:bg-blue-200 h-[1.5rem] w-[2rem] flex justify-center items-center rounded-3xl'}><HiDotsHorizontal/></h2>
                </div>
                <div className={'font-bold text-sm'}>#Giderlerse</div>
                <div className={'text-sm text-gray-500'}>595K Tweets</div>
            </div>
            <div className={' w-[22rem] h-22 flex justify-start flex-col px-4 py-3 hover:bg-gray-200 cursor-pointer'}>
                <div className={'flex justify-between flex-row items w-full'}>
                    <h1 className={'text-sm text-gray-400'}>Trending in Turkey</h1>
                    <h2 className={'hover:bg-blue-200 h-[1.5rem] w-[2rem] flex justify-center items-center rounded-3xl'}><HiDotsHorizontal/></h2>
                </div>
                <div className={'font-bold text-sm'}>#Jahrein</div>
                <div className={'text-sm text-gray-500'}>5,509 Tweets</div>
            </div>
            <div className={' w-[22rem] h-22 flex justify-start flex-col px-4 py-3 hover:bg-gray-200 cursor-pointer'}>
                <div className={'flex justify-between flex-row items w-full'}>
                    <h1 className={'text-sm text-gray-400'}>Software · Trending</h1>
                    <h2 className={'hover:bg-blue-200 h-[1.5rem] w-[2rem] flex justify-center items-center rounded-3xl'}><HiDotsHorizontal/></h2>
                </div>
                <div className={'font-bold text-sm'}>#react</div>
                <div className={'text-sm text-gray-500'}>1,509 Tweets</div>
            </div>
            <div className={' w-[22rem] h-22 flex justify-start flex-col px-4 py-3 hover:bg-gray-200 cursor-pointer'}>
                <div className={'flex justify-between flex-row items w-full'}>
                    <h1 className={'text-sm text-gray-400'}>Economy · Trending</h1>
                    <h2 className={'hover:bg-blue-200 h-[1.5rem] w-[2rem] flex justify-center items-center rounded-3xl'}><HiDotsHorizontal/></h2>
                </div>
                <div className={'font-bold text-sm'}>#ekonomist</div>
                <div className={'text-sm text-gray-500'}>1,259 Tweets</div>
            </div>
        </>


    )
}

export default TrendPage