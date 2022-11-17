import React, {useState} from "react";

function Datenschutz() {

    return (
        <div className="dsgvo">

            <h1>Datenschutzerklärung</h1>
            <h2 id="m14">Einleitung</h2>
            <p>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer
                personenbezogenen Daten (nachfolgend auch kurz als "Daten“ bezeichnet) wir zu welchen Zwecken und in
                welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen
                personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf
                unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer
                Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot“).</p>
            <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
            <p>Stand: 17. November 2022</p><h2>Inhaltsübersicht</h2>
            <ul className="index">
                <li><a className="index-link" href="#m14">Einleitung</a></li>
                <li><a className="index-link" href="#m3">Verantwortlicher</a></li>
                <li><a className="index-link" href="#mOverview">Übersicht der Verarbeitungen</a></li>
                <li><a className="index-link" href="#m13">Maßgebliche Rechtsgrundlagen</a></li>
                <li><a className="index-link" href="#m27">Sicherheitsmaßnahmen</a></li>
                <li><a className="index-link" href="#m25">Übermittlung von personenbezogenen Daten</a></li>
                <li><a className="index-link" href="#m24">Datenverarbeitung in Drittländern</a></li>
                <li><a className="index-link" href="#m12">Löschung von Daten</a></li>
                <li><a className="index-link" href="#m225">Bereitstellung des Onlineangebotes und Webhosting</a></li>
                <li><a className="index-link" href="#m104">Blogs und Publikationsmedien</a></li>
                <li><a className="index-link" href="#m182">Kontakt- und Anfragenverwaltung</a></li>
                <li><a className="index-link" href="#m263">Webanalyse, Monitoring und Optimierung</a></li>
                <li><a className="index-link" href="#m328">Plugins und eingebettete Funktionen sowie Inhalte</a></li>
                <li><a className="index-link" href="#m15">Änderung und Aktualisierung der Datenschutzerklärung</a></li>
                <li><a className="index-link" href="#m10">Rechte der betroffenen Personen</a></li>
                <li><a className="index-link" href="#m42">Begriffsdefinitionen</a></li>
            </ul>
            <h2 id="m3">Verantwortlicher</h2><p>Karl-Augustin Jahnel<br />Lipsiusstr. 34<br />04317 Leipzig<br />Deutschland<br />
        </p>
            E-Mail-Adresse: <p><a href="mailto:karl-jahnel@web.de">karl-jahnel@web.de</a></p>
            Telefon: <p>015757594614</p>
            Impressum: <p><a href="https://unikarlender.de/impressum"
                             target="_blank">https://unikarlender.de/impressum</a></p>
            <h2 id="mOverview">Übersicht der Verarbeitungen</h2><p>Die nachfolgende Übersicht fasst die Arten der
            verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen
            Personen.</p><h3>Arten der verarbeiteten Daten</h3>
            <ul>
                <li>Bestandsdaten.</li>
                <li>Kontaktdaten.</li>
                <li>Inhaltsdaten.</li>
                <li>Nutzungsdaten.</li>
                <li>Meta-/Kommunikationsdaten.</li>
            </ul>
            <h3>Kategorien betroffener Personen</h3>
            <ul>
                <li>Kommunikationspartner.</li>
                <li>Nutzer.</li>
            </ul>
            <h3>Zwecke der Verarbeitung</h3>
            <ul>
                <li>Erbringung vertraglicher Leistungen und Kundenservice.</li>
                <li>Kontaktanfragen und Kommunikation.</li>
                <li>Sicherheitsmaßnahmen.</li>
                <li>Reichweitenmessung.</li>
                <li>Verwaltung und Beantwortung von Anfragen.</li>
                <li>Feedback.</li>
                <li>Profile mit nutzerbezogenen Informationen.</li>
                <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                <li>Informationstechnische Infrastruktur.</li>
            </ul>
            <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3><p>Im Folgenden erhalten Sie eine Übersicht der
            Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur
            Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder
            Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen
            wir Ihnen diese in der Datenschutzerklärung mit.</p>
            <ul>
                <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> -
                    Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person
                    ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen
                    Person erfolgen.
                </li>
                <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> - Die Verarbeitung ist
                    zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern
                    nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz
                    personenbezogener Daten erfordern, überwiegen.
                </li>
            </ul>
            <p>Zusätzlich zu den Datenschutzregelungen der Datenschutz-Grundverordnung gelten nationale Regelungen zum
                Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch
                personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
                insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht,
                zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und
                zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Des
                Weiteren regelt es die Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG),
                insbesondere im Hinblick auf die Begründung, Durchführung oder Beendigung von
                Beschäftigungsverhältnissen sowie die Einwilligung von Beschäftigten. Ferner können
                Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.</p>
            <h2 id="m27">Sicherheitsmaßnahmen</h2><p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
            Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände
            und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes
            der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische
            Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</p>
            <p>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von
                Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie
                betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung.
                Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung
                von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den
                Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie
                Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch
                datenschutzfreundliche Voreinstellungen.</p>
            <p>TLS-Verschlüsselung (https): Um Ihre via unserem Online-Angebot übermittelten Daten zu schützen, nutzen
                wir eine TLS-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen an dem Präfix https:// in
                der Adresszeile Ihres Browsers.</p>
            <h2 id="m25">Übermittlung von personenbezogenen Daten</h2><p>Im Rahmen unserer Verarbeitung von
            personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich
            selbstständige Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber offengelegt werden.
            Zu den Empfängern dieser Daten können z.B. mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von
            Diensten und Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen Fall beachten wir die
            gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz
            Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.</p>
            <h2 id="m24">Datenverarbeitung in Drittländern</h2><p>Sofern wir Daten in einem Drittland (d.h., außerhalb
            der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im
            Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an andere
            Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit den gesetzlichen
            Vorgaben. </p>
            <p>Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder gesetzlich erforderlicher Übermittlung
                verarbeiten oder lassen wir die Daten nur in Drittländern mit einem anerkannten Datenschutzniveau,
                vertraglichen Verpflichtung durch sogenannte Standardschutzklauseln der EU-Kommission, beim Vorliegen
                von Zertifizierungen oder verbindlicher internen Datenschutzvorschriften verarbeiten (Art. 44 bis 49
                DSGVO, Informationsseite der EU-Kommission: <a
                    href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
                    target="_blank">https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de</a>).
            </p>
            <h2 id="m12">Löschung von Daten</h2><p>Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen
            Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder sonstige
            Erlaubnisse entfallen (z.B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den
            Zweck nicht erforderlich sind). Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich
            zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten
            werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder
            steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung, Ausübung oder
            Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen
            Person erforderlich ist. </p>
            <p>Unsere Datenschutzhinweise können ferner weitere Angaben zu der Aufbewahrung und Löschung von Daten
                beinhalten, die für die jeweiligen Verarbeitungen vorrangig gelten.</p>
            <p><strong>Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out): </strong>Nutzer können die von ihnen
                abgegebenen Einwilligungen jederzeit widerrufen und zudem einen Widerspruch gegen die Verarbeitung
                entsprechend den gesetzlichen Vorgaben im Art. 21 DSGVO einlegen. Nutzer können ihren Widerspruch auch
                über die Einstellungen ihres Browsers erklären, z.B. durch Deaktivierung der Verwendung von Cookies
                (wobei dadurch auch die Funktionalität unserer Online-Dienste eingeschränkt sein kann). Ein Widerspruch
                gegen die Verwendung von Cookies zu Online-Marketing-Zwecken kann auch über die Websites <a
                    href="https://optout.aboutads.info" target="_blank">https://optout.aboutads.info</a> und <a
                    href="https://www.youronlinechoices.com/"
                    target="_blank">https://www.youronlinechoices.com/</a> erklärt werden.</p>
            <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
            <ul className="m-elements">
                <li><strong>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung: </strong>Wir setzen ein
                    Verfahren zum Cookie-Einwilligungs-Management ein, in dessen Rahmen die Einwilligungen der Nutzer in
                    den Einsatz von Cookies, bzw. der im Rahmen des Cookie-Einwilligungs-Management-Verfahrens genannten
                    Verarbeitungen und Anbieter eingeholt sowie von den Nutzern verwaltet und widerrufen werden können.
                    Hierbei wird die Einwilligungserklärung gespeichert, um deren Abfrage nicht erneut wiederholen zu
                    müssen und die Einwilligung entsprechend der gesetzlichen Verpflichtung nachweisen zu können. Die
                    Speicherung kann serverseitig und/oder in einem Cookie (sogenanntes Opt-In-Cookie, bzw. mithilfe
                    vergleichbarer Technologien) erfolgen, um die Einwilligung einem Nutzer, bzw. dessen Gerät zuordnen
                    zu können. Vorbehaltlich individueller Angaben zu den Anbietern von Cookie-Management-Diensten,
                    gelten die folgenden Hinweise: Die Dauer der Speicherung der Einwilligung kann bis zu zwei Jahren
                    betragen. Hierbei wird ein pseudonymer Nutzer-Identifikator gebildet und mit dem Zeitpunkt der
                    Einwilligung, Angaben zur Reichweite der Einwilligung (z. B. welche Kategorien von Cookies und/oder
                    Diensteanbieter) sowie dem Browser, System und verwendeten Endgerät gespeichert.
                </li>
            </ul>
            <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2><p>Wir verarbeiten die Daten der Nutzer,
            um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die
            IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den
            Browser oder das Endgerät der Nutzer zu übermitteln.</p>
            <ul className="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
                    Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
                </li>
                <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und
                    Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von
                    Informationssystemen und technischen Geräten (Computer, Server etc.).); Sicherheitsmaßnahmen.
                </li>
                <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
            </ul>
            <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
            <ul className="m-elements">
                <li><strong>Bereitstellung Onlineangebot auf gemietetem Speicherplatz: </strong>Für die Bereitstellung
                    unseres Onlineangebotes nutzen wir Speicherplatz, Rechenkapazität und Software, die wir von einem
                    entsprechenden Serveranbieter (auch "Webhoster" genannt) mieten oder anderweitig
                    beziehen; <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                    DSGVO).
                </li>
                <li><strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Der Zugriff auf unser Onlineangebot wird
                    in Form von so genannten "Server-Logfiles" protokolliert. Zu den Serverlogfiles können die Adresse
                    und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene
                    Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des
                    Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende
                    Provider gehören.

                    Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt werden, z.B., um eine
                    Überlastung der Server zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen,
                    sogenannten DDoS-Attacken) und zum anderen, um die Auslastung der Server und ihre Stabilität
                    sicherzustellen; <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
                    f) DSGVO); <strong>Löschung von Daten:</strong> Logfile-Informationen werden für die Dauer von
                    maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren weitere
                    Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen
                    Vorfalls von der Löschung ausgenommen.
                </li>
            </ul>
            <h2 id="m104">Blogs und Publikationsmedien</h2><p>Wir nutzen Blogs oder vergleichbare Mittel der
            Onlinekommunikation und Publikation (nachfolgend "Publikationsmedium"). Die Daten der Leser werden für die
            Zwecke des Publikationsmediums nur insoweit verarbeitet, als es für dessen Darstellung und die Kommunikation
            zwischen Autoren und Lesern oder aus Gründen der Sicherheit erforderlich ist. Im Übrigen verweisen wir auf
            die Informationen zur Verarbeitung der Besucher unseres Publikationsmediums im Rahmen dieser
            Datenschutzhinweise.</p>
            <ul className="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen, Adressen); Kontaktdaten (z.B.
                    E-Mail, Telefonnummern); Inhaltsdaten (z.B. Eingaben in Onlineformularen); Nutzungsdaten (z.B.
                    besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B.
                    Geräte-Informationen, IP-Adressen).
                </li>
                <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li><strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher Leistungen und Kundenservice;
                    Feedback (z.B. Sammeln von Feedback via Online-Formular); Bereitstellung unseres Onlineangebotes und
                    Nutzerfreundlichkeit; Sicherheitsmaßnahmen; Verwaltung und Beantwortung von Anfragen.
                </li>
                <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
            </ul>
            <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
            <ul className="m-elements">
                <li><strong>Kommentare und Beiträge: </strong>Wenn Nutzer Kommentare oder sonstige Beiträge
                    hinterlassen, können ihre IP-Adressen auf Grundlage unserer berechtigten Interessen gespeichert
                    werden. Das erfolgt zu unserer Sicherheit, falls jemand in Kommentaren und Beiträgen widerrechtliche
                    Inhalte hinterlässt (Beleidigungen, verbotene politische Propaganda etc.). In diesem Fall können wir
                    selbst für den Kommentar oder Beitrag belangt werden und sind daher an der Identität des Verfassers
                    interessiert.

                    Des Weiteren behalten wir uns vor, auf Grundlage unserer berechtigten Interessen die Angaben der
                    Nutzer zwecks Spamerkennung zu verarbeiten.

                    Auf derselben Rechtsgrundlage behalten wir uns vor, im Fall von Umfragen die IP-Adressen der Nutzer
                    für deren Dauer zu speichern und Cookies zu verwenden, um Mehrfachabstimmungen zu vermeiden.

                    Die im Rahmen der Kommentare und Beiträge mitgeteilten Informationen zur Person, etwaige Kontakt-
                    sowie Webseiteninformationen als auch die inhaltlichen Angaben werden von uns bis zum Widerspruch
                    der Nutzer dauerhaft gespeichert; <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
                    Abs. 1 S. 1 lit. f) DSGVO).
                </li>
            </ul>
            <h2 id="m182">Kontakt- und Anfragenverwaltung</h2><p>Bei der Kontaktaufnahme mit uns (z.B. per
            Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und
            Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit dies zur Beantwortung
            der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.</p>
            <ul className="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z.B. E-Mail, Telefonnummern); Inhaltsdaten
                    (z.B. Eingaben in Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
                    Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
                </li>
                <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
                <li><strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation; Verwaltung und
                    Beantwortung von Anfragen; Feedback (z.B. Sammeln von Feedback via Online-Formular); Bereitstellung
                    unseres Onlineangebotes und Nutzerfreundlichkeit.
                </li>
                <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
                </li>
            </ul>
            <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
            <ul className="m-elements">
                <li><strong>Kontaktformular: </strong>Wenn Nutzer über unser Kontaktformular, E-Mail oder andere
                    Kommunikationswege mit uns in Kontakt treten, verarbeiten wir die uns in diesem Zusammenhang
                    mitgeteilten Daten zur Bearbeitung des mitgeteilten
                    Anliegens; <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6
                    Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                </li>
            </ul>
            <h2 id="m263">Webanalyse, Monitoring und Optimierung</h2><p>Die Webanalyse (auch als "Reichweitenmessung"
            bezeichnet) dient der Auswertung der Besucherströme unseres Onlineangebotes und kann Verhalten, Interessen
            oder demographische Informationen zu den Besuchern, wie z.B. das Alter oder das Geschlecht, als pseudonyme
            Werte umfassen. Mit Hilfe der Reichweitenanalyse können wir z.B. erkennen, zu welcher Zeit unser
            Onlineangebot oder dessen Funktionen oder Inhalte am häufigsten genutzt werden oder zur Wiederverwendung
            einladen. Ebenso können wir nachvollziehen, welche Bereiche der Optimierung bedürfen. </p>
            <p>Neben der Webanalyse können wir auch Testverfahren einsetzen, um z.B. unterschiedliche Versionen unseres
                Onlineangebotes oder seiner Bestandteile zu testen und optimieren.</p>
            <p>Sofern nachfolgend nicht anders angegeben, können zu diesen Zwecken Profile, d.h. zu einem
                Nutzungsvorgang zusammengefasste Daten angelegt und Informationen in einem Browser, bzw. in einem
                Endgerät gespeichert und aus diesem ausgelesen werden. Zu den erhobenen Angaben gehören insbesondere
                besuchte Webseiten und dort genutzte Elemente sowie technische Angaben, wie der verwendete Browser, das
                verwendete Computersystem sowie Angaben zu Nutzungszeiten. Sofern Nutzer in die Erhebung ihrer
                Standortdaten uns gegenüber oder gegenüber den Anbietern der von uns eingesetzten Dienste einverstanden
                erklärt haben, können auch Standortdaten verarbeitet werden.</p>
            <p>Es werden ebenfalls die IP-Adressen der Nutzer gespeichert. Jedoch nutzen wir ein IP-Masking-Verfahren
                (d.h., Pseudonymisierung durch Kürzung der IP-Adresse) zum Schutz der Nutzer. Generell werden die im
                Rahmen von Webanalyse, A/B-Testings und Optimierung keine Klardaten der Nutzer (wie z.B. E-Mail-Adressen
                oder Namen) gespeichert, sondern Pseudonyme. D.h., wir als auch die Anbieter der eingesetzten Software
                kennen nicht die tatsächliche Identität der Nutzer, sondern nur den für Zwecke der jeweiligen Verfahren
                in deren Profilen gespeicherten Angaben.</p>
            <ul className="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
                    Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
                </li>
                <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li><strong>Zwecke der Verarbeitung:</strong> Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung
                    wiederkehrender Besucher); Profile mit nutzerbezogenen Informationen (Erstellen von Nutzerprofilen).
                </li>
                <li><strong>Sicherheitsmaßnahmen:</strong> IP-Masking (Pseudonymisierung der IP-Adresse).</li>
            </ul>
            <h2 id="m328">Plugins und eingebettete Funktionen sowie Inhalte</h2><p>Wir binden in unser Onlineangebot
            Funktions- und Inhaltselemente ein, die von den Servern ihrer jeweiligen Anbieter (nachfolgend bezeichnet
            als "Drittanbieter”) bezogen werden. Dabei kann es sich zum Beispiel um Grafiken, Videos oder Stadtpläne
            handeln (nachfolgend einheitlich bezeichnet als "Inhalte”).</p>
            <p>Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte die IP-Adresse der Nutzer
                verarbeiten, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die
                IP-Adresse ist damit für die Darstellung dieser Inhalte oder Funktionen erforderlich. Wir bemühen uns,
                nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der
                Inhalte verwenden. Drittanbieter können ferner sogenannte Pixel-Tags (unsichtbare Grafiken, auch als
                "Web Beacons" bezeichnet) für statistische oder Marketingzwecke verwenden. Durch die "Pixel-Tags" können
                Informationen, wie der Besucherverkehr auf den Seiten dieser Webseite, ausgewertet werden. Die
                pseudonymen Informationen können ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und unter
                anderem technische Informationen zum Browser und zum Betriebssystem, zu verweisenden Webseiten, zur
                Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes enthalten als auch mit solchen
                Informationen aus anderen Quellen verbunden werden.</p>
            <ul className="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
                    Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
                </li>
                <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und
                    Nutzerfreundlichkeit.
                </li>
            </ul>
            <h2 id="m15">Änderung und Aktualisierung der Datenschutzerklärung</h2><p>Wir bitten Sie, sich regelmäßig
            über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald
            die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie,
            sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige
            individuelle Benachrichtigung erforderlich wird.</p>
            <p>Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und
                Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können und
                bitten die Angaben vor Kontaktaufnahme zu prüfen.</p>
            <h2 id="m10">Rechte der betroffenen Personen</h2><p>Ihnen stehen als Betroffene nach der DSGVO verschiedene
            Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:</p>
            <ul>
                <li><strong>Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
                    ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund
                    von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf
                    diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten
                    verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die
                    Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen;
                    dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.</strong>
                </li>
                <li><strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen
                    jederzeit zu widerrufen.
                </li>
                <li><strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob
                    betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere
                    Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
                </li>
                <li><strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht,
                    die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden
                    unrichtigen Daten zu verlangen.
                </li>
                <li><strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der
                    gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht
                    werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung
                    der Daten zu verlangen.
                </li>
                <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie
                    uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen
                    und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen
                    zu fordern.
                </li>
                <li><strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet eines anderweitigen
                    verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
                    Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres
                    Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die
                    Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
                </li>
            </ul>
            <h2 id="m42">Begriffsdefinitionen</h2><p>In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
            Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe sind dem Gesetz entnommen und vor
            allem im Art. 4 DSGVO definiert. Die gesetzlichen Definitionen sind verbindlich. Die nachfolgenden
            Erläuterungen sollen dagegen vor allem dem Verständnis dienen. Die Begriffe sind alphabetisch sortiert.</p>
            <ul className="glossary">
                <li><strong>Personenbezogene Daten:</strong> "Personenbezogene Daten“ sind alle Informationen, die sich
                    auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden "betroffene Person“)
                    beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt,
                    insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu
                    Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen
                    Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen,
                    psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.
                </li>
                <li><strong>Profile mit nutzerbezogenen Informationen:</strong> Die Verarbeitung von "Profilen mit
                    nutzerbezogenen Informationen", bzw. kurz "Profilen" umfasst jede Art der automatisierten
                    Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten
                    verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen (je
                    nach Art der Profilbildung können dazu unterschiedliche Informationen betreffend die Demographie,
                    Verhalten und Interessen, wie z.B. die Interaktion mit Webseiten und deren Inhalten, etc.) zu
                    analysieren, zu bewerten oder, um sie vorherzusagen (z.B. die Interessen an bestimmten Inhalten oder
                    Produkten, das Klickverhalten auf einer Webseite oder den Aufenthaltsort). Zu Zwecken des Profilings
                    werden häufig Cookies und Web-Beacons eingesetzt.
                </li>
                <li><strong>Reichweitenmessung:</strong> Die Reichweitenmessung (auch als Web Analytics bezeichnet)
                    dient der Auswertung der Besucherströme eines Onlineangebotes und kann das Verhalten oder Interessen
                    der Besucher an bestimmten Informationen, wie z.B. Inhalten von Webseiten, umfassen. Mit Hilfe der
                    Reichweitenanalyse können Webseiteninhaber z.B. erkennen, zu welcher Zeit Besucher ihre Webseite
                    besuchen und für welche Inhalte sie sich interessieren. Dadurch können sie z.B. die Inhalte der
                    Webseite besser an die Bedürfnisse ihrer Besucher anpassen. Zu Zwecken der Reichweitenanalyse werden
                    häufig pseudonyme Cookies und Web-Beacons eingesetzt, um wiederkehrende Besucher zu erkennen und so
                    genauere Analysen zur Nutzung eines Onlineangebotes zu erhalten.
                </li>
                <li><strong>Verantwortlicher:</strong> Als "Verantwortlicher“ wird die natürliche oder juristische
                    Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die
                    Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
                </li>
                <li><strong>Verarbeitung:</strong> "Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter
                    Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen
                    Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das Erheben, das
                    Auswerten, das Speichern, das Übermitteln oder das Löschen.
                </li>
            </ul>
            <p className="seal"><a href="https://datenschutz-generator.de/"
                                   title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
                                   target="_blank" rel="noopener noreferrer nofollow">Erstellt mit kostenlosem
                Datenschutz-Generator.de von Dr. Thomas Schwenke</a></p>
        </div>
            );
            }

            export default Datenschutz;

