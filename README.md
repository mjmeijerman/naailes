# Aan de Draad — website

Statische site, 6 pagina's, geen build-stap en geen framework. Open `index.html` en je ziet de site.
Het besluit achter de inhoud staat in `docs/decisions/naailes-website-idee.md`.

## Bestanden

```
index.html                     Home
beginnerscursus.html           Beginnerscursus
gevorderde-cursus.html         Gevorderde cursus
vrije-naailes.html             Vrije naailes
over-mij.html                  Over mij
praktisch-inschrijven.html     Praktisch, FAQ, inschrijfformulier
assets/css/style.css           Alle vormgeving
assets/js/site.js              Alleen de mobiele menuknop
assets/img/                    Foto's (nu placeholders)
robots.txt · sitemap.xml       Voor Google
```

## Eerst invullen (voor de site live gaat)

Vervang deze tokens. Zoek en vervang ze in alle `.html`-bestanden tegelijk.

| Token | Wat er moet staan |
|---|---|
| `[STAD]` | plaatsnaam |
| `[STRAAT + NUMMER]`, `[POSTCODE]` | adres van het lokaal |
| `[TELEFOON]` | nummer in internationaal formaat zonder `+` of `0`, bv. `31612345678` |
| `[KVK-NUMMER]` | KvK-nummer |
| `[STARTDATUM 1]`, `[STARTDATUM 2]`, `[STARTDATUM 3]` | echte startdata |
| `[PLEKKEN]` | bv. `5 vrij` of `vol` |
| `[SEIZOEN]` | bv. `najaar 2026` |
| `[NAAM]`, `[JAAR]`, `[OPLEIDING / ACHTERGROND]`, `[BEROEP]` | Over mij |
| `[BEL-TEXT]`, `[VERDIEPING / ACHTER]`, `[ADRES-URL-ENCODED]`, `[WAAR]`, `[AFSTAND]`, `[SCHUUR / TUIN]`, `[LIJN]`, `[HALTE]` | praktische tekst op de inschrijfpagina |
| `VERVANG-MIJ` | je formulier-endpoint (zie hieronder) |

Snel zoeken: `grep -rn "\[" *.html | grep -v "^\s*\["` of gewoon `grep -rn "\[STAD\]" .`

`[DOMEIN]` is al ingevuld: de site staat op `https://mjmeijerman.github.io/naailes/` en mail gaat naar
`hallo@mjmeijerman.github.io`. Komt er later een eigen domein, vervang dan in alle bestanden
`https://mjmeijerman.github.io/naailes/` door het nieuwe domein (canonical-links, `sitemap.xml`,
`robots.txt`, `mailto:`-links en de footer-regel).

## Formulier aanzetten (10 minuten)

1. Maak een gratis account bij Formspree.
2. Kopieer het endpoint, bijvoorbeeld `https://formspree.io/f/abcdwxyz`.
3. Vervang in `praktisch-inschrijven.html` de waarde van `action="..."`.
4. Test met je eigen mailadres. Je moet de inzending in je inbox krijgen.

Zonder endpoint doet het formulier niets. Dat is de enige stap die echt moet.

## Foto's

`assets/img/foto-volgt.svg` is een placeholder. Vervang per `<img>` het `src` door een echte foto (jpg, 1600 px breed is genoeg) en pas de `alt` aan.
Foto's herdraaien in week 3–4 van ronde 1, als er mensen achter de machine zitten.

## Lokaal bekijken

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. Direct `index.html` openen kan ook, dan werkt alleen de mobiele menuknop soms niet.

## Live zetten

Publiceren gaat automatisch via GitHub Actions. `.github/workflows/deploy.yml` deployt elke push naar
`trunk` naar GitHub Pages; je kunt de workflow ook handmatig starten via Actions → *Deploy naar GitHub Pages* →
*Run workflow*.

Eenmalige instelling in de repo: **Settings → Pages → Source: GitHub Actions**. Zonder die instelling
faalt de deploy-stap.

Let op: GitHub Pages op een **private** repo werkt alleen met GitHub Pro, Team of Enterprise. Zolang de repo
private is op een gratis plan, slaat de workflow aan maar kan de deploy niet publiceren. Maak de repo publiek,
neem een betaald plan, of host dezelfde statische map elders (Cloudflare Pages, Netlify). De site zelf heeft
geen build-stap, dus elke host die een map met statische bestanden serveert voldoet.

`.nojekyll` staat in de root, zodat bestanden en mappen met `_` niet door Jekyll worden weggefilterd.

De workflow publiceert niet de hele repo, maar alleen de site: alle `*.html` uit de root, `assets/`,
`robots.txt`, `sitemap.xml` en `.nojekyll` (stap *Site-bestanden klaarzetten*). `docs/`, `README.md`,
`.github/` en `.gitignore` komen dus niet online. Komt er een nieuwe map met sitebestanden bij, voeg die dan
aan die kopieerstap toe.

Alle interne paden zijn relatief (`assets/css/style.css`, `beginnerscursus.html`). Dat is nodig omdat de site
als Pages *project* site onder het subpad `/naailes/` staat. Gebruik dus nooit `/assets/...`, want dat wijst
naar de root van `mjmeijerman.github.io`.

## Wat de site bewust niet heeft

Geen agenda-plugin, geen boekingssysteem, geen webshop, geen blog, geen login, geen nieuwsbriefpopup.
Startdata staan op de cursuspagina's. Contact is een blok op de inschrijfpagina.

## Nog open (uit het besluitdocument)

1. Locatie — bepaalt adres, parkeren en of 5 deelnemers passen.
2. Prijs definitief — na check van 3 lokale aanbieders (ondergrens €14 per student per uur).
3. Groepsgrootte definitief — 4, 5 of 6, afhankelijk van het aantal machines.
4. Wie onderhoudt de site — deze site is statisch en dus zelf te bewerken in elke editor.
