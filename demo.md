---
---

# Demo

Easy way to implement a 2-click solution for every IFrame embedded content (like Youtube videos, Google maps, Google calendar and more) using vanilla JavaScript.

## Video

```html
<iframe width="560" height="315" src="" title="https://www.youtube-nocookie.com/embed/oHg5SJYRHA0" class="privacy-video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
```

<iframe width="560" height="315" src="" title="https://www.youtube-nocookie.com/embed/oHg5SJYRHA0" class="privacy-video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>



## Google Maps

```html
<iframe src="" class="privacy-map" title="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2684819.3977904147!2d11.4079934!3d48.91741285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1526416354209" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
```

<iframe src="" class="privacy-map" title="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2684819.3977904147!2d11.4079934!3d48.91741285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1526416354209" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>



## Google Calendar

```html
<iframe src="" title="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=r0i0in591m4os0150vjhohmjj8%40group.calendar.google.com&amp;color=%235229A3&amp;ctz=Europe%2FBerlin" class="privacy-calendar" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
```

<iframe src="" title="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=r0i0in591m4os0150vjhohmjj8%40group.calendar.google.com&amp;color=%235229A3&amp;ctz=Europe%2FBerlin" class="privacy-calendar" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>



<script type="text/javascript">
var _2ClickIframePrivacyConfig = {
    noCookies: true
};
document.addEventListener('DOMContentLoaded', _2ClickIframePrivacy.init(_2ClickIframePrivacyConfig));
</script>