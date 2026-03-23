export const guides = [
    {
        id: 9,
        title:
            'Quarantine Zone: The Last Check — Inspektions-Reihenfolge & Routing-Protokoll',
        description:
            'Schluss mit Raten am Schalter: feste Werkzeug-Reihenfolge, wann du passive Hinweise abwarten solltest, und klare Regeln für Freigabe, Quarantäne, Labor, Ablehnung und Liquidation — ohne Wertung zu zerstören.',
        tags: [
            'Inspektionsablauf',
            'Kontrollpunkt',
            'Routing',
            'Quarantine Zone',
            'The Last Check',
            'Werkzeuge',
        ],
        publishDate: '2026-03-23',
        imageUrl: '/images/guide/guide01.webp',
        imageAlt:
            'Inspektor am Quarantine-Zone-Kontrollpunkt mit Werkzeugen an einem Überlebenden',
        seo: {
            title:
                'Quarantine Zone: The Last Check — Inspektions-Reihenfolge & Routing | Guide',
            description:
                'Konkreter Checkpoint-Workflow für Quarantine Zone: The Last Check: Werkzeug-Sequenz, Temperatur- und UV-Regeln, Dokumente und Routing — Quarantäne vs. Labor vs. Wohnbereich vs. Liquidation.',
            keywords:
                'Quarantine Zone Inspektionsreihenfolge, Checkpoint Workflow, Überlebenden-Routing, Quarantäne Labor, Werkzeugablauf, The Last Check Guide',
        },
        addressBar: '/Quarantine-Zone-The-Last-Check-Inspection-Routing-Protocol',
        detailsHtml: `
      <p><strong>Einführung:</strong> Das <a href="/guides/quarantine-zone-the-last-check-rookie-survival-manual" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Rookie Survival Manual</a> erklärt, <em>worauf</em> du achten musst. Dieser Guide legt fest, <em>wann</em> du welchen Schritt machst — damit du keine Doppelarbeit machst, keinen Schmuggel übersiehst und niemanden freigibst, weil du die UV zu hastig abgeschlossen hast. Bei unklaren Reads ergänzt du mit dem <a href="/guides/Quarantine-Zone-The-Last-Check-All-Symptoms-Guide" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Symptom-Guide</a>.</p>

        <h2>Teil 1: Standard-Werkzeug-Reihenfolge (jeder Überlebende)</h2>
        <p>Halte dich an diese Sequenz, solange UI oder Raid-Timer keinen Kurzschluss erzwingen. Ziel: <strong>billige Infos zuerst</strong>, dann <strong>Bestätigungs-Scans</strong>, dann <strong>Routing</strong>.</p>

        <ol>
          <li><strong>Rundumblick + Hände:</strong> Gang, Gesicht, Haut, Schweiß, sichtbare Wunden, nervöses Klammern. Kostet nichts und entscheidet oft, ob du den Körperscan überhaupt brauchst.</li>
          <li><strong>Dokumente:</strong> Name, Fototreffer, Stempel, Gültigkeit. Fälschungen markieren, bevor du Werkzeuge an jemanden verschwendest, den du sowieso abweist.</li>
          <li><strong>Thermometer (Stirn):</strong> Ab <strong>38°C</strong> harte gelbe Flagge — mit UV und Verhalten kombinieren; nicht allein auf „vielleicht okay“ freigeben.</li>
          <li><strong>UV-Licht (Gesicht, Hals, Hände):</strong> Langsam führen. Du suchst Fluoreszenz, seltsame Flüssigkeiten, frühe Venenzeichnung. UV sauber bei Fieber heißt noch nicht „fertig“.</li>
          <li><strong>Metalldetektor / Abtast-Flow:</strong> Piept es, klärst du <strong>Außentaschen → Tasche → interner Scan</strong> vor dem Urteil. Bei Röntgen-Auffälligkeiten: <a href="/guides/Quarantine-Zone-The-Last-Check-Contraband-Guide" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Schmuggel-Guide</a>.</li>
          <li><strong>Körperscanner / Tiefeninspektion:</strong> Erst wenn Außen checks klar sind. Bei Verdacht auf interne Schmuggelware, Implantate oder Organtells, die UV nicht sieht.</li>
          <li><strong>Spezialwerkzeuge (Stethoskop, Reflex, Augen-Check …):</strong> Wenn der Standarddurchlauf unklar bleibt und das Risiko hoch ist (VIP, „nur Kratzer“-Story, stiller Träger).</li>
        </ol>

        <img src="/images/guide/guide01-01.webp" alt="Sichtprüfung und Werkzeug-Reihenfolge am Quarantine-Zone-Kontrollpunkt" class="guide-image">

        <h2>Teil 2: Wann du innehalten solltest</h2>
        <ul>
          <li><strong>Nach einer harten Frage:</strong> Manche Ticks kommen erst Sekunden später in Stimme oder Körpersprache. Siehst du schon eine rote Flagge, warte einen Moment vor dem Stempel.</li>
          <li><strong>„Verletzt, nicht gebissen“:</strong> Wunden mit Lupe prüfen. Sauberer Schnitt vs. verfärbtes Gewebe; bei Zweifel kurz die Temperatur beobachten, bevor du freigibst.</li>
          <li><strong>Metallpieps ohne Tasche:</strong> Nicht wegen Piepens liquidieren — internen Scan-Pfad zu Ende gehen, sonst triffst du falsche Tode und falsche Freigaben.</li>
        </ul>

        <h2>Teil 3: Routing-Spickzettel</h2>
        <p>Nach dem Werkzeugdurchlauf. Widersprechen sich zwei Zeilen, nimm in deinem Run die <strong>sicherere</strong> Zeile (Infektionsschutz vs. Autoritätsverlust hängt vom Kampagnenkontext ab).</p>

        <table border="1" cellpadding="8" cellspacing="0">
          <thead>
            <tr>
              <th>Befund</th>
              <th>Route</th>
              <th>Warum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dokumente ok, alle Tools grün, Verhalten normal</td>
              <td><strong>Freigabe → Wohn-/Sicherbereich</strong></td>
              <td>Maximaler Durchsatz; schont Betten und Rationen an vollen Tagen.</td>
            </tr>
            <tr>
              <td>Fieber oder weiche Symptome, kein harter Infektionsbeweis</td>
              <td><strong>Quarantänezelle</strong></td>
              <td>Zeit gewinnen; besser als Ausbruch innen. Nächste Schicht ggf. nachprüfen.</td>
            </tr>
            <tr>
              <td>Wissenschaft nötig, die du am Schalter nicht bekommst (unklare Pathogen-Lesart)</td>
              <td><strong>Route Labor</strong></td>
              <td>Daten und Upgrades langfristig; tödliche Tests sind echter Trade — siehe <a href="/guides/Quarantine-Zone-The-Last-Check-Laboratory-Upgrades-Guide" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Labor &amp; Upgrades</a>.</td>
            </tr>
            <tr>
              <td>Gefälschte Papiere, schwerer Schmuggel, bewaffnete Bedrohung</td>
              <td><strong>Ablehnung / Sicherheitsprotokoll</strong></td>
              <td>Tor zu; bei Ziehen der Waffe Kampf-Regeln (<a href="/guides/quarantine-zone-the-last-check-combat-base-defense-guide" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Kampf-Guide</a>).</td>
            </tr>
            <tr>
              <td>Klare Zombie-Morphologie, aggressives UV, Parasiten, bestätigter Turn</td>
              <td><strong>Liquidation</strong></td>
              <td>Linie schützen; vor Schuss Zivilisten im Winkel checken.</td>
            </tr>
          </tbody>
        </table>

        <img src="/images/guide/guide01-02.webp" alt="Routing-Entscheidung nach der Inspektion am Kontrollpunkt" class="guide-image">

        <h2>Teil 4: Mischfälle (Schmuggel + Infektionsverdacht)</h2>
        <ol>
          <li><strong>Zuerst Schmuggel klären</strong>, damit klar ist: Schmuggler, Bomber oder beides.</li>
          <li><strong>Dann Infektions-Tools wiederholen</strong> — Stress und Rennen erhöhen Temperatur; Ursachen trennen verhindert falsche Liquidationen.</li>
          <li><strong>Immer noch gespalten:</strong> Quarantäne schlägt Freigabe; Labor schlägt Raten, wenn die Story es erlaubt.</li>
        </ol>

        <h2>Teil 5: End-of-Shift Basis-Check (30 Sekunden)</h2>
        <p>Vor dem Tageswechsel: Generator über Sicherheitsband, Geschütz-Munition nicht null, Mauern repariert wenn Welle kam. Details im <a href="/guides/quarantine-zone-the-last-check-combat-base-defense-guide" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Verteidigungs-Guide</a> und <a href="/wiki" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Wiki</a>.</p>

        <p><strong>Fazit:</strong> Gleiche <strong>geordnete Passage</strong> für jeden Überlebenden, Routing nach dem <strong>schlimmsten plausiblen Risiko</strong>. Schnelligkeit kommt von Routine, nicht vom Überspringen der UV.</p>
      `
    },

    {
        id: 8,
        title: 'Quarantine Zone: The Last Check – Labor & Upgrades Tier-Liste',
        description:
            'Hast du Probleme mit dem Budget oder den Forschungspunkten? Dieser Guide bewertet die besten Checkpoint-Upgrades und Labor-Forschungspfade in Quarantine Zone: The Last Check, um Effizienz und Profit zu maximieren.',
        tags: ['Labor', 'Upgrades', 'Tier-Liste', 'Forschung', 'Quarantäne', 'Zone'],
        publishDate: '2026-01-16',
        imageUrl: '/images/guide/guide08.webp',
        imageAlt:
            'Quarantine Zone: The Last Check Labor-Interface und Upgrade-Menü',
        seo: {
            title: 'Quarantine Zone: The Last Check Labor & Upgrades Tier-Liste',
            description:
                'Optimiere dein Budget und deine Forschung. Dieser Guide zeigt die besten Upgrades und Forschungspfade für Quarantine Zone: The Last Check.',
            keywords: 'Quarantine Zone Beste Upgrades, Labor Guide, Forschung Tier-Liste',
        },
        addressBar: '/Quarantine-Zone-The-Last-Check-Laboratory-Upgrades-Guide',
        detailsHtml: `
                <section>
            
              <h1>Quarantine Zone: The Last Check – Labor & Upgrades Tier-Liste</h1>
            
              <p>
                In <strong>Quarantine Zone: The Last Check</strong> sind Geld und Ressourcen genauso knapp wie die Hoffnung. 
                Eine falsche Investition zu Beginn kann zu einem Blackout der Basis oder dem Überrennen durch eine Horde führen. 
                Solltest du das neue Gewehr kaufen oder deinen Röntgenscanner verbessern?
              </p>
            
              <p>
                Dieser Guide behandelt die <strong>Labormechaniken</strong>, Strategien für die <strong>Organentnahme</strong> und eine vollständige <strong>Tier-Liste</strong> der besten Upgrades, die du für maximale Effizienz priorisieren solltest.
              </p>
            
              <figure>
                <img
                  src="/images/guide/guide08-01.webp"
                  alt="Quarantine Zone Labor Forschungsbaum"
                  style="max-width:50%;"
                >
              </figure>
            
              <h2>Teil 1: Das Labor & Organentnahme</h2>
            
              <p>
                Das Labor (freigeschaltet um Tag 5) ist deine Hauptquelle für <strong>Forschungspunkte (RP)</strong> und eine sekundäre Einkommensquelle. Es ermöglicht dir, Organe von Infizierten zu extrahieren. 
                Weitere Informationen zum Basismanagement findest du in unserem <a href="/guides/quarantine-zone-the-last-check-rookie-survival-manual" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Basis-Management Guide</a>.
              </p>
            
              <h3>Verkaufen vs. Forschen: Die goldene Regel</h3>
              <p>
                Du hast nur begrenzten Lagerplatz in deinem Gefrierschrank. Zu wissen, was man behält, ist entscheidend:
              </p>
              <ul>
                <li>
                    <strong>Gewöhnliche Organe (Lebern, Nieren):</strong> 
                    <strong>VERKAUFEN.</strong> Diese bringen sehr wenig RP, erzielen aber einen guten Preis auf dem Schwarzmarkt. Nutze sie, um deine täglichen Kosten für Treibstoff und Munition zu decken.
                </li>
                <li>
                    <strong>Mutierte Organe (Verpestete Herzen, Sporendrüsen):</strong> 
                    <strong>FORSCHEN.</strong> Verkaufe diese niemals. Sie werden benötigt, um hochrangige Pathologie-Technologien wie den "Auto-Scanner" freizuschalten. Mehr über Symptome erfährst du in unserem <a href="/Quarantine-Zone-The-Last-Check-All-Symptoms-Guide" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">kompletten Symptom-Guide</a>.
                </li>
              </ul>
            
              <h2>Teil 2: Checkpoint-Upgrades Tier-Liste</h2>
            
              <p>
                Nicht alle Werkzeuge sind gleichwertig. Unten findest du die Prioritätenliste für deine Ausgaben.
              </p>
            
              <h3>S-Tier (Must-Have für den Anfang)</h3>
              <p>Diese Upgrades verändern grundlegend, wie schnell du Überlebende abfertigen kannst.</p>
              <ul>
                <li>
                    <strong>UV-Licht (Stufe 2):</strong> 
                    Das Standard-UV-Licht ist zu schwach. Stufe 2 macht "Phase 1"-Sporen sofort sichtbar und erspart dir die vollständige Leibesvisitation bei jeder Person. 
                    Lerne mehr dazu in unserem <a href="/guides/quarantine-zone-the-last-check-rookie-survival-manual" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Rookie Survival Manual</a>.
                </li>
                <li>
                    <strong>Auto-Übersetzer:</strong> 
                    Ausländische Flüchtlinge brauchen ohne dieses Tool doppelt so lange. Es amortisiert sich innerhalb von zwei Tagen, da du mehr Menschen abfertigen kannst.
                </li>
              </ul>
            
              <h3>A-Tier (Bis zur Spielmitte holen)</h3>
              <p>Unerlässlich, um mit dem steigenden Schwierigkeitsgrad Schritt zu halten.</p>
              <ul>
                <li>
                    <strong>Röntgenscanner Geschwindigkeits-Boost:</strong> 
                    In späteren Levels musst du Mägen auf Schmuggelware prüfen. Die Standardgeschwindigkeit führt zu langen Schlangen; dieses Upgrade behebt den Flaschenhals.
                </li>
                <li>
                    <strong>Drohnen-Reparaturset:</strong> 
                    Automatisiert die Reparatur deiner Verteidigungsdrohnen, sodass du dich bei Nachtangriffen auf das Schießen konzentrieren kannst. Strategien hierzu findest du im <a href="/guides/quarantine-zone-the-last-check-combat-base-defense-guide" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Kampf- & Basisverteidigungs-Guide</a>.
                </li>
              </ul>
            
              <h3>C-Tier (Vermeiden / Nur für das Late-Game)</h3>
              <ul>
                <li><strong>Ästhetische Upgrades:</strong> Lackierungen oder Flaggen haben keinen Einfluss auf das Gameplay.</li>
                <li><strong>Notstromaggregat:</strong> Wenn du deinen Treibstoff richtig verwaltest, wirst du dieses Upgrade nie benötigen.</li>
              </ul>
            
              <h2>Teil 3: Prioritäten im Forschungsbaum</h2>
            
              <table border="1" cellpadding="8" cellspacing="0">
                <thead>
                  <tr>
                    <th>Zweig</th>
                    <th>Fähigkeit</th>
                    <th>Warum sie essenziell ist</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Pathologie</strong></td>
                    <td>Schnelldiagnose</td>
                    <td>
                        <strong>Priorität #1.</strong> Markiert Symptome automatisch nach 3 Sekunden Beobachtung. Das ultimative Quality-of-Life-Upgrade.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Militär</strong></td>
                    <td>Geschützturm-Kapazität</td>
                    <td>
                        Wichtiger als Schadens-Upgrades zu Beginn. Nachladen kostet während eines Schwarms wertvolle Zeit.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Logistik</strong></td>
                    <td>Treibstoffeffizienz</td>
                    <td>
                        Senkt die täglichen Betriebskosten der Basis und erhöht deine Gewinnmarge.
                    </td>
                  </tr>
                </tbody>
              </table>
            
              <h2>Zusammenfassung</h2>
              <p>
                Um in <strong>Quarantine Zone</strong> erfolgreich zu sein, priorisiere Geschwindigkeit vor Feuerkraft im Early-Game. Verbessere zuerst <strong>UV-Licht</strong> und <strong>Übersetzer</strong>. Hebe dir Kampf-Upgrades für die Zeit ab Tag 15 auf, wenn die Horden größer werden.
              </p>
            
            </section>
            `
    },

    {
        id: 6,
        title: 'Quarantine Zone: The Last Check – Guide für Schmuggelware: Fix für den Bug unsichtbarer Gegenstände',
        description:
            "Frustriert von unsichtbarer interner Schmuggelware in Quarantine Zone: The Last Check? Dieser Guide erklärt die Spielmechanik und bietet Lösungen für den Bug, bei dem Gegenstände nicht im Röntgenscanner erscheinen.",
        tags: [
            'Quarantine Zone',
            'The Last Check',
            'Schmuggelware Bug',
            'Unsichtbare Gegenstände',
            'Röntgenscanner',
        ],
        publishDate: '2026-01-14',
        imageUrl: '/images/guide/guide06.webp',
        imageAlt:
            'Röntgenscan in Quarantine Zone: The Last Check bei der Suche nach unsichtbarer Schmuggelware.',
        seo: {
            title: 'Quarantine Zone: The Last Check Schmuggelware Guide - Bug Fix',
            description:
                'Erscheint Schmuggelware nicht im Röntgenscanner? Hier erfährst du, wie du den Bug in Quarantine Zone: The Last Check umgehst.',
            keywords: 'Quarantäne, Zone, Schmuggelware, unsichtbar, Bug Fix, Röntgenscanner, Guide',
        },
        addressBar: '/Quarantine-Zone-The-Last-Check-Contraband-Guide',
        detailsHtml: `
                <section>
            
              <h1>Quarantine Zone: The Last Check – Guide zum Bug interner Schmuggelware</h1>
            
              <p>
                Der Umgang mit <strong>Schmuggelware in der Quarantäne-Zone</strong> ist eine Kernmechanik, aber viele Spieler berichten von einem kritischen Fehler: 
                <strong>Interne Schmuggelware erscheint nicht</strong> auf dem Röntgenscanner, obwohl der Metalldetektor lautstark piept.
              </p>
            
              <p>
                Wenn dich "schlechte" Bewertungen frustrieren, weil du den versteckten Gegenstand nicht finden kannst, bist du nicht allein. Dieser Guide erklärt das System und wie man mit dem Bug der unsichtbaren Items umgeht.
              </p>
            
              <figure>
                <img
                  src="/images/guide/guide06-02.webp"
                  alt="Quarantine Zone The Last Check Schmuggelware"
                  style="max-width:50%;"
                >
              </figure>
            
              <h2>Das Problem: „Gegenstände erscheinen nicht“</h2>
            
              <p>
                Berichten aus der Steam-Community zufolge hat ein neuerer Patch das Rendering für interne Items fehlerhaft gemacht:
              </p>
            
              <ul>
                <li>
                  <strong>Das Symptom:</strong> Der Metalldetektor piept, aber der Überlebende hat kein Gepäck.
                </li>
                <li>
                  <strong>Die Erwartung:</strong> Du nutzt das Röntgengerät (Haut, Muskeln, Knochen), um verschluckte Objekte zu finden.
                </li>
                <li>
                  <strong>Der Bug:</strong> Der Bildschirm bleibt leer. Das Spiel bestraft dich trotzdem, wenn du das Item übersiehst.
                </li>
              </ul>
            
              <h2>Gibt es eine Lösung für unsichtbare Schmuggelware?</h2>
            
              <p>
                Aktuell handelt es sich um einen bestätigten Bug. Bis ein Hotfix erscheint, helfen diese Workarounds:
              </p>
            
              <h3>1. Die „Blind-Tagging“-Methode</h3>
              <p>
                Bewege deinen Cursor langsam über den Magen- oder Brustbereich des Überlebenden in der Röntgenansicht. Achte darauf, ob die UI-Aufforderung (meist <strong>„E“ zum Markieren</strong>) kurz aufflackert. Drücke sofort, auch wenn nichts zu sehen ist.
              </p>
            
              <h3>2. Das Problem der frühen Freischaltung</h3>
              <p>
                Manchmal spawnen Überlebende mit interner Schmuggelware, <em>bevor</em> du das Röntgengerät überhaupt besitzt. 
                <strong>Strategie:</strong> In den ersten Tagen (1–5) ist deine einzige sichere Option bei einem Alarm ohne Gepäck: <strong>Einreise verweigern</strong>.
              </p>
            
              <h2>Standard-Guide (Wenn das System funktioniert)</h2>
            
              <h3>Externes Gepäck</h3>
              <ul>
                <li>
                  <strong>Rucksäcke & Koffer:</strong> Ziehe Kleidung immer zur Seite. Schmuggelware ist oft in der untersten Ebene versteckt.
                </li>
                <li>
                  <strong>Waffenscheine:</strong> Eine Waffe zu finden ist nicht automatisch ein Verbrechen. Prüfe immer, ob eine gültige Erlaubnis vorliegt.
                </li>
              </ul>
            
              <h3>Interner Schmuggel</h3>
              <ul>
                <li>
                  <strong>Metalldetektor:</strong> Dein primäres Warnsystem. Piept es ohne Tasche, liegt interner Schmuggel vor.
                </li>
                <li>
                  <strong>Röntgenebenen:</strong> Schalte die Ebenen sorgfältig durch. Die meisten Objekte (Messer, Ampullen) sind im <strong>Torso</strong> oder in den <strong>Beinen</strong> versteckt.
                </li>
              </ul>
            
              <figure>
                <img
                  src="/images/guide/guide06-01.webp"
                  alt="Quarantine Zone Interne Schmuggelware Röntgen"
                  style="max-width:50%;"
                >
              </figure>
            
              <h2>Fazit</h2>
              <p>
                Wenn du gerade mit unsichtbarer Schmuggelware kämpfst, liegt es höchstwahrscheinlich am Patch. Nutze das "Blind-Tagging" oder verweigere im Zweifel die Einreise.
              </p>
            
            </section>
                `,
    },

    {
        id: 7,
        title: 'Quarantine Zone: The Last Check – Guide zu allen Symptomen',
        description:
            'Suchst du nach einer Liste aller Symptome in Quarantine Zone: The Last Check? Dieser Guide erklärt jedes visuelle, vitale und verhaltensbedingte Anzeichen, um infizierte Überlebende zu erkennen und Fehlentscheidungen zu vermeiden.',
        tags: ['alle', 'Quarantäne', 'Zone', 'Last', 'Check'],
        publishDate: '2026-01-14',
        imageUrl: '/images/guide/guide07.webp',
        imageAlt:
            'Professioneller Screenshot des Quarantine Zone: The Last Check Symptom-Guides – Vergleich zwischen Sicher und Infiziert.',
        seo: {
            title: 'Quarantine Zone: The Last Check – Guide zu allen Symptomen',
            description:
                'Detaillierte Liste aller Symptome in Quarantine Zone: The Last Check. Erfahre, wie du Infizierte erkennst und sicher von Gesunden unterscheidest.',
            keywords: 'Quarantine Zone Alle Symptome, Infektion erkennen, Guide',
        },
        addressBar: '/Quarantine-Zone-The-Last-Check-All-Symptoms-Guide',
        detailsHtml: `
                    <section>
                
                  <h1>Quarantine Zone: The Last Check – Guide zu allen Symptomen</h1>
                
                  <p>
                    <strong>Quarantine Zone: The Last Check</strong> verfolgt einen anderen Ansatz als klassische Zombie-Spiele. 
                    Statt Horden mit dem Maschinengewehr niederzumähen, ist es dein Job, als Torwächter zu fungieren. 
                    Du musst jeden Überlebenden inspizieren, der das Lager betreten möchte, und feststellen, ob er das Virus in sich trägt. 
                    Für eine umfassende Datenbank aller Symptome und Erkennungswerkzeuge besuche unser <a href="/wiki/symptoms" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">vollständiges Symptom-Wiki</a>.
                  </p>
                
                  <p>
                    Um zu überleben, musst du die <strong>Symptome in Quarantine Zone: The Last Check</strong> auswendig kennen. 
                    Einige Anzeichen sind tödlich, während andere harmlose Fallen sind, die dich zu Fehlentscheidungen verleiten sollen. 
                    Dieser Guide deckt alles ab, was du wissen musst. 
                    Eine Schnellübersicht nach Bedrohungsstufen findest du in unserem <a href="/wiki/symptoms" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Symptom-Erkennungs-Wiki</a>.
                  </p>
                
                  <figure>
                    <img
                      src="/images/guide/guide07-02.webp"
                      alt="Quarantine Zone The Last Check Symptom-Übersicht"
                      style="max-width:50%;"
                    >
                  </figure>
                
                  <h2>Die 3 Kategorien der Symptome</h2>
                
                  <p>
                    Nicht jedes hässliche Mal bedeutet eine Infektion. 
                    Alle Symptome im Spiel lassen sich in drei Kategorien einteilen: 
                    <strong>Sicher</strong> (Einlass gewähren), 
                    <strong>Verdächtig</strong> (Quarantäne) 
                    und <strong>Infiziert</strong> (Abweisen oder Eliminieren). 
                    Eine detaillierte Aufschlüsselung findest du auf unserer <a href="/wiki/symptoms" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Symptom-Wiki-Seite</a>.
                  </p>
                
                  <h3>1. „Sichere“ Symptome (Nicht abweisen)</h3>
                
                  <p>
                    Viele Spieler verlieren an Ruf, weil sie Überlebende abweisen, die lediglich mitgenommen aussehen. 
                    Die folgenden Merkmale sind <strong>normal und sicher</strong>. 
                    Lerne die richtigen Inspektionstechniken in unserem <a href="/guides/quarantine-zone-the-last-check-rookie-survival-manual" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Überlebenshandbuch für Anfänger</a>.
                  </p>
                
                  <ul>
                    <li>
                      <strong>Gelbe Augen:</strong> 
                      Im Gegensatz zu vielen anderen Zombie-Spielen sind gelbe Augen hier sicher. 
                      Verwechsle sie nicht mit roten Augen.
                    </li>
                    <li>
                      <strong>Sommersprossen:</strong> 
                      Natürliche Hautmerkmale. Völlig harmlos.
                    </li>
                    <li>
                      <strong>Blutergüsse:</strong> 
                      Blaue oder violette Flecken durch harte Lebensbedingungen. 
                      Können ignoriert werden.
                    </li>
                  </ul>
                
                  <h3>2. „Möglicherweise Infiziert“ (Ab in die Quarantäne)</h3>
                
                  <p>
                    Diese Symptome sind unsicher. Der Überlebende könnte genesen oder sich später verwandeln. 
                    <strong>Lasse sie nicht direkt ins Hauptlager.</strong> Schicke sie in den Quarantänebereich. 
                    Weitere Details findest du im <a href="/wiki/symptoms" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Symptom-Wiki</a>.
                  </p>
                
                  <ul>
                    <li><strong>Konjunktivitis:</strong> Rosa oder gereizte Augen.</li>
                    <li><strong>Schnittwunden:</strong> Offene Wunden, die keine Bissspuren sind.</li>
                    <li><strong>Fieber (Mittel):</strong> Temperatur zwischen <strong>37°C und 41°C</strong>.</li>
                    <li><strong>Erhöhter Puls:</strong> Herzfrequenz zwischen <strong>120 und 180 BPM</strong>.</li>
                    <li><strong>Hyperreflexie:</strong> Abnormal starke Reaktion beim Reflextest.</li>
                  </ul>
                
                  <h3>3. „Bestätigt Infiziert“ (Abweisen oder Eliminieren)</h3>
                
                  <p>
                    Diese Anzeichen deuten zu 100 % auf eine Infektion hin. Es gibt keine Heilung. 
                    Sieh dir alle Infektionssymptome in unserer <a href="/wiki/symptoms" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Symptom-Datenbank</a> an.
                  </p>
                
                  <ul>
                    <li><strong>Nekrose:</strong> Schwarzes, totes oder verrottendes Gewebe.</li>
                    <li><strong>Bisswunde:</strong> Der klassische Zombiebiss.</li>
                    <li><strong>Rote Augen:</strong> Das zuverlässigste Anzeichen für eine Infektion.</li>
                    <li><strong>Extremes Fieber:</strong> Temperatur <strong>über 41°C</strong>.</li>
                    <li><strong>Extremer Puls:</strong> Herzfrequenz <strong>über 180 BPM</strong>.</li>
                    <li><strong>Kreuzreflex:</strong> Ein spezifisches abnormales Muster beim Reflextest.</li>
                  </ul>
                
                  <h2>Verhaltenssymptome (Akustische Hinweise)</h2>
                
                  <p>
                    Du musst dich nicht immer nur auf die Optik verlassen. Höre beim Prüfen der Dokumente genau hin. 
                    Die folgenden Verhaltensweisen sind starke Warnsignale. Im Zweifelsfall: <strong>Quarantäne</strong>. 
                    Meistere Verhörtechniken in unserem <a href="/guides/quarantine-zone-the-last-check-rookie-survival-manual" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Survival-Guide</a>.
                  </p>
                
                  <ul>
                    <li><strong>Niesen:</strong> Oft mit verstecktem Fieber verbunden.</li>
                    <li><strong>Schluckauf:</strong> Häufig ein Zeichen für Pulsspitzen.</li>
                    <li><strong>Husten:</strong> Allgemeiner Indikator für Krankheit.</li>
                    <li>
                      <strong>Krankhafter Atem:</strong> 
                      Grüne Dämpfe oder hörbare Atemgeräusche, die auf Krankheit hindeuten.
                    </li>
                  </ul>
                
                  <figure>
                    <img
                      src="/images/guide/guide07-01.webp"
                      alt="Quarantine Zone Alle Symptome Übersicht"
                      style="max-width:50%;"
                    >
                  </figure>
                
                  <h2>Spickzettel Zusammenfassung</h2>
                
                  <table border="1" cellpadding="8" cellspacing="0">
                    <thead>
                      <tr>
                        <th>Symptom</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Gelbe Augen</td><td>Sicher (Einlass)</td></tr>
                      <tr><td>Sommersprossen</td><td>Sicher (Einlass)</td></tr>
                      <tr><td>Blutergüsse</td><td>Sicher (Einlass)</td></tr>
                
                      <tr><td>Konjunktivitis</td><td><strong>Prüfen / Quarantäne</strong></td></tr>
                      <tr><td>Schnittwunden</td><td><strong>Prüfen / Quarantäne</strong></td></tr>
                      <tr><td>Temperatur 37°C – 41°C</td><td><strong>Prüfen / Quarantäne</strong></td></tr>
                      <tr><td>Puls 120 – 180 BPM</td><td><strong>Prüfen / Quarantäne</strong></td></tr>
                      <tr><td>Hyperreflexie</td><td><strong>Prüfen / Quarantäne</strong></td></tr>
                
                      <tr><td>Nekrose</td><td><strong>INFIZIERT</strong></td></tr>
                      <tr><td>Bisswunde</td><td><strong>INFIZIERT</strong></td></tr>
                      <tr><td>Rote Augen</td><td><strong>INFIZIERT</strong></td></tr>
                      <tr><td>Temperatur &gt; 41°C</td><td><strong>INFIZIERT</strong></td></tr>
                      <tr><td>Puls &gt; 180 BPM</td><td><strong>INFIZIERT</strong></td></tr>
                      <tr><td>Kreuzreflex</td><td><strong>INFIZIERT</strong></td></tr>
                    </tbody>
                  </table>
                
                  <p>
                    Das Beherrschen dieser Liste ist der einzige Weg, deine Infektionsrate bei 0 % zu halten. 
                    Viel Erfolg, Inspektor! 
                    Besuche für mehr Details unser <a href="/wiki/symptoms" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Symptom-Wiki</a>.
                  </p>
                
                </section>
                `
    },

    {
        id: 1,
        title: 'Quarantine Zone: The Last Check - Überlebenshandbuch für Anfänger',
        description:
            'Überlebe deine ersten Tage in der Quarantäne-Zone! Werde zum ultimativen Torwächter, indem du Beobachtungsgabe und Werkzeugnutzung meisterst. Lerne, Infizierte zu erkennen und Ressourcen zu verwalten.',
        tags: ['Quarantäne', 'Zonensurvival', 'Inspektionsguide', 'Tipps für Anfänger', 'Infektionserkennung'],
        publishDate: '2025-12-05',
        imageUrl: '/images/guide/guide01.webp',
        imageAlt:
            'Ein Torwächter inspiziert einen Überlebenden in einer Quarantäne-Zone mit Fokus auf Beobachtung und Werkzeuge.',
        seo: {
            title: 'Quarantine Zone: The Last Check - Überlebenshandbuch für Anfänger | Ultimativer Guide',
            description:
                'Meistere die Inspektion in Quarantine Zone! Lerne visuelle Hinweise, effiziente Werkzeugnutzung und Verhörtechniken, um die letzte Verteidigungslinie zu schützen.',
            keywords:
                'Quarantäne, Zone, Survival, Inspektion, Guide, Anfänger, Infiziert, Erkennung, Beobachtung, Werkzeuge, Verhör, Dokumentation',
        },
        addressBar: '/quarantine-zone-the-last-check-rookie-survival-manual',
        detailsHtml: `
                <p><strong>Einführung:</strong> In <em>Quarantine Zone</em> bist du nicht nur ein Bürokrat mit einem Stempel; du bist der Torwächter der letzten Verteidigungslinie. Jedes Versehen hat schwere Konsequenzen. Dieser Guide lehrt dich das Überleben. Umfassende Infos zu Werkzeugen findest du in unserem <a href="/wiki" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">vollständigen Wiki</a>.</p>
              
                  <h2>Teil 1: Der Inspektionsprozess — Beobachte wie ein Habicht</h2>
                  <p>Top-Inspektoren kennen die Regel: <strong>"Erst beobachten, dann testen."</strong></p>
            
                  <img src="/images/guide/guide01-01.webp" alt="Inspektion eines Überlebenden" class="guide-image">
              
                  <h3>1. Visuelle Beobachtung (Kostet keine Ressourcen)</h3>
                  <ul>
                      <li><strong>Gang & Haltung:</strong> Achte auf Hinken, Zuckungen oder das Halten von Bauch/Kopf.</li>
                      <li><strong>Gesichtszüge:</strong> Erweiterte Pupillen, blutunterlaufene Augen oder ein leerer Blick sind starke Anzeichen.</li>
                      <li><strong>Haut:</strong> Suche nach unnatürlicher Blässe, schwarzen Venen oder Ausschlägen.</li>
                      <li><strong>Schweiß:</strong> Übermäßiges Schwitzen deutet meist auf Fieber oder extreme Nervosität hin.</li>
                  </ul>
              
                  <h3>2. Effiziente Werkzeugnutzung</h3>
                  <ul>
                      <li><strong>Thermometer:</strong> Auf die Stirn zielen. Alles über <strong>38°C</strong> ist ein Alarmsignal.</li>
                      <li><strong>UV-Licht (Der MVP):</strong> Scanne Gesicht und Hals. Suche nach leuchtenden Stellen oder verborgenen Venen.</li>
                      <li><strong>Körperscanner:</strong> Prüfe auf interne Fremdkörper (Bomben) oder Organmutationen.</li>
                  </ul>
                  <p>Besuche für Details zu Werkzeugen unsere <a href="/wiki" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Wiki-Sektion</a>.</p>
              
                  <img src="/images/guide/guide01-02.webp" alt="Werkzeugnutzung bei der Inspektion" class="guide-image">
                  <h2>Teil 2: Die Kunst der Entscheidung</h2>
                  <ul>
                      <li><strong>Grün (Genehmigen):</strong> Alle Werte normal, Dokumente korrekt.</li>
                      <li><strong>Gelb (Quarantäne):</strong> Hohe Temperatur, aber keine anderen Symptome? Im Zweifel Quarantäne. Besser als ein Ausbruch im Lager.</li>
                      <li><strong>Rot (Eliminieren):</strong> Offensichtliche Zombifizierung, stark positives UV-Signal oder Parasiten. Vorsicht: Keine Unschuldigen gefährden!</li>
                  </ul>
              
                  <h2>Teil 3: Basis-Management — Logistik rettet Leben</h2>
                  <ol>
                      <li><strong>Treibstoff ist Leben:</strong> Halte den Generator-Treibstoff immer über der Sicherheitslinie. Kein Strom = kein Licht + keine Geschütztürme.</li>
                      <li><strong>Munitionsverwaltung:</strong> Nicht wild umherballern. Nutze Pistolen für Einzelziele, hebe schwere Waffen für Horden auf.</li>
                      <li><strong>Upgrade-Priorität:</strong> Beginne mit Stromkapazität und Werkzeugeffizienz, später die Wandverteidigung.</li>
                  </ol>
              
                  <h2>Teil 4: Umgang mit Notfällen</h2>
                  <ul>
                      <li><strong>Plünderer:</strong> Wenn jemand eine Waffe zieht, schlage Alarm und erwidere sofort das Feuer.</li>
                      <li><strong>Bestechung:</strong> Lehne sie ab. Wer besticht, verbirgt meist eine Infektion oder schwere Schmuggelware.</li>
                      <li><strong>Nachtschicht:</strong> Die Sicht ist schrecklich. Versuche die Schlange vor Sonnenuntergang abzuarbeiten.</li>
                  </ul>
              
                  <p><strong>Fazit:</strong> In Quarantine Zone musst du hart bleiben. Vertrau deinem Instinkt, Inspektor. Viel Glück.</p>`,
    },

    {
        id: 2,
        title: 'Quarantine Zone: The Last Check – Kampf- & Basisverteidigungs-Guide',
        description:
            'Überlebe die Nacht in der Quarantäne-Zone! Dieser Guide erklärt die Kampf- und Verteidigungsmechaniken. Lerne alles über Schusswaffen, automatisierte Abwehr, Gegnertypen und Befestigungsstrategien, um deinen Checkpoint gegen Infizierte und Plünderer zu halten.',
        tags: ['Quarantäne', 'Zone', 'Kampf', 'Basisverteidigung', 'Tower Defense', 'FPS'],
        publishDate: '2025-12-05',
        imageUrl: '/images/guide/guide02.webp',
        imageAlt:
            'Ein stark befestigter Checkpoint in der Quarantäne-Zone, umgeben von Infizierten und verteidigt durch Geschütztürme.',
        seo: {
            title: 'Quarantine Zone: The Last Check – Kampf- & Basisverteidigungs-Guide',
            description:
                'Meistere Kampf und Verteidigung in Quarantine Zone: The Last Check! Waffen, Geschütztürme, Gegnertaktiken und Befestigungen für das Überleben am Checkpoint.',
            keywords:
                'Quarantine Zone, Kampf-Guide, Basisverteidigung, Tower Defense, FPS, Survival, Waffen, Geschütztürme, Plünderer, Infizierte',
        },
        addressBar: '/quarantine-zone-the-last-check-combat-base-defense-guide',
        detailsHtml: `
            <p><strong>Einführung:</strong> Während das Prüfen von Papieren dein Job am Tag ist, ist das Überleben dein Job in der Nacht. Sobald die Sonne untergeht, werden die Infizierten aggressiver, und Plünderer sehen deinen Außenposten als Beutekiste. Dieser Guide konzentriert sich auf die FPS- und Tower-Defense-Mechaniken. Weitere Strategien findest du in unserem <a href="/guides" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Guide-Bereich</a>.</p>
          
              <h2>Teil 1: Das Arsenal — Waffen & Abwehr</h2>
              <p>Dein Stempel wird keine Horde aufhalten. Hardware-Kenntnisse sind der erste Schritt zum Überleben.</p>
          
              <h3>1. Persönliche Schusswaffen</h3>
              <ul>
                  <li><strong>Dienstpistole:</strong> Dein Hauptwerkzeug für die "Liquidation" und kleinere Durchbrüche. Munition ist günstig. Ziele immer auf den Kopf; Körperschüsse bei Infizierten sind Ressourcenverschwendung.</li>
                  <li><strong>Gewehre & Schwere Waffen:</strong> Hebe dir diese für <strong>Plünderer</strong> oder <strong>Mutierte Infizierte</strong> auf. Verschwende keine Hochkaliber-Munition an einzelne Walker.</li>
                  <li><strong>Nachladedisziplin:</strong> Beginne niemals eine Inspektion oder eine Nachtwelle mit einem halbleeren Magazin.</li>
              </ul>
        
              <img src="/images/guide/guide02-01.webp" alt="Waffennutzung im Kampf" class="guide-image">
          
              <h3>2. Automatisierte Verteidigung</h3>
              <ul>
                  <li><strong>Geschütztürme (Sentry Turrets):</strong> Das Rückgrat deiner Verteidigung. Sie zielen perfekt, verbrauchen aber schnell Munition. <strong>Tipp:</strong> Prüfe den Munitionsstand nach jeder einzelnen Welle.</li>
                  <li><strong>Kampfdrohnen:</strong> Nutze sie zur Aufklärung außerhalb des Perimeters oder um Gegner in Deckung zu flankieren. Da sie teuer sind, ziehe sie zurück, bevor sie zu viel Schaden nehmen.</li>
              </ul>
          
              <h2>Teil 2: Bedrohungsmatrix — Kenne deinen Feind</h2>
              <ul>
                  <li><strong>Walker (Standard-Infizierte):</strong> Langsam und berechenbar. Nutze die Pistole oder die Türme. Gefahr: Niedrig.</li>
                  <li><strong>Runner (Frisch Infizierte):</strong> Schnell und unberechenbar. Sie stürmen sofort auf das Tor zu. Priorisiere sie! Gefahr: Mittel.</li>
                  <li><strong>Plünderer (Menschen):</strong> Die größte Gefahr. Sie nutzen Deckung und schießen zurück. <strong>Taktik:</strong> Bleib nicht am Fenster stehen. Nutze die Wände der Kabine als Deckung.</li>
                  <li><strong>Mutanten/Tanks:</strong> Schwer gepanzerte Infizierte, die Mauern in Sekunden zerstören können. Sofortiges konzentriertes Feuer (Türme + Spieler) ist hier Pflicht.</li>
              </ul>
          
              <h2>Teil 3: Befestigungsstrategie</h2>
              <p>Strategische Upgrades sind essenziell. Details findest du im <a href="/wiki" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Basis-Upgrade-Wiki</a>.</p>
              <ol>
                  <li><strong>Licht ist entscheidend:</strong> Du kannst nicht treffen, was du nicht siehst. Verbessere frühzeitig deine <strong>Flutlichter</strong>.</li>
                  <li><strong>Mauern instand halten:</strong> Repariere deine Mauern jeden Morgen. Eine geschwächte Mauer bricht unter einer Horde sofort zusammen.</li>
                  <li><strong>Kill-Zones:</strong> Positioniere Türme so, dass sie überschneidende Feuerfelder am Haupttor bilden.</li>
              </ol>
        
              <img src="/images/guide/guide02-02.webp" alt="Basisverteidigung am Checkpoint" class="guide-image">
          
              <h2>Teil 4: Krisenmanagement</h2>
              <ul>
                  <li><strong>Der Durchbruch:</strong> Wenn das äußere Tor fällt, ziehe dich zum inneren Checkpoint-Tor zurück und halte den Engpass (Chokepoint).</li>
                  <li><strong>Eigenbeschuss (Friendly Fire):</strong> Vorsicht mit Sprengstoffen bei Zivilisten oder Infrastruktur. Den eigenen Generator im Kampf zu beschädigen, ist ein Anfängerfehler.</li>
                  <li><strong>Kriegswirtschaft:</strong> Manchmal ist Munition wichtiger als Essen. Hunger kann man einen Tag überstehen, eine Nacht ohne Kugeln nicht.</li>
              </ul>
          
              <p><strong>Fazit:</strong> Ein guter Inspektor ist akribisch, aber ein Überlebender ist tödlich. Halte deine Waffe sauber und deine Augen offen.</p>`,
    },

    {
        id: 3,
        title: 'Kampagnen-Guide: Spezialevents & Moralische Entscheidungen',
        description:
            "Navigiere durch moralische Dilemmata und unvorhersehbare Ereignisse im Kampagnenmodus! Deine Entscheidungen bestimmen das Schicksal deiner Basis: Rebellion, Hunger oder Überleben.",
        tags: ['Kampagnen-Guide', 'Moralische Entscheidungen', 'Spezialevents', 'Strategie', 'Survival'],
        publishDate: '2025-12-05',
        imageUrl: '/images/guide/guide03.webp',
        imageAlt:
            'Eine spannungsgeladene Szene während einer Belagerung, die moralische Entscheidungen verdeutlicht.',
        seo: {
            title: 'Kampagnen-Guide: Moralische Entscheidungen & Events – Quarantine Zone',
            description:
                'Meistere den Kampagnenmodus! Navigiere durch Dilemmata, verwalte Ressourcen und triff schwierige Entscheidungen für das Überleben deiner Basis.',
            keywords:
                'Kampagne, Guide, Spezialevents, moralische Entscheidungen, Survival-Strategie, Flüchtlinge, Aufständische',
        },
        addressBar: '/campaign-guide-special-events-moral-choices',
        detailsHtml: `
            <p><strong>Einführung:</strong> In der Kampagne sind die Infizierten nicht dein einziges Problem. Du stehst zwischen dem fordernden Oberkommando, verzweifelten Flüchtlingen und opportunistischen Aufständischen. Deine Entscheidungen am Fenster entscheiden darüber, ob deine Basis rebelliert, verhungert oder die finale Welle übersteht. Aktuelle Infos findest du in den <a href="/news" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Spielenachrichten</a>.</p>
          
              <h2>Teil 1: Die "Grauzonen"-Fälle (Wunden unterscheiden)</h2>
              <p>Ein häufiges Dilemma ist <strong>"Verletzt vs. Infiziert"</strong>. Du wirst oft Überlebende mit Blut oder Verbänden sehen.</p>
          
              <h3>1. Die "nur ein Kratzer"-Ausrede</h3>
              <ul>
                  <li><strong>Szenario:</strong> Ein Überlebender behauptet, die Wunde stamme von einem Sturz oder Messerkampf.</li>
                  <li><strong>Protokoll:</strong> Vertraue nicht dem Dialog. Nutze die <strong>Lupe</strong>.</li>
                  <li><strong>Visueller Hinweis:</strong> Ein sauberer Schnitt ist meist sicher. Eine Wunde mit <strong>dunkler Verfärbung</strong> oder Eiter am Rand ist ein Biss. Infizierte Wunden lösen oft innerhalb von 10 Sekunden einen Temperaturschock aus.</li>
              </ul>
        
              <img src="/images/guide/guide03-01.webp" alt="Inspektion einer Wunde" class="guide-image">
          
              <h3>2. Der stille Träger</h3>
              <ul>
                  <li><strong>Szenario:</strong> Sie wirken gesund und flehen um Einlass, um ihre Familie zu sehen.</li>
                  <li><strong>Der Check:</strong> Prüfe die Augen. Achte auf <strong>unregelmäßige Pupillenbewegungen</strong> oder den Status "Benommen" in der Beschreibung.</li>
                  <li><strong>Moralische Wahl:</strong> Wenn du sie erschießt, verlierst du Autorität. Die sicherste Wahl ist die Quarantäne oder eine klare Ablehnung.</li>
              </ul>
          
              <h2>Teil 2: Fraktionen & VIPs</h2>
          
              <h3>1. Die Deserteure (Militär)</h3>
              <ul>
                  <li><strong>Hinweis:</strong> Zerrissene Uniformen und Militärwaffen.</li>
                  <li><strong>Risiko:</strong> Werden oft als "Fahnenflüchtig" gelistet.</li>
                  <li><strong>Entscheidung:</strong> Sie sind starke Kämpfer für die Nacht, aber das <strong>Kommando</strong> könnte deine Mittel kürzen, wenn du Kriminelle beherbergst.</li>
              </ul>
          
              <h3>2. Die Schmuggler</h3>
              <ul>
                  <li><strong>Gelegenheit:</strong> Sie bieten oft <strong>Bestechungsgelder</strong> (Sprit/Munition) an.</li>
                  <li><strong>Strategie:</strong> Im Early-Game ist Sprit knapp. Es kann strategisch notwendig sein, ein Bestechungsgeld anzunehmen, um den Generator am Laufen zu halten, auch wenn der Ruf leidet.</li>
              </ul>
        
              <img src="/images/guide/guide03-02.webp" alt="Begegnung mit Fraktionen" class="guide-image">
          
              <h3>3. Der VIP / Wissenschaftler</h3>
              <ul>
                  <li><strong>Event:</strong> Das Kommando befiehlt, einen bestimmten NPC zu priorisieren.</li>
                  <li><strong>Protokoll:</strong> Sie müssen überleben. Selbst bei Fehlern in den Papieren musst du sie oft durchlassen. Gib ihnen wenn möglich eine Drohnen-Eskorte.</li>
              </ul>
          
              <h2>Teil 3: Ressourcenbasierte Entscheidungen</h2>
              <p>Deine Wahl beeinflusst direkt das Ressourcen-Management. Details im <a href="/wiki" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Ressourcen-Wiki</a>.</p>
          
              <h3>1. Die Beschlagnahmungswirtschaft</h3>
              <ul>
                  <li><strong>Priorität:</strong> Konfisziere vorrangig <strong>Konserven</strong>, <strong>Spritkanister</strong> und <strong>Waffenteile</strong>. Schmuck hilft nicht gegen Hunger.</li>
                  <li><strong>Tipp:</strong> Wenn ein Überlebender "überschüssiges Essen" dabei hat, nimm es an dich. Der Hunger im Camp steigt täglich.</li>
              </ul>
          
              <h3>2. Arbeitskräfte</h3>
              <ul>
                  <li><strong>Balance:</strong> Mehr Menschen = Mehr Schützen auf den Mauern, aber auch mehr hungrige Mäuler.</li>
                  <li><strong>Strategie:</strong> Bei Nahrungsmangel verschärfe die Kriterien. Akzeptiere nur fähige Überlebende, die die Türme bemannen können.</li>
              </ul>
          
              <p><strong>Fazit:</strong> In <em>Quarantine Zone</em> schreibst du die Geschichte deines Camps. Jeder Stempel ist eine Wahl zwischen Ressourcen, Ruf und Sicherheit.</p>`,
    },

    {
        id: 4,
        title: 'Quarantine Zone: The Last Check – "Ask Your Mom"-Guide & Alle Gedicht-Fundorte',
        description:
            'Löse das Rätsel um die kryptische Anweisung "Ask Your Mom". Dieser Guide führt dich zu allen 6 Gedicht-Graffitis, löst das Fußabdruck-Rätsel und behebt häufige Fehler.',
        tags: ['Quarantäne', 'Zone', 'Last', 'Check', 'Ask Your Mom'],
        publishDate: '2026-01-13',
        imageUrl: '/images/guide/guide04.webp',
        imageAlt: 'Quarantine Zone Ask Your Mom Quest',
        seo: {
            title: 'Quarantine Zone: The Last Check – "Ask Your Mom"-Guide & Fundorte',
            description:
                'Hängst du bei der "Ask Your Mom"-Quest fest? Hier ist der Walkthrough für alle 6 Gedichte, die roten Fußabdrücke und das Farbrätsel.',
            keywords: 'Quarantine Zone: The Last Check, Ask Your Mom Guide, Gedichte Fundorte',
        },
        addressBar: '/Quarantine-Zone-The-Last-Check-Ask-Your-Mom-Guide',
        detailsHtml: `
        <p>In <strong>Quarantine Zone: The Last Check</strong> sorgt ein Ziel für allgemeine Verwirrung: die kryptische Anweisung <strong>"Ask Your Mom."</strong></p>
        
        <p>Hier geht es nicht darum, einen Charakter namens "Mom" zu finden, sondern um eine Schnitzeljagd nach versteckten <strong>Gedichten (Graffitis)</strong>. Dieser Guide hilft dir, die Hinweise zu entschlüsseln und das Rätsel der roten Fußabdrücke zu lösen.</p>
        
        <iframe src="https://www.youtube.com/embed/GxFOBOqkO3w" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
        
        <h2><strong>So startest du die "Ask Your Mom"-Quest</strong></h2>
        
        <ol>
        <li><strong>Sequenzielles Erscheinen:</strong> Du kannst nicht alle 6 Graffitis auf einmal finden. Sie erscheinen nacheinander.</li>
        <li><strong>Rote Fußabdrücke:</strong> Nach der Interaktion mit einem Gedicht erscheinen blutige Fußspuren auf dem Boden, die zum nächsten Ort führen.</li>
        <li><strong>Taschenlampe ist Pflicht:</strong> Die Fußspuren sind im Dunkeln oft unsichtbar. <strong>Lass deine Taschenlampe immer AN</strong>.</li>
        </ol>
        
        <h2><strong>Alle 6 Gedicht-Fundorte (Graffiti Walkthrough)</strong></h2>
        
        <h3><strong>1. Außerhalb der Schlafräume</strong></h3>
        <p>Starte an deinem Container (wo dein Bett steht). Geh raus und schau direkt auf die Betonwand rechts neben dem Tor.</p>
        
        <h3><strong>2. Das blaue Dixi-Klo (Lagerbereich)</strong></h3>
        <p>Folge den Spuren zum Lagerbereich. Ganz links steht ein blaues mobiles Klo. Das Gedicht steht an der Wand direkt daneben.</p>
        
        <h3><strong>3. Die weiße Box im Labor</strong></h3>
        <p>Geh zum Laborbereich. Ganz rechts im Raum findest du das Graffiti an der Seite einer großen weißen Box/Maschine.</p>
        
        <h3><strong>4. Hinter dem blauen Container</strong></h3>
        <p>Geh zurück zu deinem Schlafbereich. Hinter deinem silbernen Container steht ein <strong>blauer Lagercontainer</strong>. Das vierte Gedicht ist auf dessen Rückseite.</p>
        
        <h3><strong>5. Der grüne Turm</strong></h3>
        <p>Geh zum Liquidationsbereich. Suche den hohen grünen Turm auf der linken Seite. Das Gedicht befindet sich direkt am Turm.</p>
        
        <h3><strong>6. Wand im Inspektionsbereich</strong></h3>
        <p>Geh dorthin, wo du die täglichen Inspektionen machst. Geh durch das Tor zurück Richtung Bett und schau auf die Betonwand bei der "1-Uhr-Position". Unter dem Wort "Laboratory" findest du das letzte Graffiti.</p>
        
        <h2><strong>Das Farbrätsel (Unbekannte Symptome markieren)</strong></h2>
        
        <ol>
        <li><strong>Das Ziel:</strong> Suche einen männlichen Überlebenden mit <strong>blonden Haaren</strong> und einem <strong>blauen Hemd</strong>.</li>
        <li><strong>Der Hinweis:</strong> Seine Kleidung hat <strong>rote Farbflecken (oder Blut)</strong>.</li>
        <li><strong>Ort:</strong> Er sitzt meist auf einer Bank nahe dem Tor im Survival-Block.</li>
        <li><strong>Aktion:</strong> Sprich ihn an. Er wird etwas über eine "Lektion erteilen" sagen und weggehen.</li>
        </ol>
        
        <p><strong>Bug-Warnung:</strong> Manchmal wird die rote Farbe grafisch nicht angezeigt. Wenn du ihn nicht findest, <strong>sprich mit jedem Überlebenden in diesem Bereich</strong>.</p>
        
        <h2><strong>Fehlerbehebung</strong></h2>
        <h3><strong>Der Röntgen-Bug an Tag 13</strong></h3>
        <p>Wenn der Scanner keine Gegenstände mehr anzeigt: Achte auf das UI. Die <strong>"E"-Anzeige</strong> zum Markieren leuchtet trotzdem auf, wenn du über ein verstecktes Objekt fährst. Vertraue dem UI!</p>
        
        <h2><strong>Fazit</strong></h2>
        <p>Die "Ask Your Mom"-Quest ist eine geführte Spurensuche. Achte auf die Fußabdrücke, nutze dein Licht und folge der Reihenfolge, dann ist die Quest schnell erledigt.</p>
        `,
    }



]