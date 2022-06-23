import { Gi3DHammer, GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineLeft, AiOutlineHome } from 'react-icons/ai';
import useComponentVisible from '../hooks/UseComponentVisible';
function Sidebar() {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    const setSidebarVisible = () => {
        setIsComponentVisible(true);
    };

    const closeSidebar = () => {
        setIsComponentVisible(false);
    };

    return(
        <>
        <GiHamburgerMenu size={30} onClick={setSidebarVisible} className='fixed ml-2 mt-2 text-slate-900 cursor-pointer text-white hover:text-orange-600'/>
        { isComponentVisible &&
        <>
            <div className="fixed h-screen w-screen bg-gray-900/30"/>
            <div ref={ref} className="z-10 bg-gradient-to-b from-indigo-800 to-orange-700 via-purple-700 top-0 left-0 fixed w-80 min-h-full flex flex-col font-extralight text-2xl transition-width duration-1000">
                    <div class="text-white text-center mb-10 mt-5 p-10">This is my <span class="font-bold text-white">example</span> sidebar.</div>
                    <AiOutlineLeft onClick={closeSidebar} className='float-left text-white text-2xl absolute top-4 right-4 cursor-pointer hover:text-orange-600' />

                    <div className="flex flex-row justify-center align-middle cursor-pointer bg-purple-900 hover:bg-orange-600 ml-10 mr-10 rounded-xl p-1 m-2">
                        <AiOutlineHome size={30} className= 'text-white mr-3'/> <span className="ml-1 text-white">Home</span>
                    </div>
                    <div className="flex flex-row justify-center align-middle cursor-pointer bg-purple-900 hover:bg-orange-600 ml-10 mr-10 rounded-xl p-1 m-2">
                        <Gi3DHammer size={30} className='relative mt-1 mr-3  align-middle justify-center text-white'/> <span className="ml-1 text-white">Build</span>
                    </div>
            </div>
        </>
        }

        </>
    );
};

export default Sidebar;