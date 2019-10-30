# 2Click-Iframe-Privacy
Easy way to implement a 2-click solution for every IFrame embedded content (like Youtube videos, Google maps, Google calendar and more) using vanilla JavaScript.
[Demo](https://01-scripts.github.io/2Click-Iframe-Privacy/)

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

Replace `src=` with `data-src=` and add an empty attribute `src=""`, add the class `privacy-video` to the IFrame:

```html
<iframe width="560" height="315" src="" data-src="https://www.youtube-nocookie.com/embed/oHg5SJYRHA0" class="privacy-video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
```

## For Google Maps

Replace `src=` with `data-src=` and add an empty attribute `src=""`, add the class `privacy-map` to the IFrame:

```html
<iframe src="" class="privacy-map" data-src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2684819.3977904147!2d11.4079934!3d48.91741285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1526416354209" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
```

## For Google Calendar

Replace `src=` with `data-src=` and add an empty attribute `src=""`, add the class `privacy-calendar` to the IFrame:

```html
<iframe src="" data-src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=r0i0in591m4os0150vjhohmjj8%40group.calendar.google.com&amp;color=%235229A3&amp;ctz=Europe%2FBerlin" class="privacy-calendar" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
```

# Demo

Have a [look here](https://01-scripts.github.io/2Click-Iframe-Privacy/demo.html).

# More options

More information regarding the possible configuration options is available soon.  
Until then please have a look at the following code:

```html
<script type="text/javascript">
var _2ClickIframePrivacyConfig = {
    noCookies: true,
    CustomTypes: Array(
        {
            type: 'ownvideo', 
            class: 'privacy-ownvideo', 
            description: 'Please enter a text to show before loading the content<br />'
        }
    )
};

document.addEventListener('DOMContentLoaded', _2ClickIframePrivacy.init(_2ClickIframePrivacyConfig));
</script>
```