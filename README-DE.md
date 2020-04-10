# 2Click-Iframe-Privacy
Einfaches JavaScript, um eine 2-Klick-Lösung für beliebige per IFrame eingebettete Inhalte zu aktivieren (z.B. Youtube, Google-Maps, Google Kalender etc.) - Kein Framework nötig!
[Demo](https://01-scripts.github.io/2Click-Iframe-Privacy/)

___

## Setup

JavaScript aus dem `dist` Verzeichnis in die Webseite einfügen.

```html
<script src="dist/2ClickIframePrivacy.min.js"></script>
```

Folgende CSS-Klasse in eine existierende CSS-Datei einfügen oder den Code direkt in die Webseite kopieren:

```html
<style type="text/css">
div.privacy-msg p {
    width:200px;
    border: 1px solid black;
    padding: 5px;
    text-align:center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    -webkit-box-shadow: 0 10px 6px -6px #777;
       -moz-box-shadow: 0 10px 6px -6px #777;
            box-shadow: 0 10px 6px -6px #777;
}
</style>
```

Abschließend muss die Funktion initialisiert werden:

```html
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', _2ClickIframePrivacy.init(''));
</script>
```

# Benutzen

## Für Videos

`src=` mit `data-src=` ersetzen und ein leeres Attribut `src=""` hinzufügen; `data-2click-type="video"` als weiteres Attribut dem IFrame hinzufügen:

```html
<iframe width="560" height="315" src="" data-src="https://www.youtube-nocookie.com/embed/oHg5SJYRHA0" data-2click-type="video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
```

## Für Google Maps

`src=` mit `data-src=` ersetzen und ein leeres Attribut `src=""` hinzufügen; `data-2click-type="map"` als weiteres Attribut dem IFrame hinzufügen:

```html
<iframe src="" data-2click-type="map" data-src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2684819.3977904147!2d11.4079934!3d48.91741285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1526416354209" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
```

## Für Google Kalender

`src=` mit `data-src=` ersetzen und ein leeres Attribut `src=""` hinzufügen; `data-2click-type="calendar"` als weiteres Attribut dem IFrame hinzufügen:

```html
<iframe src="" data-src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=r0i0in591m4os0150vjhohmjj8%40group.calendar.google.com&amp;color=%235229A3&amp;ctz=Europe%2FBerlin" data-2click-type="calendar" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
```

# Demo

[Demo hier ausprobieren](https://01-scripts.github.io/2Click-Iframe-Privacy/demo.html)

# Weitere Optionen

Der nachfolgende Code zeigt alle verfügbaren Optionen zur einfachen Anpassung des Scritps:

```html
<script type="text/javascript">
var _2ClickIframePrivacyConfig = {
    enableCookies: true,
    useSessionCookie: true,
    cookieNamespace: '_2ClickIPEnable-',
    showContentLabel: 'Inhalt anzeigen',
    rememberChoiceLabel: 'Auswahl merken',
    privacyPolicyLabel: 'Datenschutzerklärung',
    privacyPolicyUrl: false,
    CustomTypes: Array(
        {
            type: 'ownvideo',
            callback: 'ownvideo_callback',
            description: 'Please enter a text to show before loading the content<br />'
        }
    )
};

document.addEventListener('DOMContentLoaded', _2ClickIframePrivacy.init(_2ClickIframePrivacyConfig));
</script>
```

## Optionen

| Konfigurationsvariable  | Beschreibung | Standard |
|-------------------------|--------------|----------|
| `enableCookies` | Auf `false` setzen um die Nutzung von Cookies abzuschalten. Das Nachladen von eingebettetem Inhalt muss dann auf jeder Seite erneut bestätigt werden.  | `true` |
| `useSessionCookie` | Einstellung auf `false` um dauerhafte Cookies statt Session-Cookies zu verwernden. Session-Cookies werden beim Schließen des Browsers gelöscht.  | `true` |
| `cookieNamespace` | Definition eines eigenen Namenbereichs zum Anlegen der Cookies | `_2ClickIPEnable-` |
| `showContentLabel` | Bezeichnung des Links der angezeigt wird um den eingebetteten Inhalt nachzuladen. | `Inhalt anzeigen` |
| `rememberChoiceLabel` | Bezeichnung der Checkbox um die Besucher-Auswahl zu merken (es wird dazu ein Cookie gesetzt). | `Auswahl merken` |
| `privacyPolicyLabel` | Bezeichnung des Links der zu einer eigenen Datenschutzerklärung führt. | `Datenschutzerklärung` |
| `privacyPolicyUrl` | Link zu einer eigenen Datenschutzerklärung. Wird nur angezeigt, wenn eine URL angegeben wird. | `false` |
| `CustomTypes` | Details zur Nutzung wie nachfolgend beschrieben. |  |

## Benutzerdefinierte Inhaltstypen definieren

Neben den drei Vordefinierten Inhaltstypen  (`video`, `map`, `calendar`) ist es auch möglich eigene, benutzerdefinierte Inhaltstypen zu definieren
sowie JavaScript Callback-Funktionen zu erstellen, die immer dann ausgelöst werden, wenn ein Besucher den `showContentLabel`-Link anklickt.  
Eigene Inhaltstypen können wie im obigen Code-Beispiel zu sehen definiert werden. Dazu können folgende Optionen genutzt werden:

| Variable         | Beschreibung |
|------------------|--------------|
| `type` | Definiere einen eindeutigen Namen für den neu definierten Inhaltstypen. Dieser Name muss in folgendem Attribut für jedes entsprechende IFrame verwendet werden: `data-2click-type="ownvideo"`. |
| `callback` | Name einer gültigen JavaScript-Function. Diese Funktion wird als Callback immer aufgerufen wenn ein Besucher auf den `showContentLabel`-Link klickt. |
| `description` | Beschreibung (kann HTML enthalten) die in einem `div` innerhalb des IFrame angezeigt wird, bevor der eigentliche Inhalt nachgeladen wird. |

### Callback example

```html
<script type="text/javascript">
function ownvideo_callback() {
    alert("Callback executed");
}
</script>
```