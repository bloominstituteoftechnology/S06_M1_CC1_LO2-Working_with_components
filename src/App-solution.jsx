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
    <>
      <section className={attributes[0]}>
        <h1>{texts.welcomeH1}</h1>
        <div>
          <h2>{texts.properH2}</h2>
          <ol id={attributes[1]}>
            <li>{texts.li1}</li>
            <li>{texts.li2}</li>
            <li>{texts.li3}</li>
          </ol>
        </div>
      </section>
      <section></section>
    </>
  )
}
