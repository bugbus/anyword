import AnyInterface from "../interface/AnyInterface";
import WordInterface from "../interface/WordInterface";
class AnyClass implements AnyInterface {
  hashId = "";
  constructor() {
    this.hashId = "1"; //这里创建hashcode
  }
  isEq(word: WordInterface): boolean {
    return true;
  }
}
export default AnyClass;
