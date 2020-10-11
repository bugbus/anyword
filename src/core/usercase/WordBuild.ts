import Build from '../interface/Build'
import WordCard from '../entity/WordCard';
import Word from '../entity/Word';
import Describe from "../entity/Describe";
import Comments from "../entity/Comments";

class WordBuild implements Build{
  private wordCard!:WordCard;
  constructor() {
    this.reset();
  }
  public reset(): void {
    this.wordCard = new WordCard();
  }

  set单词(单词: Word): WordBuild {
      this.wordCard.set单词(单词);
      return this;
  }
  set描述(描述: Describe[]): WordBuild {
    this.wordCard.set描述(描述);
    return this;
  }
  set评论(评论: Comments): WordBuild {
    this.wordCard.set评论(评论);
    return this;
  }

  public build(): WordCard {
    const result = this.wordCard;
    this.reset();
    return result;
  }
}
export default WordBuild;