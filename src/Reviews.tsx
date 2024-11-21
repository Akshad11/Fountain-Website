import "./reviews.css";
import face1 from "./assets/face1.png";
import {
  faAngleLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Reviews() {
  const highlightNthWord = (text: string, nth: number) => {
    const words = text.split(" ");
    return words.map((word, index) =>
      index === nth - 1 ? (
        <span key={index} className="highlight-word">
          {word}
        </span>
      ) : (
        <span key={index}>{word} </span>
      )
    );
  };
  return (
    <div className="Review-div">
      <h1>Reviews</h1>
      <div className="R_Text-div">
        <div className="R_textIcon-div">
          <h2>{highlightNthWord("What our Students say about us", 3)}</h2>
          <div className="arrowDiv">
            <div className="arrowIcon">
              <FontAwesomeIcon
                icon={faChevronLeft}
                font-size="30px"
                style={{ color: "#FFD43B" }}
              />
            </div>
            <div className="arrowIcon">
              <FontAwesomeIcon
                icon={faChevronRight}
                font-size="30px"
                style={{ color: "#FFD43B" }}
              />
            </div>
          </div>
        </div>
        <div className="R_div">
          <div className="R_headText-div">
            <img src={face1} alt="" />
            <div>
              <h3>Mohh Jumah</h3>
              <h3 className="OcolorText">Senior Developer</h3>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            ac blandit nam massa massa elementum mollis lectus. Sit ultricies
            nisl amet non, quis enim velit tempus. Interdum duis imperdiet
            venenatis.
          </p>
        </div>
        <div className="R_div">
          <div className="R_headText-div">
            <img src={face1} alt="" />
            <div>
              <h3>John Mark</h3>
              <h3 className="OcolorText">Data Analyst</h3>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            ac blandit nam massa massa elementum mollis lectus. Sit ultricies
            nisl amet non, quis enim velit tempus. Interdum duis imperdiet
            venenatis.
          </p>
        </div>
      </div>
    </div>
  );
}
