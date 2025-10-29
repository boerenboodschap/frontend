export default function AboutPage() {
  return (
    <section className="px-3 md:px-20 lg:px-64">
      <h1>
        Welkom bij{" "}
        <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
          boerenboodschap!
        </span>
      </h1>
        <div>
          <h2>Wat is boerenboodschap?</h2>
          <p className="max-w-2xl">
            Boerenboodschap is een systeem waarin je kunt zoeken naar boeren
            die bij jou in de buurt producten direct verkopen. Daardoor kun je
            genieten van verse producten van eigen bodem. Omdat de goederen
            niet meer door een hoop processen heengaan (en de supermarkt) kan
            het ook nog eens goed uitpakken voor je portemonnee en natuurlijk
            ook die van de boer.
          </p>
        </div>
        <h2>Hoe werkt het?</h2>
        <div>
          <h3>Boeren</h3>
          <p className="max-w-2xl">
            Als boer kun je rechts boven in de balk &quot;mijn boerderij&quot;
            aanklikken om een account aan te maken en je boerderij toe te
            voegen, daar kun je vervolgens je assortiment aan toevoegen.
          </p>
        </div>
        <div>
          <h3>Klanten</h3>
          <p className="max-w-2xl">
            Als klant hoef je geen account aan te maken (goed voor je
            privacy). Je kunt via de homepage direct opzoek gaan naar boeren
            in je buurt!
          </p>
        </div>
    </section>
  );
}
