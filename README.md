# Master Multimedia & Autorschaft

Dies ist das Repository für die Website des Masterstudiengangs Multimedia & Autorschaft.

## To Do

### inhaltlich
- Vielleicht doch noch ein kurzer Text, was ein Advisory Board ist?
- Alumni-Text (Frauke)
- Collagen
  - Jetzt bewerben
  - Lab
  - Über
  - Alumni
  - Startseite
- Lab (Texte + Collage)
- Kooperationspartner:innen einfügen (Frauke) --> https://github.com/soerenengels/mmautor.net/blob/main/_data/cooperations.yml

### technisch
- Mobiles Menü-Icon verändern bei Toggle
- Platzierung der Social-Icons
- Abstände von ÜBerschriften
- Showroom: Punkte beim Karrussel überlappen Text
- Showroom: Animation bei :hover ?
- Darstellung der 404-Seite
- Über: Bildoptimierung (Größe)
- "journalism & theory" --> j verschwindet bisschen
- Smartphone: Collage wird lang gestrecht
- Footer-Links größer auf Smartphone-Ansicht
- Bilder: Kooperationspartner:innen
- Showroom: :hover-Screenshot
- print-Stylesheet

### Notwendig vor Umzug
- 301-Weiterleitungen
- httaccess-Weiterleitungen
- SEO
    - Google Search Console vorhanden?
- Änderung in _config.yml, robots.txt & head-seo.html bzgl. testurl / url
- Tracking --> Matomo.org (kein Banner notwendig: https://matomo.org/faq/new-to-piwik/how-do-i-use-matomo-analytics-without-consent-or-cookie-banner/)
- Testing

### perspektivisch
- CI-Powerpoint
- CI-Dokument
- Englisch: Übersetzungen
- FAQ

# Dokumentation

Die nachfolgende Dokumentation soll folgenden Generationen bei der Pflege und Weiterentwicklung der Website des Studiengangs Multimedia & Autorschaft helfen.

## Allgemein

### Was ist Jekyll?

Die Website ist mit Hilfe von [Jekyll](https://jekyllrb.com/), einem Static-Site-Generator, gebaut. Das lässt sich ungefähr so vorstellen, wie ein _Brotbackautomat_, auch wenn ich noch nie einen benutzt habe. Du gibst verschiedene Zutaten hinein, nimmst Einstellungen vor, drückst Start und am Ende hast du ein fertiges Brot. Entsprechend erstellt _Jekyll_ auf Basis verschiedener Einzelseiten und Dokumente erstellt eine entsprechende Ordnerstruktur mit HTML-, CSS- und JS-Dateien. Fertig ist die Website.

### Was ist Markdown?

### Was ist Git?

- Was ist git? 
- Wie kann ich die Website bearbeiten?
- Wie füge ich Änderungen hinzu?

### Arbeitsverzeichnis erstmalig herunterladen

```bash
git clone https://...
```

### Arbeitsverzeichnis updaten

```bash
git pull
```

### Arbeitsverzeichnis hochladen

```bash
git add .
git pull
git commit -m "Textnachricht, die die Veränderungen beschreibt"
git push
```

## _data

Im Ordner *_data* liegen zum Zeitpunkt der Erstellung der vorliegenden Dokumentation (Frühjahr 2021) folgende Unterseiten:

- cooperations.yml
- languages.yml
- social.yml
- students.yml

Wichtig ist, dass die Struktur (der Einrückungen) in _.yml_-Dateien eingehalten wird.

### cooperations.yml

In der Datei _cooperations.yml_ werden Kooperationspartner:innen festgehalten.

```yaml
-   name: Name des Unternehmens
    image: cooperations/aussagekraftiger-name.jpg # Pfad zur Bilddatei im assets/images/-Ordner
    url: https://www.mmautor.de # Url zur jeweiligen Website
```

### languages.yml

In der Datei _languages.yml_ werden Sprachvarianten der Website festgehalten.

### social.yml

In der Datei _social.yml_ werden Verweise zu Social-Media-Seiten festgehalten.

```yaml
- tiktok:
  name: TikTok
  handle: "@mmautor"
  url: https://website.com
  hidden: true 
```

### students.yml

In der Datei _students.yml_ werden alle Studierenden festgehalten. Ein Jahrgang beginnt einmalig mit der Immatrikulations-Jahreszahl als _key_. Für jede:n Student:in wir ein Objekt mit Hilfe eines Bindestriches angelegt. Eingerückt ist verpflichtend der _key_ **name**.

Optional können weitere Merkmale angegeben werden. Unter dem _key_ **image** wird ein Pfad innerhalb des _assets/images/_-Ordner angegeben. 

Unter dem _key_ **references** können Links zu Portfolios, Projekten oder Social-Media-Accounts angegeben werden. Für jede Seite Bedarf es eines eigenen Objektes mit Hilfe eines Bindestriches. Obligatorisch bei Angaben zu Referenzen sind die _keys_ **handle** und **url**.

```yaml
2019:
- name: Vorname Nachname
  image: students/2021/vorname-nachname.png
  references:
    - website:
      url: https://meretaupperle.com/
      handle: "Website"
```

Jahrgänge sind mit einer Leerzeile zu trennen.

## _includes

Der Ordner *_includes* enthält Bestandteile, auf die Layouts zurückgreifen können. Sie können auf verschiedenen Unterseiten wiederverwendet werden.

- _footer.html_  
beinhaltet den Fußbereich der Website mit Links u.a. zu Datenschutz und Impressum.
- _head-seo.html_  
beinhaltet die Grundlagen für Metadaten zur Suchmaschinenoptimierung
- _head.html_  
beinhaltet den `<head>`-Bereich der html-Dokumente
- _header.html_  
beinhaltet den Kopfbereich der Website mit Logo und Menü
- _navigation.html_  
beinhaltet das Menü und wird von _header.html_ abgerufen

## _layouts

Der Ordner *_layouts* enthält verschiedene Layout-Dateien.

```yaml
layout: home
```

- _base.html_  
Generelles Grundgerüst aller Seiten. Hierauf greifen alle anderen Layouts zurück.
- _deafult.html_  
Sofern kein anderes _layout:_ im FrontMatter angegeben ist, wird auf das _default_-Layout zurückgegriffen.
- _home.html_  
Das Layout der Startseite.
- _project.html_  
Das Layout der Projektseiten.
- _showroom.html_  
Das Layout des Showrooms.
- _studium.html_  
Das Layout der Seite Studium.

## _site

Der Ordner _site entsteht im Rahmen des _build_-Prozesses.

```bash
bundle exec jekyll build
```

## assets/

In diesem Ordner werden Bilder, Stylesheets und Skripte hinterlegt.

### images/

Struktur des images-Ordner. Verweis auf *_config.yml* **imageurl:**

### css/

Die CSS-Datei _style.css_ ist für die Gestaltung der Website zuständig.

### js/

Allgemeine Bemerkungen

#### script.js

Menü

#### showroom.js

showroom.js-Bemerkungen

#### splide.min.js

Für das Karussel wurde [Splide.js](https://splidejs.com/) verwendet.

## Englischsprachige Übersetzung

In dem Ordner _en/_ liegen die Dateien für die englischsprachige Übersetzung der Website.

## _posts/

In diesem Ordner liegen die Dateien für die englischsprachige Übersetzung der Website.

## Workflow

Front Matter: Bereich zu Beginn einer Markdown-Datei

### Neuen Jahrgang integrieren

_data/students.yml

### Neue Hauptseite anlegen

/*

### Neuen Social-Media-Account hinzufügen

_data/social.yml

### Neue:n Projektpartner:in hinzufügen

_data/cooperations.yml

### Ändern welches Projekt im Showroom hervorgehoben wird

_posts/*

Im Teaser-Bereich des Showrooms, werden die Inhalte angezeigt, die im _Front Matter_ mit "highlight: true" gekennzeichnet sind.

### Ein:e Student:in möchte ein Portfolio, ein Projekt oder einen Social-Media-Account zum Alumniverzeichnis hinzufügen

_data/students.yml

### Informationen die, die Bewerbung betreffen ändern

/bewerbung.html


------------
noch offen: _config.yml, robots.txt, sitemap.xml, Gemfile, 404.html, .htaccess, .gitignore

### .htaccess

Was ist die .htaccess-Datei? Die .htaccess-Datei liegt auf dem Webserver und lässt sich wie eine Rufumleitung oder ein Nachsendeantrag verstehen. Änderst du deine Telefonnummer oder deine Adresse möchtest du in der Regel weiterhin erreichbar sein. Dafür erstellst eine Rufumleitung, die den Anruf auf deine alte Nummer an deine neue Nummer weiterleitet.

Auf die Website übertragen, brauchst du eine _Rufumleitung_, wenn Seiten umziehen (also sich ihre URL ändert). Man spricht von einer 301-Weiterleitung, wenn eine Seite dauerhaft umgezogen ist. Sie sorgt dafür, dass Nutzer:innen bei einer Änderung der URL-Struktur nicht ins Leere geleitet werden, sondern weiterhin zu ihrem Ziel finden.

### 404.html

Allerdings lassen sich nicht alle Fehler ausschließen. Daher benötigt es eine Fehlerseite. Man spricht von einer 404-Fehlerseite, da eine nicht gefundene Seite mit dem Fehlercode 404 beschrieben wird.

