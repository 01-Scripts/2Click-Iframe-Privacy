# 2Click-Iframe-Privacy
Easy way to implement a 2-click solution for every IFrame embedded content (like Youtube videos, Google maps, Google calendar and more) using vanilla JavaScript.

## Setup

First, include the script located in the `dist` folder.

```html
<script src="dist/2ClickIframePrivacy.min.js"></script>
```

Add some CSS into one of your CSS files or include it directly:

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

Now, you need to instantiate it:

```html
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', _2ClickIframePrivacy.init(''));
</script>
```

# Usage

## For Videos

Replace `src=` with `data-src=` and add an empty attribute `src=""`, add the attribute `data-2click-type="video"` to the IFrame:

```html
<iframe width="560" height="315" src="" data-src="https://www.youtube-nocookie.com/embed/oHg5SJYRHA0" data-2click-type="video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
```

## For Google Maps

Replace `src=` with `data-src=` and add an empty attribute `src=""`, add the attribute `data-2click-type="map"` to the IFrame:

```html
<iframe src="" data-2click-type="map" data-src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2684819.3977904147!2d11.4079934!3d48.91741285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1526416354209" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
```

## For Google Calendar

Replace `src=` with `data-src=` and add an empty attribute `src=""`, add the attribute `data-2click-type="calendar"` to the IFrame:

```html
<iframe src="" data-src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=r0i0in591m4os0150vjhohmjj8%40group.calendar.google.com&amp;color=%235229A3&amp;ctz=Europe%2FBerlin" data-2click-type="calendar" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
```

# Demo

Have a [look here](demo.html).

# More options

The following code shows all available options described in detail below:

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

## Options

| Config-Variable         | Description | Default |
|-------------------------|-------------|---------|
| `enableCookies` | Set to `false` will disable the usage of cookies. Loading of embedded content must be accepted at each page load.  | `true` |
| `useSessionCookie` | Change this setting to `false` to use a persistent cookie instead of a session cookie. Session cookies are cleared when the browser is closed.  | `true` |
| `cookieNamespace` | Define a name for the namespace in which cookies should be created. | `_2ClickIPEnable-` |
| `showContentLabel` | Change the naming of the link that is shown to enable and load the embedded content. | `Inhalt anzeigen` |
| `rememberChoiceLabel` | Change the naming of the checkbox that is shown to remember the user-choice (by setting a cookie). | `Auswahl merken` |
| `privacyPolicyLabel` | Change the naming of the link to your privacy statement. | `Datenschutzerklärung` |
| `privacyPolicyUrl` | Define a link to the privacy statement of your web page. Link is only shown if a URL is provided. | `false` |
| `CustomTypes` | See detailed description of options below. |  |

## Define custom types

Besides the three pre-defined content types (`video`, `map`, `calendar`) it's also possible to define your own custom types and also define
JavaScript callback-functions that are triggered each time a user is clicking on the `showContentLabel`-link.  
You may define your own `CustomTypes` as shown in the code-snipped above and can use the following options within:

| Variable         | Description |
|------------------|-------------|
| `type` | Define a unique name for your custom content type. Use this type-name in the follwing attribute of each iframe: `data-2click-type="ownvideo"`. |
| `callback` | Set the name of a valid JavaScript function. This function is called as a callback everytime a user clicks on the `showContentLabel`-link. |
| `description` | Define a description (may contain HTML) that is shown in a `div` within the iframe of this type before loading the embedded content. |

### Callback example

```html
<script type="text/javascript">
function ownvideo_callback() {
    alert("Callback executed");
}
</script>
```