import WordCard from "../entity/WordCard";
import AnyClass from "../entity/AnyClass";
import Comments from "../entity/Comments";
import Word from "../entity/Word";
import Describe from "../entity/Describe";

class WordCreater {
  wordCard: WordCard = new WordCard();
  
  constructor(wordCard = new WordCard()) {
      this.wordCard = wordCard;
  }
}
export default WordCreater
