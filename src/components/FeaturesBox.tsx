interface props {
  title: string;
  desc: string;
  img: string;
}
const FeaturesBox = ({title,desc,img}:props) => {
    return (
        <div className="features-box">
            <figure><img src={img} alt="" /></figure>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
};

export default FeaturesBox;