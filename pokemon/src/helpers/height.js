export default function pokeHeight(height) {
  const centiHeight = height * 0.1;

  return centiHeight.toString().slice(0, 3) + " cm";
}
