import {AiOutlineSearch} from 'react-icons/ai';
import {HiDotsHorizontal} from 'react-icons/hi';
import './style.css';
import TrendPage from "./trends/TrendPage";
import MenuCategory from "./menu/Menu-Category";
import Tweet from "./Tweet";
import {useRef, useState} from "react";

function App() {
    const [text,setText] = useState('0')
    const whatshappening = useRef()
    return (
        <div className="w-[88vw] h-screen flex flex-row 2xl:justify-center">
            <div className=" h-screen sm:w-[17rem] w-[7rem] border-r-[1px] border-gray-200 fixed z-5 mr-[1000px] sm:mr-0 xl:mr-[35vw] 2xl:mr-[985px]">
                <div className={'sm:mr-0 pl-0 mr-96 sm:pl-5 pt-4 '}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" aria-label={'emrelutfi'}
                         className="w-[3rem] p-2 ml-2 cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                        <g>
                            <path
                                fill={'#00acee'}
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">

                            </path>
                        </g>
                    </svg>
                    <div className={'pt-6 flex flex-col gap-0 categorymenu '}>
                        <MenuCategory/>
                        <div
                            className={'sm:w-[13.5rem] sm:h-[3.2rem] h-[2.5rem] w-[5rem] sm:ml-2 ml-[-2.5vw] mt-4 rounded-3xl bg-twittercolor hover:bg-blue-500 cursor-pointer flex justify-center items-center'}>
                            <h2 className={'font-bold text-white text-sm sm:text-2xl'}>Tweet</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[37.58rem] max-h-screen h-screen border-r-[1px] border-gray-200 ml-[115px] sm:ml-[17rem]">
                <div className={'w-[37.5rem] opacity-90 h-[7rem] border-b-[1px]'}>
                    <div className={'cursor-pointer'}>
                        <div className={'fixed z-10 opacity-90 blur-50 border-b-[1px] bg-white'}>
                            <h2 className={'p-3 pl-5 text-xl font-bold'}>Home</h2>
                            <div className={'grid w-[37.5rem] h-[3.7rem] grid-cols-2 grid-flow-col'}>
                                <div
                                    className={'w-full relative h-full flex items-center flex-col mt-[0rem] pt-2 gap-1 justify-center hover:bg-gray-200 cursor-pointer'}>
                                    <h2 className={'text-m font-bold'}>For you</h2>
                                    <hr className={'absolute bottom-0 w-14 h-[5px] bg-twittercolor rounded-3xl'}/>
                                </div>
                                <div
                                    className={'w-full h-full flex items-center flex-col mt-[0rem] pt-2 gap-1 justify-center hover:bg-gray-200 cursor-pointer'}>
                                    <h2 className={'text-m  font-bold text-gray-500'}>Following</h2>
                                    <hr className={'absolute bottom-0 yw-14 h-[5px] opacity-0 mt-[0.2rem] rounded-3xl'}/>
                                </div>
                            </div>
                        </div>
                        <div className={'w-full h-28  border-b-[1px] flex flex-col'}>
                            <div className={'p-4 flex flexrow mt-[6.5rem]'}>
                                <img className={'w-12 h-12 rounded-[2rem]'}
                                     src={'https://pbs.twimg.com/profile_images/1553571985292132352/euvlf0YS_x96.jpg'}
                                     alt=""/>
                                <input ref={whatshappening} onChange={(e) => {
                                    setText(e.target.value.length)
                                }} placeholder={`What's Happening?`} className={'placeholder-gray-500 font-[400] text-xl text-gray-600 mt-3 ml-2 border-none outline-none max-w-2xl '} type="text"></input>
                            </div>
                            <div
                                className={'relative flex flex-row h-17 items-center pl-20 gap-2 textarray cursor-auto'}>
                                <svg viewBox="0 0 24 24" aria-hidden="true"
                                     className={'p-1 hover:bg-twittercolor hover:text-white rounded-2xl group cursor-pointer'}>
                                    <g>
                                        <path
                                            className={'group-hover:fill-white'}
                                            fill={'#1DA1F2'}
                                            d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                                    </g>
                                </svg>
                                <svg viewBox="0 0 24 24" aria-hidden="true"
                                     className={'p-1 hover:bg-twittercolor hover:text-white rounded-2xl group cursor-pointer'}>
                                    <g>
                                        <path
                                            className={'group-hover:fill-white'}
                                            fill={'#1DA1F2'}
                                            d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z">

                                        </path>
                                    </g>
                                </svg>
                                <svg viewBox="0 0 24 24" aria-hidden="true"
                                     className={'p-1 hover:bg-twittercolor hover:text-white rounded-2xl group cursor-pointer'}>
                                    <g>
                                        <path
                                            className={'group-hover:fill-white'}
                                            fill={'#1DA1F2'}
                                            d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z">

                                        </path>
                                    </g>
                                </svg>
                                <svg viewBox="0 0 24 24" aria-hidden="true"
                                     className={'p-1 hover:bg-twittercolor hover:text-white rounded-2xl group cursor-pointer'}>
                                    <g>
                                        <path
                                            className={'group-hover:fill-white'}
                                            fill={'#1DA1F2'}
                                            d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path>
                                    </g>
                                </svg>
                                <svg viewBox="0 0 24 24" aria-hidden="true"
                                     className={'p-1 hover:bg-twittercolor hover:text-white rounded-2xl group cursor-pointer'}>
                                    <g>
                                        <path
                                            className={'group-hover:fill-white'}
                                            fill={'#1DA1F2'}
                                            d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path>
                                    </g>
                                </svg>
                                <svg viewBox="0 0 24 24" aria-hidden="true"
                                     className={'p-1 cursor-auto rounded-2xl group cursor-pointer'}>
                                    <g>
                                        <path
                                            className={' opacity-60'}
                                            fill={'#1DA1F2'}
                                            d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path>
                                    </g>
                                </svg>
                                <div
                                    className={`cursor-pointer absolute right-5 w-[5rem] h-8 bottom-1 bg-twittercolor rounded-[2rem] opacity-50 select-none ${text > 0 ? 'opacity-100' : 'bg-twittercolor'}`}>
                                    <h2 className={`text-white font-bold align-middle text-center mt-1`}>Tweet</h2>
                                </div>
                            </div>
                        </div>
                        <div className={'hover:bg-gray-50 w-full h-full mt-28 border-t-[1px] border-r-[0px] '}>
                            <Tweet/>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-[24rem] h-full hidden justify-center lg:flex">
                <div className="relative w-[22rem] h-12 mt-3 ml-5">
                    <input
                        className="bg-inputcolor rounded-3xl w-full h-full  pl-14 text-m focus:bg-white focus:border-1 focus:border-blue-200 placeholder-gray-500"
                        placeholder="Search Twitter"
                        type="text"
                    />
                    <div className="absolute top-0 left-0 h-full flex items-center pl-5">
            <span className="text-gray-500 pr-4">
              <AiOutlineSearch size={22}/>
            </span>
                    </div>
                    <div className={'bg-categorycolor w-full h-fit rounded-2xl mt-4 pb-2 '}>
                        <div className={'trending'}>
                            <h2 className={'px-5 pt-4 text-xl font-extrabold h-14'}>Trends for you</h2>
                            <TrendPage/>
                        </div>
                    </div>
                    <div className={'bg-categorycolor w-full h-fit rounded-2xl mt-4 pb-2 '}>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-xl font-extrabold pl-4 pt-3'}>Who to follow</h2>
                            <div className={'flex flex-row mt-6 p-3 w-full cursor-pointer hover:bg-gray-100'}>
                                <img className={'w-10 h-10 rounded-[2rem]'}
                                     src={'https://pbs.twimg.com/profile_images/1553571985292132352/euvlf0YS_x96.jpg'}
                                     alt=""/>
                                <div className={'flex flex-col group'}>
                                    <h4 className={'pl-4 leading-3 tracking-wider font-bold group-hover:decoration-2'}>EmreLutfi</h4>
                                    <h5 className={'pl-[1rem] text-sm pt-2 text-gray-500'}>@emrelutfii</h5>
                                </div>
                                <div
                                    className={'absolute right-2 w-[5rem] h-8 bg-black hover:bg-gray-800 rounded-[2rem] flex items-center justify-center'}>
                                    <h1 className={'text-white font-bold'}>Follow</h1>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
