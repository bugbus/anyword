import AnyClass from "./AnyClass";
import Comments from "./Comments";
import Word from "./Word";
import Describe from "./Describe";

class WordCard extends AnyClass {
  private 单词!: Word;
  private 描述!: Describe[];
  private 评论!: Comments;
  constructor()
  {
    super();
    this.init();
  }
  private init():void{
    this.单词 = new Word();
    this.描述 = new Array(5);
    this.评论 = new Comments();
  }
  public set单词(单词: Word) {
    this.单词 = 单词;
  }
  public set描述(描述: Describe[]) {
    this.描述 = 描述;
  }
  public set评论(评论: Comments) {
    this.评论 = 评论;
  }
  public get单词():Word{
    return this.单词;
  }
}
export default WordCard;
