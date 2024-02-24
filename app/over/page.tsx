export default function AboutPage() {
  return (
    <div
      id="about-page"
      className="flex h-full w-full flex-col p-3 md:px-20 lg:px-64"
    >
      <section className="flex flex-col gap-4 self-center">
        <h1 className="text-balance text-4xl font-extrabold xl:text-6xl">
          Welkom bij{" "}
          <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
            boerenboodschap!
          </span>
        </h1>
        <div className="flex max-w-2xl flex-col gap-2 self-center">
          <div>
            <h2 className="text-2xl font-semibold">Wat is boerenboodschap?</h2>
            <p className="text-base font-normal">
              Boerenboodschap is een systeem waarin je kunt zoeken naar boeren
              die bij jou in de buurt producten direct verkopen. Daardoor kun je
              genieten van verse producten van eigen bodem. Omdat de goederen
              niet meer door een hoop processen heengaan (en de supermarkt) kan
              het ook nog eens goed uitpakken voor je portemonnee en natuurlijk
              ook die van de boer.
            </p>
          </div>
          <h2 className="text-2xl font-semibold">Hoe werkt het?</h2>
          <div>
            <h3 className="text-xl font-semibold">Voor boeren</h3>
            <p className="text-base font-normal">
              Als boer kun je rechts boven in de balk &quot;mijn boerderij&quot;
              aanklikken om een account aan te maken en je boerderij toe te
              voegen, daar kun je vervolgens je assortiment aan toevoegen.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Voor klanten</h3>
            <p>
              Als klant hoef je geen account aan te maken (goed voor je
              privacy). Je kunt via de homepage direct opzoek gaan naar boeren
              in je buurt!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
