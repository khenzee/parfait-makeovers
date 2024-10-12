import {ContactButton} from "./contactBtn";


const Footer = () => {
  return (
    <div className="bg-primary text-primary-foreground py-8 px-8 md:px-[70px]
     lg:px-[128px] flex flex-col gap-3 md:flex-row">
        <h2 className='w-[400px] md:my-auto text-gray-500'>
            PARFAIT. MAKEOVER
        </h2>
       <div className="flex flex-col gap-2">
        <p><span className="font-medium">Subscribe to our newsletter </span> 
            for the latest skincare tips, exclusive service updates, special
            discounts, and more!</p>
            <div className="py-3 bg-primary-foreground flex align-middle justify-center px-3">
                <div className="block w-[70%] my-auto">
                    <input type="email" className="w-[80%] mr-2  outline-none
                    bg-primary-foreground p-2 text-gray-900"
                    placeholder="Type In Email Address..." />
                </div>
                <div className="w-[30%] text-right">
                    <label className="bg-primary py-3 px-4 inline-block" htmlFor="text" >
                        Join Us
                    </label>
                </div>
            </div>
            <p>We respect your privacy. Unsubscribe anytime.</p>
            <div >
                <div className="bg-green-400 inline-block text-primary">
                <ContactButton
                title= 'Contact Us on Whatsapp'
                />
                </div>
            </div>
       </div>
    </div>
  )
}

export default Footer;