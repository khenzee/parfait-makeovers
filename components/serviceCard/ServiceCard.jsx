import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({image, title, body, link}) => {
  return (
    <div className='p-4 border-2 w-full '>
        <div className="object-cover h-[200px] md:h-[250px] overflow-hidden ">
            <Image src={image} width={450} height={400}/>
        </div>
        <div>
            <h3 className="my-2 text-[24px] font-medium">
                {title}
            </h3>
            <p className="mb-3">
               {body}
            </p>
           
                <Link href={`/services/${link}`}>
                    <button className="bg-primary text-primary-foreground w-full p-4">
                        See Price & More Info
                    </button>
                </Link>
            
        </div>
    </div>
  )
}

export default ServiceCard;