
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
<div className="flex flex-col bg-black min-h-screen w-screen ">

{/* NAVBAR: NAVBAR WITH UNI LOGO : BLACK*/}

<nav className="flex flex-col items-center px-6 w-screen bg-black  border-b border-gray-900 ">
  <img
  src="/uni.svg"
  width="107" 
  className="ml-4 sm:ml-4"/>
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
  <p className="mt-6 text-md-3 text-white font-matterregular">
  Pay 1/3rd every month for NO EXTRA charges. <br></br>
Split your payments, not your dreams.
  </p>


  <form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="hero-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="hero-email"
                        type="email"
                        className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:ring-green-500"
                        placeholder="Enter Your Phone"
                      />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full rounded-md border border-transparent px-5 py-3 bg-green-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
                      >
                        Download App
                      </button>
                    </div>
                  </form>


  <div className="mt-6">
                    <div className="inline-flex items-center divide-x divide-gray-300">
                      <div className="flex-shrink-0 flex pr-5">
                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />

                      </div>
                      <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                        <span className="font-medium text-white">Rated 4.7 stars</span> by over{' '}
                        <span className="font-medium text-white">500 beta users</span>
                      </div>
                    </div>
                  </div>
</div>

</div>




</div>

</div>

</div>


          
          
          
          <div className="pt-8 overflow-hidden  ">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl  bg-blue-50">

              
              <div>

                <div className="mt-20">

                  <div className="mt-6 sm:max-w-xl">
                    <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                      Server management for growing teams
                    </h1>
                    <p className="mt-6 text-xl text-gray-500">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                    </p>
                  </div>
                  <form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="hero-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="hero-email"
                        type="email"
                        className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
                      >
                        Notify me
                      </button>
                    </div>
                  </form>
                  <div className="mt-6">
                    <div className="inline-flex items-center divide-x divide-gray-300">
                      <div className="flex-shrink-0 flex pr-5">
                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                        <span className="font-medium text-gray-900">Rated 5 stars</span> by over{' '}
                        <span className="font-medium text-indigo-600">500 beta users</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
   


            </div> 
    
            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
              <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">

              </div>
            </div>
          </div>
          <div className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
       

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to send money.
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

        </div>





      )
    }


