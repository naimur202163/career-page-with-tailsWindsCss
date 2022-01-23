import value from '../../assets/Property 1=Value & Perksalue.png';
const data = [
  {
    img: 'value',
  },
];
const OurValue = () => {
  return (
    <div>
      <div className="text-center ">
        <h2 className="text-4xl font-bold">Our values</h2>
        <p>specially crafted for engineers by enginners</p>

        <div className=" gird grid-cols-2 lg:grid-cols-3">
          {/* {data.map((items) => item)} */}
        </div>
      </div>
    </div>
  );
};

export default OurValue;
