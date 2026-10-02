import { Leaf, ShieldCheck, Snowflake, Sun, Zap } from "lucide-react";

export function EnergyBenefits() {
  return (
      <section className="section eco-section">
        <div className="section-heading">
          <p className="eyebrow"><Leaf size={15} /> Derfor «Eco»</p>
          <h2>Moderne boliger med lavere energibehov</h2>
          <p>
            Energieffektivitet er en viktig del av moderne boligstandard i Spania. Vi vurderer alltid prosjektets
            faktiske spesifikasjon fremfor å anta at alle nybygg har samme nivå.
          </p>
        </div>
        <div className="eco-grid">
          <div><Zap /><strong>Høy energistandard</strong><span>Mange moderne nybygg leveres med energiklasse A eller B.</span></div>
          <div><Snowflake /><strong>Komfort hele året</strong><span>God isolasjon og moderne vinduer kan redusere behovet for både oppvarming og kjøling.</span></div>
          <div><Sun /><strong>Solenergi</strong><span>Mange prosjekter leveres med eller kan klargjøres for solceller, avhengig av spesifikasjonen.</span></div>
          <div><ShieldCheck /><strong>Fremtidig standard</strong><span>Lavere energibehov og moderne tekniske løsninger kan gjøre boligen bedre rustet for fremtidige krav.</span></div>
        </div>
      </section>

  );
}
