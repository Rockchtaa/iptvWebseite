import Image from "next/image";
import Link from "next/link";

const Whatsapp = () => {
  return (
    <div className={`fixed bottom-8 right-8 z-50 hover:cursor-pointer`}>
      <Link target="_blank" rel="noopener noreferrer" href={"https://api.whatsapp.com/message/PF3KPNAZ4IFDF1"}>
        <Image
          className="rounded-full"
          width={70}
          height={70}
          src="/images/whatsapp.png"
          alt="whatsapp support"
        />
      </Link>
    </div>
  );
};

export default Whatsapp;
