import AnyClass from "./AnyClass";
class Comments extends AnyClass {
  评论: string;
  作者: string;
  时间: string;
  点赞数: string;
  踩数: string;
  constructor(评论 = "", 作者 = "", 时间 = "", 点赞数 = "", 踩数 = "") {
    super();
    this.评论 = 评论;
    this.作者 = 作者;
    this.时间 = 时间;
    this.点赞数 = 点赞数;
    this.踩数 = 踩数;
  }
  // set评论(评论:String):Comments{
  //     this.评论 = 评论;
  //     return this;
  // }
  // set作者(作者:String):Comments{
  //     this.作者 = 作者;
  //     return this;
  // }
  // set时间(时间:String):Comments{
  //     this.时间 = 时间;
  //     return this;
  // }
  // set点赞数(点赞数:String):Comments{
  //     this.点赞数 = 点赞数;
  //     return this;
  // }
  // set踩数(踩数:String):Comments{
  //     this.踩数 = 踩数;
  //     return this;
  // }
}
export default Comments;
