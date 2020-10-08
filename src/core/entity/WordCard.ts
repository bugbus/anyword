import AnyClass from "./AnyClass";
import Comments from "./Comments";
import Word from "./Word";
import Describe from "./Describe";

class WordCard extends AnyClass {
  单词: Word;
  描述: Describe[];
  private 评论: Comments;
  constructor();
  constructor(
    单词 = new Word(),
    描述 = [new Describe()],
    评论 = new Comments()
  ) {
    super();
    this.单词 = 单词;
    this.描述 = 描述;
    this.评论 = 评论;
  }
  set单词(单词: Word): WordCard {
    this.单词 = 单词;
    return this;
  }
  set描述(描述: Describe[]): WordCard {
    this.描述 = 描述;
    return this;
  }
  set评论(评论: Comments): WordCard {
    this.评论 = 评论;
    return this;
  }
  build(): WordCard {
    return this;
  }
}
export default WordCard;
