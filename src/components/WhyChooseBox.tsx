interface props {
  title: string;
  desc: string;
  img: string;
}
const WhyChooseBox = ({title,desc,img}:props) => {
    return (
        <div className="why-choose-box">
            <span className="why-icon"><img src={img} alt="" /></span>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    )
};

export default WhyChooseBox;