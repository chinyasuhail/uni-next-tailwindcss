
import { ChevronRightIcon, StarIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/solid'
import Document, { Html, Head, Main, NextScript } from 'next/document'

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





{/* BLOCK 1: BLOCK THAT ALWAYS MATHCES HEIGH OF THE SCREEN: BACKGROUND BLACK*/}
<div className="flex flex-col bg-black min-h-screen w-screen pb-12 lg:bg-right lg:bg-contain lg:bg-hero-pattern-sm bg-hero-pattern-sm bg-no-repeat bg-contain bg-center">

{/* NAVBAR: NAVBAR WITH UNI LOGO : BLACK*/}

<nav className="flex flex-col items-center px-6 w-screen bg-black ">
  <img
  src="/uni.svg"
  width="107" 
  className="ml-8"/>
  </nav>

{/* HERO-TEXT */}

<div className="pt-4 overflow-hidden">

<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-4 lg:max-w-7xl ">


<div className="mt-5">

<div className="mt-6 sm:max-w-xl">
  <h1 className=" text-5xl text-white font-mattermedium  lg:text-7xl md:text-8xl to-purple-900">
  India's first <br></br>
Pay 1/3rd card <br></br>
is here 
  </h1>
  <p className="mt-6 text-md-3 text-gray-200 font-matterregular">
  Pay 1/3rd every month for NO EXTRA charges. 
Split your payments, not your dreams.
  </p>


<form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex flex-col">



<div className="min-w-0 flex-1 lg:mt-0 mb-2 ">
<label htmlFor="hero-email" className="sr-only">
Full Name
</label>
<input
id="hero-email"
type="text"
maxLength="10"
className="block w-full border bg-gray-100 focus:bg-white border-gray-300  rounded-sm  px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:ring-green-500"
placeholder="Enter Your Full Name"
required
/>
</div>

<div className="min-w-0 flex-1 lg:mt-0 ">
<label htmlFor="hero-email" className="sr-only">
Phone Number
</label>
<input
id="hero-email"
type="number"
maxLength="10"
className="block w-full border bg-gray-100 focus:bg-white border-gray-300 rounded-sm px-5 py-3  text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:ring-green-500"
placeholder="Enter Your Phone Number"
required
/>
</div>

<div className="mt-4">
<button
type="submit"
className="block w-full border border-transparent rounded-sm  px-5 py-3 bg-white text-black text-base font-medium shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:bg-gray-400 focus:ring-offset-2 sm:px-10"
>
Download App
</button>
</div>
                  </form>


  <div className="mt-6">
                    <div className="inline-flex items-center divide-x divide-gray-600">
          
                      <a href='https://play.google.com/store/apps/details?id=cards.uni.app.credit&hl=en_IN&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width="150"/></a> 
                      
                      <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                        <span className="font-medium text-white">Rated 4.7 stars by over 500 beta users </span> 

                      </div>
                    </div>
                  </div>
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


