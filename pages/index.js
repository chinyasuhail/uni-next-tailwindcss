
import { ChevronRightIcon, StarIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Image from 'next/image'


var uni_text = {"background":"-webkit-linear-gradient(102.18deg, #15B7A8 1.92%, #1CDEBD 31.37%, #40E1AE 48.4%, #FFF061 82.53%)","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent"}




const features = [
  {
    name: 'Pay In 3 Parts',
    description: 'Pay for anything and everything and just pay 1/3rd every month. Nothing more, not even a rupee.',
    image: '/bill.svg',
  },
  {
    name: 'No hidden fees',
    description:
      'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
      image: '/bill.svg',
  },
  {
    name: 'Instant transfers',
    description:
      'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
      image: '/bill.svg',
  },
]

const unifeatures = [
  { id: 1, feat: "It's different"},
  { id: 2, feat: "It's Unique"},
  { id: 3, feat: "It's powerful"},
]

export default function Home() {
  return (


  

<div>

<Head>
        <title>Uni Cards</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Uni Cards"/>
      </Head>



{/* BLOCK 1: BLOCK THAT ALWAYS MATHCES HEIGH OF THE SCREEN: BACKGROUND BLACK*/}

{/* START NAVBAR: NAVBAR WITH UNI LOGO : BLACK*/}

<div className="w-screen bg-black">
<nav className=" bg-black mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-4 lg:max-w-7xl">

  <Image
  src="/uni.svg"
  width="120"
  height="60"
  alt="Uni Cards Logo"
  ></Image>
  </nav>
  </div>
  
{/* END NAVBAR: NAVBAR WITH UNI LOGO : BLACK*/}

{/* BEGIN HERO SECTION */}
  
<div className="flex flex-col-reverse justify-center bg-black min-h-screen  lg:bg-right lg:bg-contain lg:bg-hero-pattern-sm bg-hero-pattern-sm bg-no-repeat bg-contain bg-top">

<div className="overflow-hidden ">

<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-4 lg:max-w-7xl ">



{/* BEGIN HERO SECTION TEXT */}


<div className="mt-36">

<div className="mt-6 sm:max-w-xl text-center">
  <h1 className=" text-6xl text-white font-mattermedium  lg:text-7xl md:text-8xl to-purple-900">
  India's first <br></br>
<span style={uni_text}>Pay 1/3rd </span>

<br></br>
card is here 
  </h1>
  <p className="mt-6 text-md-3 text-gray-200 font-matterregular">
  Pay 1/3rd every month for NO EXTRA charges. 
Split your payments, not your dreams.
  </p>


{/* END HERO SECTION TEXT */}

{/* BEGIN HERO SECTION FORM */}

<form action="#" className="mt-6 sm:max-w-lg sm:w-full sm:flex flex-col">

<div className="min-w-0 flex-1 lg:mt-0 ">

<label htmlFor="hero-email" className="sr-only">Phone Number</label>
<input id="hero-email" type="number" maxLength="10" className="block w-full bg-gray-100 focus:bg-white border-gray-300 rounded-sm px-5 py-3  text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:ring-green-500" placeholder="Enter Your Phone Number" required/>


<div className="mt-2">

<button type="submit" className="block w-full border  rounded-sm  px-5 py-3 bg-black text-white border-gray-500 text-base font-medium shadow focus:outline-none focus:ring-2 hover:bg-white hover:text-black focus:ring-offset-2 sm:px-10">
Download App
</button>

</div>
</div>

</form>

{/* END HERO SECTION FORM */}

</div>

</div>




</div>

</div>

</div>

{/* END BEGIN HERO SECTION */}


{/* BEGIN SECTION 2 */}




<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-4 lg:max-w-7xl ">
<div className="bg-white min-h-80 flex flex-col  justify-center items-center py-4 pb-20">

{/* BEGIN SECTION 2 INTRO TEXT */} 

<span className=" text-sm  font-matterregular my-2 py-4 text-gray-700"> Uni Pay 1/3rd Card - Now open for Beta </span>

{/* END SECTION 2 INTRO TEXT */}


{/* BEGIN SECTION 2 HERO  TEXT */} 

<div className=" text-5xl font-semibold font-matterregular">
{unifeatures.map((unifeatures) => (
  <span key={unifeatures.id} style={uni_text}>{unifeatures.feat} <br></br></span> 
 ))}
</div>

{/* END SECTION 2 HERO  TEXT */}   

</div>

</div>
          

{/* END BEGIN SECTION 2 */}


{/* BEGIN SECTION 3 UNI FEATURES */} 
          
<div className="bg-black overflow-hidden text-center min-h-48">

<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-4 lg:max-w-7xl flex flex-col items-center py-8 ">
  

 <div>
<img src="/bill.svg" width="250" height="250" alt="uni_card_pay_one_third_feature" className="text-center"/>
<h1 className="text-white">Pay In 1/3rd </h1>

</div>               
</div>
  
      </div>
    </div>

   





      )
    }


