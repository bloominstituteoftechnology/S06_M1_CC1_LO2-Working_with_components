/*
PROBLEM 1
In the HTML-like syntax below (called JSX) we are mostly using hard-coded text content, like <h2>Writing Proper JSX</h2>. For this task, you will replace each element's text with the data inside the object `texts`. Use expressions inside curly braces of the JSX to place the data where it needs to go. The <h1> is already done for you.

PROBLEM 2
Create a second <section> element right after the first section element. It's not possible to return two trees of elements, so get around the problem by enclosing both sections in a <></>.

PROBLEM 3
Replace the hard-coded attribute values in the JSX, specifically the class on <section> and the id on <ol> with expressions inside curly braces, using data from the `attributes` variable.
*/
export default function App() {
  let texts = {
    welcomeH1: 'Welcome to React!',
    properH2: 'Writing Proper JSX',
    li1: 'Close your tags',
    li2: 'Return a single top-level element',
    li3: 'Use className instead of class',
  }
  let attributes = ["greet", "rulesOfJSX"]
  return (
    <section className="greet">
      <h1>{texts.welcomeH1}</h1> {/* done for you */}
      <div>
        <h2>Writing Proper JSX</h2>
        <ol id="rulesOfJSX">
          <li>Close your tags</li>
          <li>Return a single top-level element</li>
          <li>Use className instead of class</li>
        </ol>
      </div>
    </section>
  )
}
