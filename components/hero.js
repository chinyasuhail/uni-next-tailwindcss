
import Navbar from "./navbar";
function Hero(){



return (
<div>
<div className="flex flex-col mx-auto bg-black items-left h-screen bg-right bg-hero-pattern bg-no-repeat bg-contain"> 
<Navbar></Navbar>


<div className=" flex flex-col items-left  justify-center h-screen  px-16 ">
    <h1 className="text-7xl text-white ">


India's first <br></br>
Pay 1/3rd card <br></br>
is here 

    </h1>

    <h3 className="text-white py-4 my-2">

    Pay 1/3rd every month for NO EXTRA charges. <br></br>
Split your payments, not your dreams.
    </h3>

<div>
<input className="border-white p-4 w-80 my-6 rounded-sm" type="email" placeholder="Enter Your Email"></input>
    <button className="bg-white text-black p-4 w-40 my-6 hover:bg-yellow-300 mx-2 rounded-sm"> Apply</button>

    </div>


</div>



</div>



</div>
);
}

export default Hero;