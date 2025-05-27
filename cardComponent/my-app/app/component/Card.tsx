import Image, { StaticImageData } from "next/image";

const Card = ({
  imgSrc,
  title,
  secTitle,
  aboutProduct,
  speed,
  acceleration,
  housePower,
  aeroDynamics
}: {
  imgSrc: StaticImageData;
  title: string;
  secTitle: string;
  aboutProduct: string;
  speed: string,
  acceleration: string,
  housePower: string,
  aeroDynamics: string
}) => {
  return (
    <div>
      <div className="h-1/2 w-96 border-4 rounded-xl drop-shadow-xl border-white bg-gray-50">
        <div className="flex space-x-4 text-sm p-4 opacity-80">
          <div>
            <div className = 'font-bold'>Speed</div>
            <div>{ speed }</div>
          </div>
          <div>
            <div className = 'font-bold'>Acc</div>
            <div>{ acceleration }</div>
          </div>
          <div>
            <div className = 'font-bold'>HousPower</div>
            <div>{ housePower }</div>
          </div>
          <div>
            <div className = 'font-bold'>AeroDynamics</div>
            <div>{ aeroDynamics }</div>
          </div>
        </div>
        {/* <div className="flex space-x-8 text-sm  font-semibold opacity-80">
          <div>{ speed }</div>
          <div>{ acceleration }</div>
          <div>{ housePower }</div>
          <div>{ aeroDynamics }</div>
        </div> */}
        <div className = ' p-5'>
          <Image
            className="ml-8 w-60"
            src={imgSrc}
            alt="it does not have image"
          ></Image>
          <div>
            <div className="text-4xl font-bold">{title}</div>
            <div className="text-2xl font-semibold text-gray-500">
              {secTitle}
            </div>
            <div className="text-gray-400 text-sm">{aboutProduct}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
