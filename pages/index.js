
import { ChevronRightIcon, StarIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/solid'
import Head from 'next/head'



var uni_text = {"background":"-webkit-linear-gradient(102.18deg, #15B7A8 1.92%, #1CDEBD 31.37%, #40E1AE 48.4%, #FFF061 82.53%)","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent"}

const features = [
  {
    name: 'Competitive rates',
    description: 'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Instant transfers',
    description:
      'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Reminder emails',
    description:
      'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
    icon: MailIcon,
  },
]


export default function Home() {
  return (


  

<div>

<Head>
        <title>Uni Cards</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
      </Head>



{/* BLOCK 1: BLOCK THAT ALWAYS MATHCES HEIGH OF THE SCREEN: BACKGROUND BLACK*/}
<div className="w-screen bg-black">
<nav className=" bg-black mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-4 lg:max-w-7xl">

  <img
  src="/uni.svg"
  width="107"></img>
  </nav>
  </div>
  
<div className="flex flex-col bg-black max-h-screen pb-12 lg:bg-right lg:bg-contain lg:bg-hero-pattern-sm bg-hero-pattern-sm bg-no-repeat bg-contain bg-top">

{/* NAVBAR: NAVBAR WITH UNI LOGO : BLACK*/}



{/* HERO-TEXT */}

<div className="pb-4 overflow-hidden ">

<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-4 lg:max-w-7xl ">


<div className="mt-36">

<div className="mt-6 sm:max-w-xl">
  <h1 className=" text-5xl text-white font-mattermedium  lg:text-7xl md:text-8xl to-purple-900">
  India's first <br></br>
<span style={uni_text}>Pay 1/3rd </span>

<br></br>
card is here 
  </h1>
  <p className="mt-6 text-md-3 text-gray-200 font-matterregular">
  Pay 1/3rd every month for NO EXTRA charges. 
Split your payments, not your dreams.
  </p>


<form action="#" className="mt-6 sm:max-w-lg sm:w-full sm:flex flex-col">



<div className="min-w-0 flex-1 lg:mt-0 ">
<label htmlFor="hero-email" className="sr-only">
Phone Number
</label>
<input
id="hero-email"
type="number"
maxLength="10"
className="block w-full bg-gray-100 focus:bg-white border-gray-300 rounded-sm px-5 py-3  text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:ring-green-500"
placeholder="Enter Your Phone Number"
required
/>


<div className="mt-2">
<button
type="submit"
className="block w-full border  rounded-sm  px-5 py-3 bg-black text-white border-gray-500 text-base font-medium shadow hover:bg-gray-200 focus:outline-none focus:ring-2 hover:bg-white hover:text-black focus:ring-offset-2 sm:px-10"
>
Download App
</button>
</div>
</div>
                  </form>



</div>

</div>




</div>

</div>

</div>


          
          
          
         <div>


          </div>
          <div className="bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
       

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-matterregular tracking-tight text-white sm:text-4xl">
              A better way to spend money.
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-200 text-black">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-200">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

        </div>





      )
    }


