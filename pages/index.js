
import { ChevronRightIcon, StarIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Image from 'next/image'


var uni_text = {"background":"-webkit-linear-gradient(102.18deg, #15B7A8 1.92%, #1CDEBD 31.37%, #40E1AE 48.4%, #FFF061 82.53%)","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent"}
var uni_bg = {"background": "radial-gradient(36.37% 188.7% at 75.36% -46.03%, #FFF061 0%, rgba(243, 245, 246, 0) 100%), radial-gradient(26.69% 129.5% at 92.26% -53.35%, #00DCC8 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(23.19% 90.38% at 96.29% -29.08%, #00DCC8 0%, rgba(255, 255, 255, 0) 100%), #F2F4F8"}




/* This example requires Tailwind CSS v2.0+ */
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'
import { Container } from 'postcss'

const navigation = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
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

<div className="mt-6 sm:max-w-xl text-center lg:text-left">
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
<div className="bg-white min-h-80 flex flex-col  py-4 pb-20">

{/* BEGIN SECTION 2 INTRO TEXT */} 

<span className=" text-sm  font-matterregular my-2 py-4 text-gray-700 lg:text-xl lg:font-bold"> Uni Pay 1/3rd Card - Now open for Beta </span>

{/* END SECTION 2 INTRO TEXT */}


{/* BEGIN SECTION 2 HERO  TEXT */} 

<div className=" text-5xl font-semibold font-matterregular lg:text-8xl">
{unifeatures.map((unifeatures) => (
  <span key={unifeatures.id} style={uni_text}>{unifeatures.feat} <br></br></span> 
 ))}
</div>

{/* END SECTION 2 HERO  TEXT */}   

</div>

</div>
          

{/* END BEGIN SECTION 2 */}


{/* BEGIN SECTION 3 UNI FEATURES */} 
          
<div className="relative bg-black py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">

        <div className="mt-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 items-baseline">


              <div className="pt-6">
                <div className="flow-root bg-black rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center bg-black p-3 rounded-md shadow-lg">
                      <img src="/bill.svg" alt="pay1/3rd"/>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg lg:text-2xl font-medium text-white tracking-tight">Pay in 3 parts</h3>
                    <p className="mt-5 text-base text-gray-300">
                    Pay for anything and everything and just pay 1/3rd every month. Nothing more, not even a rupee.
                    </p>
                  </div>
                </div>
              </div>



              <div className="pt-6">
                <div className="flow-root bg-black rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 rounded-md shadow-lg">
                      <img src="/rewards.svg" alt="Uni Rewards"/>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg lg:text-2xl font-medium text-white tracking-tight">1% Rewards when you Pay in Full</h3>
                    <p className="mt-5 text-base text-gray-300">
                    Choose to pay in full, post the 30 days free credit period & enjoy 1% rewards in the form of cashback.
                    </p>
                  </div>
                </div>
              </div>




              <div className="pt-6">
                <div className="flow-root bg-black rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                      <img src="/nofee.svg" alt="Uni No Joining Fee"/>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg lg:text-2xl font-medium text-white tracking-tight">No Joining Fee</h3>
                    <p className="mt-5 text-base text-gray-300">
                    Yes, you read that right! No joining fee, no annual charges for our Beta customers..
                    </p>
                  </div>
                </div>
              </div>



          </div>
        </div>
      </div>
    </div>



{/* END SECTION 3 UNI FEATURES */} 


{/* BEGIN SECTION 4 UNI VISA */} 


<div style={uni_bg} className="relative  py-36 sm:py-24 lg:py-32 h-5/6 pt-16">


      <div className="flex flex-col items-center justify-center">
      <p className="mt-4 text-lg mb-4 text-gray-500">
           Powered By
          </p>

      <img src="/visa.svg" width="100" height="100" alt="Visa Logo"/>
      <div className="container text-center items-center mt-6">
       
      

          <h3 className="mt-4 lg:text-4xl text-xl font-extrabold font-matterregular text-black">
          Uni Pay 1/3rd card is accepted on <span className=" text-green-400 fo">99%</span> of the merchants <br></br> across the country that accept Visa cards.
          </h3>

        </div>


      </div>
</div>


{/* BEGIN FOOTER UNI VISA */} 

<footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} target="_blank" className="text-gray-400 hover:text-gray-500" rel="noreferrer">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-left text-base text-gray-700">&copy; 2021 Uniorbit Technologies Pvt Ltd.</p>
          <p className="text-gray-600">Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI Colony,<br></br> Koramangala, Bengaluru, Karnataka 560034</p>
        </div>
      </div>
    </footer>


</div>






   





      )
    }


