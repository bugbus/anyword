import AnyClass from "./AnyClass";
import Comments from "./Comments";

class Describe extends AnyClass {
  private 描述: string;
  private 评论: Comments;
  constructor(描述 = "", 评论 = new Comments()) {
    super();
    this.描述 = 描述;
    this.评论 = 评论;
  }
  get描述(): string {
    return this.描述;
  }
}
export default Describe;
