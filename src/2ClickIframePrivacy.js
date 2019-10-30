/*!
 * 2Click-Iframe-Privacy v0.1.1
 * https://github.com/01-Scripts/2Click-Iframe-Privacy
 * 
 * Licensed MIT © 2018-2019 Michael Lorer - https://www.01-scripts.de/
 */

 var _2ClickIframePrivacy = new function() {

    var config = {
        noCookies: false
    };
    this.types = new Array(
        {
            type: 'video', 
            class: 'privacy-video', 
            description: 'Zum Aktivieren des Videos bitte auf den Link klicken. Durch das Aktivieren von eingebetteten Videos werden Daten an den jeweiligen Anbieter übermittelt. Weitere Informationen können unserer Datenschutzerklärung entnommen werden.<br />'
        },
        {
            type: 'map', 
            class: 'privacy-map', 
            description: 'Zum Aktivieren der eingebetteten Karte bitte auf den Link klicken. Durch das Aktivieren werden Daten an den jeweiligen Anbieter übermittelt. Weitere Informationen können unserer Datenschutzerklärung entnommen werden.<br />'
        },
        {
            type: 'calendar', 
            class: 'privacy-calendar', 
            description: 'Zum Aktivieren des eingebetteten Kalenders bitte auf den Link klicken. Durch das Aktivieren werden Daten an den jeweiligen Anbieter übermittelt. Weitere Informationen können unserer Datenschutzerklärung entnommen werden.<br />'
        }
    );

    function setCookie(name, value, days) {
        var d = new Date;
        d.setTime(d.getTime() + 24*60*60*1000*days);
        document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
    }

    function getCookie(name) {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    }

    function wrap(el, wrapper, type, selclass, text) {
        el.parentNode.insertBefore(wrapper, el);
        wrapper.className = 'privacy-msg '+selclass+'-msg';
        wrapper.style.width = el.clientWidth+'px';
        wrapper.style.height = el.clientHeight+'px';
        wrapper.innerHTML = '<p>'+ text +'<a href="#foo" onclick="_2ClickIframePrivacy.EnableContent(\''+ type +'\', \''+ selclass +'\'); return false;">Inhalt anzeigen</a></p>';
        wrapper.appendChild(el);
    }

    this.EnableContent = function (type, selclass){
        if(!config.noCookies){
            setCookie('_2ClickIPEnable-'+type, '1', 1);
        }

        var x = document.querySelectorAll('div.'+selclass+'-msg p');
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].parentNode.removeChild(x[i]);
        }

        x = document.querySelectorAll('div.'+selclass+'-msg');
        for (i = 0; i < x.length; i++) {
            var parent = x[i].parentNode;

            // Move all children out of the element
            while (x[i].firstChild) parent.insertBefore(x[i].firstChild, x[i]);

            // Remove the empty element
            parent.removeChild(x[i]);
        }

        x = document.getElementsByClassName(selclass);
        for (i = 0; i < x.length; i++) {
            x[i].src = x[i].getAttribute("data-src");
        }
    }

    this.init = function (Userconfig) {
        // Read UserConfiguration:
        if (typeof Userconfig.noCookies !== 'undefined') {
            config.noCookies = Userconfig.noCookies;
        }

        if (Array.isArray(Userconfig.CustomTypes)) {
            this.types = Userconfig.CustomTypes;
        }

        for (i = 0; i < this.types.length; i++) {
            var selector = document.getElementsByClassName(this.types[i].class);
            var x;
            if(!getCookie('_2ClickIPEnable-'+this.types[i].type)){
                for (x = 0; x < selector.length; x++) {
                    wrap(selector[x], document.createElement('div'), this.types[i].type, this.types[i].class, this.types[i].description);
                }
            }else{
                for (x = 0; x < selector.length; x++) {
                    selector[x].src = selector[x].getAttribute("data-src");
                }
            }
        }

    };
}