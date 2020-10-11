import AnyClass from "./AnyClass";
import Comments from "./Comments";

class Word extends AnyClass {
  public 单词: string;
  发音: string;
  评论: Comments;
  constructor(单词 = "", 发音 = "", 评论 = new Comments()) {
    super();
    this.单词 = 单词;
    this.发音 = 发音;
    this.评论 = 评论;
  }
  get单词(): string {
    return this.单词;
  }

  get发音(): string {
    return this.发音;
  }
}
export default Word;

// let word = new CreateWord();
// let comm = new Comments("1","2","3","4","5");
// let word2 = new Word("word-hellow", "null", new Comments("1","2","3","4","5"));
// console.log("word: " + word.wordCard.单词.单词);
// console.log("描述: " + word.wordCard.描述[0].描述);
// console.log("comm: " + comm.作者);
// console.log("评论: " + word.wordCard.评论.作者);
// console.log("单词: " + word2.单词);
//# sourceMappingURL=Word.js.map
