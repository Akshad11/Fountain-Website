import "./offers.css";

interface MyOffersProps {
  title: string;
  headText: string;
  subheadText: string;
  pText: string;
  btnText: string;
  img: any;
  highNum: any;
  isRevese: boolean;
}

export default function Offer({
  title,
  headText,
  subheadText,
  pText,
  btnText,
  img,
  highNum,
  isRevese,
}: MyOffersProps) {
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
    <div className="offer_div">
      <h1>{title}</h1>
      <div
        className={
          isRevese ? "offer_top-div offer_top-div-rev" : "offer_top-div"
        }
      >
        <div className="off_img-div">
          <img src={img} alt="Image" />
        </div>
        <div className="off_text-div">
          <div style={{ placeSelf: `${isRevese ? "end" : "start"}` }}>
            <h2>{highlightNthWord(headText, highNum)}</h2>
            <h3>{highlightNthWord(subheadText, highNum)}</h3>{" "}
            {/* Highlight 2nd word */}
            <p>{pText}</p>
            <button type="submit">{btnText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
