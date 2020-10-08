import WordCard from "../entity/WordCard";
import AnyClass from "../entity/AnyClass";
import Comments from "../entity/Comments";
import Word from "../entity/Word";
import Describe from "../entity/Describe";

class CreateWord {
  wordCard: WordCard = new WordCard();
  // constructor() {
  //   this.testCreate();
  // }
  constructor(wordCard = new WordCard()) {
      this.wordCard = wordCard;
  }
}
export default CreateWord
