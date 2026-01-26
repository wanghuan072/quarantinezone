export const news = [
    {
        id: 1,
        title: "Quarantine Zone Discord Text Q&A #6 - Einblicke der Entwickler",
        description: "Die Entwickler beantworten Community-Fragen zu Spielentwicklung, Features und Zukunftsplänen. Erfahre mehr über gestrichene Features, den Endlosmodus und mehr!",
        tags: ["Q&A", "Entwickler", "Community", "Updates"],
        publishDate: "2025-12-05",
        imageUrl: "/images/news/news01.webp",
        imageAlt: "Quarantine Zone Discord Q&A Session mit den Entwicklern.",
        isHome: false,
        seo: {
            title: "Quarantine Zone Discord Q&A #6 - Entwickler-Einblicke & Spiel-Updates",
            description: "Lies das neueste Discord Q&A mit den Quarantine Zone Entwicklern. Erfahre mehr über Herausforderungen in der Entwicklung, gestrichene Features und den Endlosmodus.",
            keywords: "Quarantine Zone Q&A, Discord Q&A, Spielentwicklung, Entwickler-Einblicke, Endlosmodus, Spielfeatures, Brigada Games"
        },
        addressBar: "discord-qa-6",
        detailsHtml: `
          <p>Die Entwickler von <strong>Quarantine Zone: The Last Check</strong> hielten kürzlich ihre sechste Discord-Text-Q&A-Runde ab und beantworteten Fragen der Community zur Entwicklung, zu Funktionen und Zukunftsplänen des Spiels. Hier sind die Highlights der Sitzung. Umfassende Guides zu den in diesem Q&A erwähnten Spielmechaniken findest du in unserem <a href="/guides" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Guide-Bereich</a>.</p>
      
          <h2><strong>Herausforderungen in der Entwicklung</strong></h2>
      
          <p><strong>F: Was war der beste und was der schlimmste Teil bei der Erstellung des Spiels?</strong></p>
          <p><strong>A:</strong> Die plötzliche Popularität ist eine gute Antwort für beide Seiten. Es ist wirklich cool zu wissen, dass viele Leute unsere Demo mögen, aber wir haben uns selbst so sehr unter Druck gesetzt, dass wir danach definitiv einige Dinge ein paar Mal verkompliziert und zu viel darüber nachgedacht haben.</p>
      
          <p><strong>F: Was war euer erster Gedanke, als ihr euch entschieden habt, QZ zu machen?</strong></p>
          <p><strong>A:</strong> Es war eigentlich eine Idee unseres Programmierers, und der erste Gedanke war: „Das klingt cool“.</p>
      
          <h2><strong>Spielmodi & Schwierigkeit</strong></h2>
      
          <p><strong>F: Wird es verschiedene Schwierigkeitsgrade für den Endlosmodus geben? Zum Beispiel, dass weniger Symptome sichtbar oder messbar sind?</strong></p>
          <p><strong>A:</strong> Nicht zum Release (der Hauptfokus liegt auf der Kampagne). Aber wir wollen uns bei einigen Inhalts-Updates auf den Endlosmodus konzentrieren, und wer weiß, was uns dann einfällt. Erfahre mehr über Inspektionswerkzeuge und Symptomerkennung in unserem <a href="/wiki" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Wiki</a>.</p>
      
          <h2><strong>Gestrichene Features & Zukünftige Inhalte</strong></h2>
      
          <p><strong>F: Gibt es Funktionen, die ihr einbauen wolltet, es aber aus irgendeinem Grund nicht konntet? Gibt es Pläne für ein späteres DLC mit mehr Inhalten?</strong></p>
          <p><strong>A:</strong> Wir haben versucht, eine Art Moralsystem zu implementieren, das verschiedene Ereignisse beinhaltete und die allgemeine Stimmung der Überlebenden im Lager beeinflusste (Überlebende konnten Müll nach einem werfen oder sogar feindselig werden und einen angreifen). Auf dem Papier klang es cool, aber die Prototypen waren zu kompliziert und es erforderte so viel zusätzliche Arbeit, dies zu unterstützen, dass wir uns entschieden haben, es zu streichen.</p>
      
          <h2><strong>Gameplay-Mechaniken</strong></h2>
      
          <p><strong>F: Können wir Handschuhe oder einen Schutzanzug tragen, wenn wir Dinge untersuchen? Wir könnten ja versehentlich Zombieblut berühren, wenn wir Untersuchungen durchführen oder Schmuggelware beschlagnahmen.</strong></p>
          <p><strong>A:</strong> Solch kluges Gerede ist was für Wissenschaftler, aber Kommandanten bevorzugen Waffen als Verteidigungsmaßnahme.</p>
      
          <p><strong>F: Wird es auch Wachhunde geben, wie auf dem Logo-Bild?</strong></p>
          <p><strong>A:</strong> Wir haben tatsächlich darüber nachgedacht, Wachhunde als eine Art „1 Extra-Leben“-Upgrade einzubauen. Der Hund würde die Infizierten töten, die man im Lager übersehen hat, würde aber bei Kontakt mit infiziertem Blut sterben. Wir dachten sogar daran, ein Achievement zu vergeben, wenn man seinen ersten Hund bis zum Ende des Spiels am Leben hält, aber das war sehr spät in der Entwicklung und wir hatten keine Zeit mehr, weiter darüber nachzudenken und es umzusetzen. Vielleicht entwickelt es sich in späteren Inhalts-Updates zu etwas Neuem.</p>
      
          <p><strong>F: Sind die Symptome jeder Person zufällig oder sind sie alle vorprogrammiert?</strong></p>
          <p><strong>A:</strong> Einige Überlebende sind vorkonfiguriert, wie zum Beispiel diejenigen, die einem neue Werkzeuge erklären oder einen Hintergrund für die Story liefern, aber die meisten sind zufällig generiert, basierend auf einer Logik, die sich am Spielfortschritt orientiert. Meistere die Inspektionstechniken mit unseren <a href="/guides" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Inspektions-Guides</a>.</p>
      
          <h2><strong>Waffen & Kampf</strong></h2>
      
          <p><strong>F: Wird es in Zukunft mehr Waffenvielfalt oder vielleicht Nahkampfwaffen geben?</strong></p>
          <p><strong>A:</strong> Wir wollen in Inhalts-Updates nach dem Release zumindest mehr Fernkampfwaffen hinzufügen. Eine lustige Geschichte dazu: Letzte Woche hat einer unserer Entwickler versucht, Ratten mit dem Hammer zu töten, und hat keine einzige erwischt – Nahkampf ist also im Moment definitiv nicht unsere Stärke, lol.</p>
      
          <h2><strong>Entwicklungslektionen</strong></h2>
      
          <p><strong>F: Habt ihr viel von den Playtestern gelernt? Was war das Häufigste, auf das ihr gestoßen seid? Und was war das Größte, das ihr deswegen ändern musstet?</strong></p>
          <p><strong>A:</strong> Die wichtigste Lektion war: „Die Logik hinter den Kulissen spielt keine Rolle, wenn der Spieler keine Ahnung davon hat“. Wir haben viele Mechaniken nach den Playtests überarbeitet (Labor, zwinker zwinker) und tun das auch momentan noch.</p>
      
          <p>Bleibt dran für weitere Q&A-Sessions und Updates zu Quarantine Zone: The Last Check!</p>
          `
    },
    {
        id: 2,
        title: "Quarantine Zone Discord Text Q&A #5 - Entwicklungsfortschritt & Features",
        description: "Die Entwickler diskutieren über den Ursprung des Spiels, den Fortschritt, den Story-Modus, Speicher-Mechaniken und beantworten Community-Fragen.",
        tags: ["Q&A", "Entwickler", "Community", "Game Features"],
        publishDate: "2025-12-05",
        imageUrl: "/images/news/news01.webp",
        imageAlt: "Quarantine Zone Discord Q&A #5 Session mit den Entwicklern.",
        isHome: false,
        seo: {
            title: "Quarantine Zone Discord Q&A #5 - Entwicklungsfortschritt & Features",
            description: "Lies das fünfte Discord Q&A mit den Entwicklern. Erfahre mehr über den Story-Modus, Speichersysteme, Charakteranpassung und Gameplay-Features.",
            keywords: "Quarantine Zone Q&A, Discord Q&A #5, Entwicklungsfortschritt, Story-Modus, Brigada Games"
        },
        addressBar: "discord-qa-5",
        detailsHtml: `
          <p>Die Entwickler von <strong>Quarantine Zone: The Last Check</strong> hielten kürzlich ihre fünfte Discord-Text-Q&A-Runde ab und gaben Einblicke in den Entwicklungsfortschritt, den Story-Modus und verschiedene Gameplay-Funktionen. Bleibt auf unserer <a href="/news" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">News-Seite</a> über alle Spiel-Updates auf dem Laufenden.</p>
      
          <h2><strong>Ursprung des Spiels & Entwicklung</strong></h2>
      
          <p><strong>F: Was war der Grund, warum dieses Spiel überhaupt gemacht wurde?</strong></p>
          <p><strong>A:</strong> Das Spiel begann mit einer einfachen, aber einzigartigen Idee innerhalb unseres Teams – wir wollten uns auf die Inspektion und harte, folgenschwere Entscheidungen konzentrieren, statt auf typische Zombie-Action. Erfahre mehr über die Kernmechaniken auf unserer <a href="/" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Startseite</a>.</p>
      
          <p><strong>F: Bei wie viel Prozent steht ihr momentan im Hinblick auf den Release-Zeitplan?</strong></p>
          <p><strong>A:</strong> Die meisten Release-Mechaniken sind fertig, wir polieren gerade auf und beheben Fehler.</p>
      
          <h2><strong>Story-Modus & Speichersystem</strong></h2>
      
          <p><strong>F: Ihr habt erwähnt, dass es einen Story-Modus geben wird. Wie wird dieser aussehen? Wird es mehrere Speicherplätze geben?</strong></p>
          <p><strong>A:</strong> Es wird separate Speicherdateien geben: eine für die Kampagne und eine für den Endlosmodus. Ja, es wird mehrere Speicherplätze geben, damit man verschiedene Arten von Durchläufen speichern kann. In der Kampagne oder im Endlosmodus kann man jedoch nur den aktuellen Tag wiederholen.</p>
      
          <h2><strong>Ende & Konsequenzen</strong></h2>
      
          <p><strong>F: Wird es verschiedene Enden im Story-Modus geben, abhängig von den Entscheidungen, die man trifft?</strong></p>
          <p><strong>A:</strong> Ja, aber mehr verraten wir nicht :)</p>
      
          <p><strong>F: Ist es möglich zu verlieren, wenn man zu viele fehlerhafte Inspektionen hat?</strong></p>
          <p><strong>A:</strong> Ja – bestimmte Ereignisse können zu einem Game Over führen. Fehlerhafte Inspektionen allein beenden den Run nicht sofort, aber sie fließen in größere Systeme ein. Wenn man globale Ziele verfehlt oder Ressourcen ausgehen, kann man das Spiel verlieren.</p>
      
          <h2><strong>Kampf & Drohnen-Missionen</strong></h2>
      
          <p><strong>F: Gab es Alternativen zu den Drohnen-Missionen?</strong></p>
          <p><strong>A:</strong> Wir wollten nie ein typisches Zombie-Spiel machen. Unser Hauptaugenmerk lag immer auf dem Inspektions-Gameplay. Das Bekämpfen von Horden ist eher eine Nebenaktivität, etwas Extra, in das man zum Spaß eintauchen kann.</p>
      
          <p>Bleibt dran für weitere Updates zu Quarantine Zone: The Last Check!</p>
          `
    },
    {
        id: 3,
        title: "Quarantine Zone Discord Text Q&A #4 - Entwicklungs-Einblicke",
        description: "Die Entwickler beantworten Fragen zu KI-Nutzung, Assets, Zukunftsplänen, Charaktermodellen und verschiedenen Mechaniken.",
        tags: ["Q&A", "Entwickler", "Community", "Game Features"],
        publishDate: "2025-12-05",
        imageUrl: "/images/news/news01.webp",
        imageAlt: "Quarantine Zone Discord Q&A #4 Session mit den Entwicklern.",
        isHome: false,
        seo: {
            title: "Quarantine Zone Discord Q&A #4 - Entwicklungs-Einblicke & Features",
            description: "Lies das vierte Discord Q&A mit den Entwicklern. Erfahre mehr über KI-Nutzung, Assets, Charaktermodelle und technische Herausforderungen.",
            keywords: "Quarantine Zone Q&A, Discord Q&A #4, KI-Nutzung, Assets, Brigada Games"
        },
        addressBar: "discord-qa-4",
        detailsHtml: `
          <p>Die Entwickler von <strong>Quarantine Zone: The Last Check</strong> hielten ihre vierte Q&A-Runde ab. Detaillierte Infos zu den hier besprochenen Funktionen findest du in unserem <a href="/wiki" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Wiki</a>.</p>
      
          <h2><strong>Entwicklungs-Tools & Assets</strong></h2>
      
          <p><strong>F: Wurde KI in irgendeiner Weise für das Spiel genutzt?</strong></p>
          <p><strong>A:</strong> Ja und Nein. Wir haben KI-Stimmen benutzt, um zu prüfen, wie sich eine Szene anfühlt, aber in der Release-Version wird keine KI verwendet.</p>
      
          <p><strong>F: Sind alle Modelle handgefertigt?</strong></p>
          <p><strong>A:</strong> Einige Assets wurden gekauft, aber es gibt auch viele handgefertigte Gegenstände, wie die Werkzeuge, die man in der Hand hält.</p>
      
          <h2><strong>Zukünftige Inhalte & Maps</strong></h2>
      
          <p><strong>F: Habt ihr Pläne für verschiedene Maps, zum Beispiel in der Wüste oder in den Bergen?</strong></p>
          <p><strong>A:</strong> Ein Tapetenwechsel klingt spaßig. Wir wollen aber, dass es mit dem Geschehen am Checkpoint verbunden ist. Für den Winter wollen wir zum Beispiel Winterkleidung und Frostbeulen-Symptome einbauen, damit die Mechanik nicht flach wirkt. Es besteht eine gute Chance, dass so etwas in späteren Updates erscheint.</p>
      
          <h2><strong>Charakter-Vielfalt</strong></h2>
      
          <p><strong>F: Wird man verschiedene Arten von Menschen kontrollieren können? Kinder oder Menschen mit Behinderungen?</strong></p>
          <p><strong>A:</strong> Es wird zu 100 % keine Überprüfung von Kindern geben. Alles andere haben wir derzeit nicht in Betracht gezogen, da es ein schwieriges Thema ist.</p>
      
          <h2><strong>Gefahren für den Spieler</strong></h2>
      
          <p><strong>F: Kann man im Spiel selbst sterben oder infiziert werden?</strong></p>
          <p><strong>A:</strong> Ja, wir haben so etwas eingebaut. Während das Virus mutiert, wird es mehr Wege geben zu sterben! Aber es ist nicht der Hauptfokus des Spiels, also erwartet bitte keine ständigen Lebensbedrohungen an jedem Tag.</p>
      
          <p>Bleibt dran für weitere Updates zu Quarantine Zone: The Last Check!</p>
          `
    },
    {
        id: 4,
        title: "Update zum Release-Datum – Veröffentlichung für 2025 bestätigt",
        description: "Das Entwicklerteam gibt ein Update zum Veröffentlichungsdatum bekannt und bestätigt den Release für 2025, während Feedback aus dem geschlossenen Playtest eingearbeitet wird.",
        tags: ["Release-Datum", "Update", "Ankündigung", "2025"],
        publishDate: "2025-12-05",
        imageUrl: "/images/news/news01.webp",
        imageAlt: "Ankündigung zum Release-Datum von Quarantine Zone.",
        isHome: false,
        seo: {
            title: "Quarantine Zone Release-Datum Update – 2025 bestätigt",
            description: "Update zum Release von Quarantine Zone: The Last Check. Das Spiel ist für 2025 bestätigt, während das Team am Polishing arbeitet.",
            keywords: "Quarantine Zone Release-Datum, 2025 Release, Playtest, Spiel-Update, Brigada Games"
        },
        addressBar: "release-date-update",
        detailsHtml: `
          <p>Hallo zusammen!</p>
      
          <p>Einige von euch haben bemerkt, dass die Informationen auf unserer Steam-Seite zunächst von November auf schlicht „2025“ geändert wurden.</p>
      
          <p>Aktuell führen wir einen geschlossenen Playtest durch. Während dieser läuft, werden wir (das Entwicklerteam) und der Publisher das exakte Release-Datum festlegen. Stand gestern arbeiten wir weiterhin auf eine Veröffentlichung im Jahr 2025 hin. Wir benötigen eventuell etwas zusätzliche Zeit für den Feinschliff, da wir momentan enorme Mengen an Feedback erhalten und verarbeiten. Während ihr auf den Release wartet, schaut euch unsere <a href="/guides" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">Survival-Guides</a> an, um euch vorzubereiten.</p>
      
          <p>Die Entscheidung über das genaue Datum und den Preis wird bald fallen, und wir werden euch sofort informieren, sobald sie feststeht.</p>
      
          <p>Wir entschuldigen uns für die Ungewissheit, aber seid versichert: Wir arbeiten mit Hochdruck am Spiel, werten euer Feedback aus und suchen nach dem besten Termin, um euch alle in die Quarantäne-Zone zu lassen!</p>
          `
    },
    {
        id: 5,
        title: "Quarantine Zone Discord Text Q&A #3 – Fortschritt & Spielfeatures",
        description: "Die Entwickler beantworten Fragen zu Release-Zeitplan, NPC-Dialogen, Symptomen, dem Endlosmodus und weiteren Features.",
        tags: ["Q&A", "Entwickler", "Community", "Game Features"],
        publishDate: "2025-12-05",
        imageUrl: "/images/news/news01.webp",
        imageAlt: "Quarantine Zone Discord Q&A #3 Session mit den Entwicklern.",
        isHome: false,
        seo: {
            title: "Quarantine Zone Discord Q&A #3 – Fortschritt & Features",
            description: "Lies das dritte Discord Q&A. Erfahre mehr über NPC-Dialoge, Symptome, Endlosmodus, Steam Deck Support und Gameplay-Features.",
            keywords: "Quarantine Zone Q&A, Discord Q&A #3, Release-Fortschritt, NPC Dialoge, Symptome, Steam Deck"
        },
        addressBar: "discord-qa-3",
        detailsHtml: `
          <p>Die Entwickler von <strong>Quarantine Zone: The Last Check</strong> hielten kürzlich ihre dritte Discord-Text-Q&A-Runde ab und gaben Updates zum Fortschritt sowie Antworten auf Community-Fragen.</p>
      
          <h2><strong>Release-Zeitplan & Fortschritt</strong></h2>
      
          <p><strong>F: Ist bereits eine Verzögerung zu erwarten oder ist das Spiel noch im Zeitplan?</strong></p>
          <p><strong>A:</strong> Kein Kommentar dazu. Wie wir bereits mehrfach gesagt haben: Sobald es Informationen zum Starttermin und zum Preis gibt, werden wir dies überall ankündigen.</p>
      
          <p><strong>F: Wie weit seid ihr mit dem Release? Eine grobe Prozentangabe wäre schön.</strong></p>
          <p><strong>A:</strong> Momentan poliert das Team den Build auf. Wir mussten ein paar Dinge, die wir gerne zum Launch dabei gehabt hätten (wie Mod-Support), auf ein Post-Launch-Update verschieben, aber wir sind sehr zufrieden mit dem aktuellen Stand.</p>
      
          <h2><strong>Plattform-Support</strong></h2>
      
          <p><strong>F: Wird das Spiel auf dem Steam Deck spielbar sein?</strong></p>
          <p><strong>A:</strong> Ja! Wir planen, den Steam Deck Support direkt zum Release anzubieten.</p>
      
          <h2><strong>Spielmechaniken & Story</strong></h2>
      
          <p><strong>F: Wird es eine Möglichkeit geben, Infizierte zu heilen, wenn man genug Forschung betrieben hat?</strong></p>
          <p><strong>A:</strong> Nein. Es ist ein Spiel über das Überleben und den Versuch, so viele wie möglich zu retten, nicht über eine theoretische Heilung.</p>
      
          <h2><strong>NPC-Dialoge & Interaktionen</strong></h2>
      
          <p><strong>F: Werdet ihr mehr Dialoge für die NPCs hinzufügen? Klatsch unter den Wachen oder Kommentare der Zivilisten?</strong></p>
          <p><strong>A:</strong> Oh ja. Für die Überlebenden wurde bereits einiges hinzugefügt, für Wissenschaftler und Soldaten ist es noch in Arbeit (WIP).</p>
      
          <h2><strong>Symptome & Indikatoren</strong></h2>
      
          <p><strong>F: Wird es mehr Symptome geben?</strong></p>
          <p><strong>A:</strong> Wir planen aktuell mit fast 50 verschiedenen Symptomen für alle alten und neuen Werkzeuge im fertigen Spiel.</p>
      
          <h2><strong>Basis-Management</strong></h2>
      
          <p><strong>F: Werden wir die Aktionen der Wachen kontrollieren oder Aufgaben für Überlebende festlegen können (z.B. Ärzte zuweisen)?</strong></p>
          <p><strong>A:</strong> Nicht zum Release. Wir werden unsere Pläne für die Zukunft des Spiels kurz nach dem Launch bekannt geben.</p>
      
          <p>Bleibt dran für weitere Q&A-Sessions!</p>
          `
    },
    {
        id: 6,
        title: "Quarantine Zone Discord Text Q&A #2 – Features & Story-Modus",
        description: "Die Entwickler antworten auf Fragen zu Infizierten-Animationen, Barrierefreiheit, Ethik-Optionen und dem Story-Modus.",
        tags: ["Q&A", "Entwickler", "Community", "Game Features"],
        publishDate: "2025-12-05",
        imageUrl: "/images/news/news01.webp",
        imageAlt: "Quarantine Zone Discord Q&A #2 Session mit den Entwicklern.",
        isHome: false,
        seo: {
            title: "Quarantine Zone Discord Q&A #2 – Features & Story-Modus",
            description: "Erfahre mehr über Infizierten-Animationen, Barrierefreiheit, Ethik-Optionen und Details zum Story-Modus.",
            keywords: "Quarantine Zone Q&A, Discord Q&A #2, Barrierefreiheit, Story-Modus, Ethik-Optionen"
        },
        addressBar: "discord-qa-2",
        detailsHtml: `
          <p>Die Entwickler von <strong>Quarantine Zone: The Last Check</strong> sprachen in ihrer zweiten Q&A-Runde über Animationen, Barrierefreiheit und den Story-Modus.</p>
      
          <h2><strong>Animationen & Grafik</strong></h2>
      
          <p><strong>F: Werden Infizierte in Zukunft plötzlich zu Boden fallen, zucken und dann aufstehen, bevor sie angreifen?</strong></p>
          <p><strong>A:</strong> Das wollten wir unbedingt einbauen, hatten aber aufgrund anderer Prioritäten noch keine Zeit dafür. Es könnte nach dem Release als Teil eines Updates kommen.</p>
      
          <h2><strong>Barrierefreiheit</strong></h2>
      
          <p><strong>F: Welche Barrierefreiheits-Optionen sind geplant?</strong></p>
          <p><strong>A:</strong> Wir planen Unterstützung für Farbenblindheit und Hörbehinderungen, damit jeder das Spiel problemlos genießen kann.</p>
      
          <h2><strong>Ethik & Moralische Entscheidungen</strong></h2>
      
          <p><strong>F: Wird es Ethik-Optionen geben? Zum Beispiel die Wahl, jemanden absichtlich zu infizieren, um die Transformation zu studieren?</strong></p>
          <p><strong>A:</strong> Solche Optionen werden den Spielern im Rahmen der Storyline zur Verfügung stehen.</p>
      
          <h2><strong>Story-Modus vs. Endlosmodus</strong></h2>
      
          <p><strong>F: Wird das Spiel kapitelbasiert sein oder eher ein Roguelike?</strong></p>
          <p><strong>A:</strong> Es gibt einen geplanten Story-Modus mit einer festen Handlung. Der Endlosmodus wird ebenfalls ab Tag 1 verfügbar sein. Man kann das Spiel also konventionell „durchspielen“ oder sich für den „Roguelike“-Ansatz entscheiden.</p>
      
          <p>Bleibt dran für weitere Updates!</p>
          `
    },
    {
        id: 7,
        title: "Quarantine Zone Discord Text Q&A #1 – Mechaniken & Features",
        description: "Die Entwickler beantworten Fragen zu Forschung, Demo-Verfügbarkeit, Einnahmesystem, Symptomen und UI-Verbesserungen.",
        tags: ["Q&A", "Entwickler", "Community", "Game Features"],
        publishDate: "2025-12-05",
        imageUrl: "/images/news/news01.webp",
        imageAlt: "Quarantine Zone Discord Q&A #1 Session mit den Entwicklern.",
        isHome: false,
        seo: {
            title: "Quarantine Zone Discord Q&A #1 – Spielmechaniken & Features",
            description: "Lies das erste Discord Q&A. Infos zu Forschung, Demo-Verfügbarkeit, Einnahmesystem und Screening-Regeln.",
            keywords: "Quarantine Zone Q&A, Discord Q&A #1, Spielmechaniken, Symptome, Screening-Regeln, UI"
        },
        addressBar: "discord-qa-1",
        detailsHtml: `
          <p>Die Entwickler von <strong>Quarantine Zone: The Last Check</strong> starteten ihre erste Discord-Q&A-Runde mit Details zu den Kernmechaniken.</p>
      
          <h2><strong>Demo-Verfügbarkeit</strong></h2>
      
          <p><strong>F: Wird die Demo nach dem Release der Vollversion noch verfügbar sein?</strong></p>
          <p><strong>A:</strong> Bisher gibt es keine Pläne, die Demo zu entfernen. Sollte sich das ändern, kündigen wir es rechtzeitig an.</p>
      
          <h2><strong>Einnahmesystem</strong></h2>
      
          <p><strong>F: Wird man sofort sehen, ob man Geld für einen Gesunden bekommen hat, oder erfährt man das erst später?</strong></p>
          <p><strong>A:</strong> Wie in der Demo erhält der Spieler Geld für die abgeschlossene Überprüfung (Screening), nicht explizit für das Durchlassen eines Gesunden. Ob die Person wirklich gesund war, erfährst du erst am nächsten Tag.</p>
      
          <h2><strong>Symptome & Werkzeuge</strong></h2>
      
          <p><strong>F: Wird es mehr Symptome geben als in der Demo?</strong></p>
          <p><strong>A:</strong> Ja! Es wird deutlich mehr Symptome und auch mehr Werkzeuge geben, um diese aufzuspüren.</p>
      
          <h2><strong>Screening-Regeln</strong></h2>
      
          <p><strong>F: Werden persönliche Daten wie das Alter für die Einreise relevant sein?</strong></p>
          <p><strong>A:</strong> Ja, die Liste der möglichen benutzerdefinierten Regeln für das Screening ist umfangreich und beinhaltet unter anderem auch das Alter.</p>
      
          <h2><strong>UI-Features</strong></h2>
      
          <p><strong>F: Zeigt das Tablet-UI verpasste Symptome an?</strong></p>
          <p><strong>A:</strong> Das UI zeigt nur die Symptome an, die der Spieler während des Screenings selbst entdeckt oder ausgewählt hat. Verpasste Symptome werden dort nicht eingeblendet, genau wie in der Demo.</p>
      
          <p>Bleibt dran für weitere Q&A-Sessions!</p>
          `
    }

]