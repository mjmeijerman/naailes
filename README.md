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
praktisch-inschrijven.html     Praktisch, FAQ, inschrijven
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
| `[DOMEIN]` | `aandedraad.nl` (na de naamcheck) |
| `[TELEFOON]` | nummer in internationaal formaat zonder `+` of `0`, bv. `31612345678` |
| `hallo@mjmeijerman.github.io` | het echte mailadres van de eigenaar (staat nu als afgeleide waarde op de inschrijfpagina) |
| `[KVK-NUMMER]` | KvK-nummer |
| `[STARTDATUM 1]`, `[STARTDATUM 2]`, `[STARTDATUM 3]` | echte startdata |
| `[PLEKKEN]` | bv. `5 vrij` of `vol` |
| `[SEIZOEN]` | bv. `najaar 2026` |
| `[NAAM]`, `[JAAR]`, `[OPLEIDING / ACHTERGROND]`, `[BEROEP]` | Over mij |
| `[BEL-TEXT]`, `[VERDIEPING / ACHTER]`, `[ADRES-URL-ENCODED]`, `[WAAR]`, `[AFSTAND]`, `[SCHUUR / TUIN]`, `[LIJN]`, `[HALTE]` | praktische tekst op de inschrijfpagina |

Snel zoeken: `grep -rn "\[" *.html | grep -v "^\s*\["` of gewoon `grep -rn "\[STAD\]" .`

## Inschrijven

Er is geen formulier en geen formulier-endpoint. Bezoekers schrijven in via e-mail
(`mailto:hallo@mjmeijerman.github.io`) of WhatsApp (`https://wa.me/[TELEFOON]`).
Beide staan als blok op `praktisch-inschrijven.html#inschrijven` en als knop in de hero
van die pagina.

## Foto's

`assets/img/foto-volgt.svg` is een placeholder. Vervang per `<img>` het `src` door een echte foto (jpg, 1600 px breed is genoeg) en pas de `alt` aan.
Foto's herdraaien in week 3–4 van ronde 1, als er mensen achter de machine zitten.

## Lokaal bekijken

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. Direct `index.html` openen kan ook, dan werkt alleen de mobiele menuknop soms niet.

## Live zetten

- **Netlify / Cloudflare Pages:** map slepen, klaar. Gratis, HTTPS inbegrepen.
- **GitHub Pages:** Settings → Pages → branch `trunk`, map `/`. Gratis.

Kies één, dan hoef je niets te onderhouden.

## Wat de site bewust niet heeft

Geen agenda-plugin, geen boekingssysteem, geen webshop, geen blog, geen login, geen nieuwsbriefpopup.
Startdata staan op de cursuspagina's. Contact is een blok op de inschrijfpagina: e-mail of WhatsApp, geen formulier.

## Nog open (uit het besluitdocument)

1. Locatie — bepaalt adres, parkeren en of 5 deelnemers passen.
2. Prijs definitief — na check van 3 lokale aanbieders (ondergrens €14 per student per uur).
3. Groepsgrootte definitief — 4, 5 of 6, afhankelijk van het aantal machines.
4. Wie onderhoudt de site — deze site is statisch en dus zelf te bewerken in elke editor.
