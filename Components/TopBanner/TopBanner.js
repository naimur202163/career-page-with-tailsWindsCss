import Image from 'next/image';
import logo from '../../assets/Group 1182.png';
const TopBanner = () => {
  return (
    <>
      {/* How use Custom COlor */}
      <div className="lg:container mx-auto ">
        <div className="grid lg:grid-cols-2 sm:gird-cols-1 gap-1">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-center mt-10 pt-4">
              Leave your mark
            </h2>
            <p className="text-center mt-3 text-gray-500">
              At Engineer’s Cradle, we build products and services which allow
              students to Engage with industrial mentors, jack st. agur blue
              cheese melted cheese. Mascarpone cheesecake everyone loves feta
              stilton caerphilly cheese and wine monterey jack. Mozzarella
              ricotta monterey jack say cheese danish fontina manchego cow.
              Chalk and cheese dolcelatte parmesan. Danish fontina edam bavarian
              bergkase goat rubber cheese pepper jack st. agur blue cheese
              melted cheese. Mascarpone cheesecake everyone loves feta stilton
              caerphilly cheese and wine monterey jack. Mozzarella ricotta
              monterey jack say cheese danish fontina manchego cow.
            </p>
            <button className="rounded  ... bg-sky-500 p-2 my-4 ">
              Save Changes
            </button>
          </div>
          <div className=" text-center ">
            <Image src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBanner;
