import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineLeft } from 'react-icons/ai';

function Content() {
  return (
    <>
      <div className="flex flex-row justify-center p-0 m-0">
            <div className="p-5 m-10 rounded-xl shadow-md bg-gray-100 border-2 border-orange-300 text-l">
                This example webpage has a sliding navbar that extends when the hamburger icon {<GiHamburgerMenu className='inline-flex text-red-600 text-xl'/>} is clicked. 
                <div>
                <br/>
                It can: 
                <ul className='list-decimal ml-5'>
                    <li>Close the navbar if the user clicks on an outside component</li>
                    <li>Close the navbar if the user clicks the {<AiOutlineLeft className='inline-flex text-red-600 text-xl' />} button</li>
                    <li>Dim the content to direct the user's focus to the navbar</li>
                </ul>
            </div>
            </div>

      </div>
    </>
  );
}

export default Content;
