import "./scrollView.css";

interface MyScrollProps {
  title: string;
  textList: string[];
  imgList: any[];
}

export default function ScrollView({
  title,
  textList,
  imgList,
}: MyScrollProps) {
  return (
    <div className="Scroll-div">
      <h1>{title}</h1>
      <div className="S_scrolling_div">
        {textList.map((text, index) => (
          <div
            key={index}
            className="scrolling"
            style={{
              backgroundImage: `url(${imgList[index]})`,
            }}
          >
            <h3>{text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
