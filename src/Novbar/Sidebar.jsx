import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faHouseUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import homeImg from '/src/imgfolder/house.png'
import homeWhiteImg from '/src/imgfolder/housewhite.png'
import MoonImg from '/src/imgfolder/night.png'
import SunImg from '/src/imgfolder/sun (1).png'
import ReactSwitch from 'react-switch'
import userBlack from '/src/imgfolder/userBlack.png'
import userWhite from '/src/imgfolder/userWhite.png'
import ShopingWhite from '/src/imgfolder/shopping-cartWhite.png'
import ShopingBlack from '/src/imgfolder/shopping-cartBlack.png'
import PowerBlackOf from '/src/imgfolder/power-offBlack.png'
import PowerWhiteOf from '/src/imgfolder/power-offWhite.png'






function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark'); 
    }
  }, [darkMode]);


  const handleDarkModeChange = (checked) => {
    setDarkMode(checked);
  };


  const [open ,setopen]=useState(false)

  

  
 return (
    <div className={`Sidebar ${open? 'w-72':' w-16'} min-h-screen  relative duration-200 flex  flex-col-reverse ${darkMode ? 'bg-gray-800' : ' bg-white  '}`}>
      <img src="./vite.svg" alt="" className={`absolute top-3 left-2 flex`} />
      <h2 className={`font-serif absolute left-20 top-3 ${!open&&'scale-0'}  ${darkMode ? ' text-[#B931FC]' : ' text-[#707070] '} `}>React+Vite</h2>
      <div className=' icon mx-[260px] my-2'>
       <FontAwesomeIcon icon={faChevronCircleRight} className={` cursor-pointer absolute right-[-10px] top-10 ${!open&&'rotate-180'} `}  onClick={()=>setopen(!open)} />
      </div>
      <ul className=' ' >
       <li className={` Licontent  inline-flex h-8 absolute  top-20 left-2   transition-colors rounded-[5px]  gap-10 ${!open ?' hover:bg-[#DCBFFF] w-[29px] cursor-pointer ':'hover:bg-[#DCBFFF] '} w-[250px]  cursor-pointer  `}>
         <img src={darkMode? homeWhiteImg:homeImg} width={30} alt="" className=' '/>
         <a href="" className={`font-bold text-lg  ${!open&&'scale-0'}`}>Home</a>
       </li>
      </ul>
      <ul className=' ' >
       <li className={`  inline-flex h-8 absolute top-40 left-2  transition-colors rounded-[5px]   gap-10 ${!open ?' hover:bg-[#DCBFFF] w-[32px]  cursor-pointer ':'hover:bg-[#DCBFFF]'} w-[250px] cursor-pointer  `}>
         <img src={darkMode? userWhite:userBlack} width={30} alt="" className=' '/>
         <a href="" className={`font-bold text-lg  ${!open&&'scale-0'}`}>Profile</a>
       </li>
      </ul>
      <ul className=' ' >
       <li className={` inline-flex h-8 absolute top-[240px] left-2   transition-colors rounded-[5px]  gap-10 ${!open ?' hover:bg-[#DCBFFF] w-[29px]  cursor-pointer ':'hover:bg-[#DCBFFF]'} w-[250px] cursor-pointer  `}>
         <img src={darkMode? ShopingWhite:ShopingBlack} width={30} alt="" className=' '/>
         <a href="" className={`font-bold text-lg  ${!open&&'scale-0'}`}>Add to Cart </a>
       </li>
      </ul>
      <ul className=' ' >
       <li className={`  inline-flex h-8 absolute top-[320px] left-2 transition-colors rounded-[5px]  gap-10 ${!open ?' hover:bg-[#DCBFFF] w-[29px] cursor-pointer ':'hover:bg-[#DCBFFF]'} w-[250px] cursor-pointer  `}>
       <img src={darkMode? PowerBlackOf:PowerWhiteOf} width={30} alt="" className=' '/>
         <a href="" className={`font-bold  text-lg  ${!open&&'scale-0'}`}>Logout</a>
       </li>
      </ul>
      <ul >
      <li className={` ${!open? 'bg-[#EEEDED]  w-[50px]  flex my-[68px] mx-1 h-7  rounded-md  opacity-0':' bg-[#EEEDED] flex w-[250px] my-[68px] mx-5 h-10 rounded-md ' } `}>
        <img src={darkMode? MoonImg:SunImg} width={20} className={` Sunimg ${!open  ? ' opacity-0 h-6':'opacity-0 h-6'}`}/>
        <img src={darkMode ? MoonImg : SunImg} width={20} className={`monImg ${!open ? 'opacity-0' : 'h-6 my-2'}`} alt="Moon" />
        <span className={`  my-2  ml-5  font-bold ${!open&&'scale-0'} `}>{darkMode ?'Dark Mode ':'Light Mode'} </span>
       </li>
      </ul>
      <div className='relative'>
        <div className={`toogle-switch ${!open ? ' absolute top-[72px] left-[5px] outline-none  ' : ' absolute top-[78px] left-[200px] outline-none'}`} >
        <ReactSwitch
          checked={darkMode}
          onChange={handleDarkModeChange}
          onColor="#B931FC" 
          offColor="#FFD700"
          className=' outline-none'
         />
        </div>
       

    
      </div>
     
    </div>
       
  );
}

export default Sidebar;