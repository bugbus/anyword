import WordInterface from "./WordInterface";
interface AnyInterface {
  hashId: string;
  isEq(word: WordInterface): boolean;
}
export default AnyInterface;
