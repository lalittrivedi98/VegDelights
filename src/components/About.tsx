import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/VDbyM.png";

export const About = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-black lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Who is Mamta?
            </h1>
            <p className="py-5 text-xl leading-normal text-black lg:text-xl xl:text-2xl">
              good cook :) 
            </p>
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-black lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Why is Mamta?
            </h1>
            <p className="py-5 text-xl leading-normal text-black lg:text-xl xl:text-2xl">
              good cook :) 
            </p>
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-black lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Where is Mamta?
            </h1>
            <p className="py-5 text-xl leading-normal text-black lg:text-xl xl:text-2xl">
              good cook :) 
            </p>
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-black lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              What is Mamta?
            </h1>
            <p className="py-5 text-xl leading-normal text-black lg:text-xl xl:text-2xl">
              good cook :) 
            </p>
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-black lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              When is Mamta?
            </h1>
            <p className="py-5 text-xl leading-normal text-black lg:text-xl xl:text-2xl">
              good cook :) 
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}



