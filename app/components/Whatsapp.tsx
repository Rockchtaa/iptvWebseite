import Image from "next/image";
import Link from "next/link";

const Whatsapp = () => {
  return (
    <div className={`fixed bottom-8 right-8 z-50`}>
      <Link href={"/"}>
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
