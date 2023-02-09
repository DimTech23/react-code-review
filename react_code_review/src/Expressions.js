export default function Expressions() {
  const subtext = "This is my subtext";
  const reactLogoURL =
    "https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png";

  const duplicate = (value) => value * 2;
  return (
    <>
      <h1>Expressions example</h1>
      <h2>{subtext.toUpperCase()}</h2>
      <h3>The double of 3 is equal to {duplicate(3)}</h3>
      <img src={reactLogoURL} alt="react logo" />
    </>
  );
}
