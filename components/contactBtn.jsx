import Link from "next/link";

export const ContactButton = ({title}) => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
    const message = "Hello, I would like to inquire about your services."; // Optional pre-filled message
  
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    return (
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
         <button className='py-2 
             px-4 font-medium '>
                {title}
        </button>
      </Link>
    );
  };

   export const SectContactButton = ({title}) => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
    const message = "Hello, I would like to inquire about your services."; // Optional pre-filled message
  
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    return (
      <Link className="w-full" href={whatsappLink} target="_blank" rel="noopener noreferrer">
         <button className='py-2 w-full
             px-4 font-medium '>
                {title}
        </button>
      </Link>
    );
  };

 
  

  