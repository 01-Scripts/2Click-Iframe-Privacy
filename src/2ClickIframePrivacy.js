/*!
 * 2Click-Iframe-Privacy v0.2.0
 * https://github.com/01-Scripts/2Click-Iframe-Privacy
 * 
 * Licensed MIT © 2018-2019 Michael Lorer - https://www.01-scripts.de/
 */

 var _2ClickIframePrivacy = new function() {

    var config = {
        enableCookies: true,
        useSessionCookie: true,
        cookieNamespace: '_2ClickIPEnable-',
        showContentLabel: 'Inhalt anzeigen',
        rememberChoiceLabel: 'Auswahl merken',
        privacyPolicyLabel: 'Datenschutzerklärung',
        privacyPolicyUrl: false
    };
    
    this.types = new Array(
        {
            type: 'video',
            description: 'Zum Aktivieren des Videos bitte auf den Link klicken. Durch das Aktivieren von eingebetteten Videos werden Daten an den jeweiligen Anbieter übermittelt. Weitere Informationen können unserer Datenschutzerklärung entnommen werden.<br />'
        },
        {
            type: 'map',
            description: 'Zum Aktivieren der eingebetteten Karte bitte auf den Link klicken. Durch das Aktivieren werden Daten an den jeweiligen Anbieter übermittelt. Weitere Informationen können unserer Datenschutzerklärung entnommen werden.<br />'
        },
        {
            type: 'calendar',
            description: 'Zum Aktivieren des eingebetteten Kalenders bitte auf den Link klicken. Durch das Aktivieren werden Daten an den jeweiligen Anbieter übermittelt. Weitere Informationen können unserer Datenschutzerklärung entnommen werden.<br />'
        }
    );

    function setCookie(name, value, days) {
        var d = new Date;
        d.setTime(d.getTime() + 24*60*60*1000*days);
        document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
    }

    function setSessionCookie(name, value) {
        document.cookie = name + "=" + value + ";path=/";
    }

    function getCookie(name) {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    }

    function wrap(el, wrapper, type, text) {
        el.parentNode.insertBefore(wrapper, el);
        wrapper.className = 'privacy-msg '+type+'-msg';
        wrapper.style.width = el.clientWidth+'px';
        wrapper.style.height = el.clientHeight+'px';
        wrapper.innerHTML = text +'<a href="#foo" onclick="_2ClickIframePrivacy.EnableContent(\''+ type +'\'); return false;">'+config.showContentLabel+'</a>';
        if(config.enableCookies){
            wrapper.innerHTML = wrapper.innerHTML + '<br /><input type="checkbox" name="remind-\''+ type +'\'" /> <label>'+config.rememberChoiceLabel+'</label>';
        }
        if(config.privacyPolicyUrl){
            wrapper.innerHTML = wrapper.innerHTML + '<br /><a href="'+config.privacyPolicyUrl+'">'+config.privacyPolicyLabel+'</a>';
        }
        wrapper.innerHTML = '<p>' + wrapper.innerHTML + '</p>';
        wrapper.appendChild(el);
    }

    this.EnableContent = function (type){
        var i;

        // Cookies globally enabled by config?
        if(config.enableCookies){
            var remind = false;
            var x = document.querySelectorAll('div.'+type+'-msg p input');
            // Check if any checkbox for the selected class was checked. If so a cookie will be set
            for (i = 0; i < x.length; i++) {
                if(x[i].checked == true){
                    remind = true;
                }
            }

            if(remind){
                if(config.useSessionCookie){
                    setSessionCookie(config.cookieNamespace+type, '1');
                }
                else{
                    setCookie(config.cookieNamespace+type, '1', 30);
                }
            }
        }

        var x = document.querySelectorAll('div.'+type+'-msg p');
        for (i = 0; i < x.length; i++) {
            x[i].parentNode.removeChild(x[i]);
        }

        x = document.querySelectorAll('div.'+type+'-msg');
        for (i = 0; i < x.length; i++) {
            var parent = x[i].parentNode;

            // Move all children out of the element
            while (x[i].firstChild) parent.insertBefore(x[i].firstChild, x[i]);

            // Remove the empty element
            parent.removeChild(x[i]);
        }

        x = document.querySelectorAll('iframe[data-2click-type="'+type+'"]');
        for (i = 0; i < x.length; i++) {
            x[i].src = x[i].getAttribute("data-src");
        }
    }

    this.init = function (Userconfig) {
        // Read UserConfiguration:
        if (typeof Userconfig.enableCookies !== 'undefined') {
            config.enableCookies = Userconfig.enableCookies;
        }
        if (typeof Userconfig.useSessionCookie !== 'undefined') {
            config.useSessionCookie = Userconfig.useSessionCookie;
        }
        if (typeof Userconfig.cookieNamespace !== 'undefined') {
            config.cookieNamespace = Userconfig.cookieNamespace;
        }
        if (typeof Userconfig.privacyPolicyUrl !== 'undefined') {
            config.privacyPolicyUrl = Userconfig.privacyPolicyUrl;
        }
        if (typeof Userconfig.showContentLabel !== 'undefined') {
            config.showContentLabel = Userconfig.showContentLabel;
        }
        if (typeof Userconfig.rememberChoiceLabel !== 'undefined') {
            config.rememberChoiceLabel = Userconfig.rememberChoiceLabel;
        }
        if (typeof Userconfig.privacyPolicyLabel !== 'undefined') {
            config.privacyPolicyLabel = Userconfig.privacyPolicyLabel;
        }

        if (Array.isArray(Userconfig.CustomTypes)) {
            this.types = Userconfig.CustomTypes;
        }

        for (i = 0; i < this.types.length; i++) {
            var selector = document.querySelectorAll('iframe[data-2click-type="'+this.types[i].type+'"]');

            var x;
            if(!getCookie(config.cookieNamespace+this.types[i].type)){
                for (x = 0; x < selector.length; x++) {
                    wrap(selector[x], document.createElement('div'), this.types[i].type, this.types[i].description);
                }
            }else{
                for (x = 0; x < selector.length; x++) {
                    selector[x].src = selector[x].getAttribute("data-src");
                }
            }
        }

    };
}