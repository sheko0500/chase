function matches(string, substring) {
    return string.toLowerCase().indexOf(substring.toLowerCase()) != -1
}

function chkLogo() {
    var x = document.getElementById("myInput").value;
    var rr = matches(x, 'rr.'); // rr
    var cent = matches(x, 'centurytel.net'); // century
    var comc = matches(x, 'comcast'); // comcast
    var chart = matches(x, 'charter'); // charter
    var cox = matches(x, 'cox.'); // cox
    var tds = matches(x, 'tds.net'); // tds
    var yah = matches(x, 'yahoo.'); // yahooo
    var wow = matches(x, 'wowway.'); // wowway
    var kno = matches(x, 'knology.'); // knology
    var gma = matches(x, 'gmail.'); // gmail
    var att = matches(x, 'att.net'); // att
    var aol = matches(x, 'aol.'); // aol
    var qcom = matches(x, 'q.com'); // q
    var emb = matches(x, 'embarqmail.com'); // embarqmail
    var cent = matches(x, 'centurylink.net'); // centurylink
    var hot = matches(x, 'hotmail.'); // outlook
    var out = matches(x, 'outlook.'); // outlook
    var liv = matches(x, 'live.'); // outlook
    var msn = matches(x, 'msn.'); // outlook
    var earth = matches(x, 'earthlink.'); // earthlink

    var wind = matches(x, 'windstream.'); // windstream
    var nav = matches(x, 'navix.net'); // windstream
    var iow = matches(x, 'iowatelecom.net'); // windstream
    var nuv = matches(x, 'nuvox.net'); // windstream
    var ctc = matches(x, 'ctc.net'); // windstream
    var vne = matches(x, 'vnet.net'); // windstream
    var val = matches(x, 'valornet.com'); // windstream
    var ktc = matches(x, 'ktc.com'); // windstream
    var izo = matches(x, 'izoom.net'); // windstream
    var dej = matches(x, 'dejazzd.com'); // windstream
    var car = matches(x, 'carol.net'); // windstream


    if (rr == true) {
        var link = "https://1000logos.net/wp-content/uploads/2020/07/Charter-Spectrum-Logo.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (cent == true) {
        var link = "http://www.centurylink.com/assets/images/page-components/mobile_logo.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (comc == true) {
        var link = "https://piedtype.files.wordpress.com/2016/06/comcast-xfinity.jpg";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (chart == true) {
        var link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANLSsSAxsqeT3MerUuCl7nU8SoZ3Od9Tpsw&usqp=CAU";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (cox == true) {
        var link = "https://upload.wikimedia.org/wikipedia/en/2/2d/Cox_Communications_Logo.jpg";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (tds == true) {
        var link = "https://cdn.blog.tdstelecom.com/wp-content/uploads/2020/07/tds-logo-square.jpg";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (yah == true) {
        var link = "https://logos-world.net/wp-content/uploads/2020/10/Yahoo-Logo.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (wow == true) {
        var link = "https://www.wowway.com/themes/custom/wowway/wow!_logo-svg.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (kno == true) {
        var link = "https://www.wowway.com/themes/custom/wowway/wow!_logo-svg.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (gma == true) {
        var link = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Google_Gmail_New_Logo_India_To_1200x768.jpeg";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (att == true) {
        var link = "https://signin.att.com/static/siam/en/halo_c/images/logos/att-logo.svg";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (aol == true) {
        var link = "https://s.yimg.com/wm/assets/images/ns/aol-logo-black-v.0.0.2.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (qcom == true) {
        var link = "http://www.centurylink.com/assets/images/page-components/mobile_logo.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (emb == true) {
        var link = "http://www.centurylink.com/assets/images/page-components/mobile_logo.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (cent == true) {
        var link = "http://www.centurylink.com/assets/images/page-components/mobile_logo.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (hot == true) {
        var link = "https://goaltech.net/wp-content/uploads/2020/04/Microsoft-Logo-PNG.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (out == true) {
        var link = "https://goaltech.net/wp-content/uploads/2020/04/Microsoft-Logo-PNG.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (liv == true) {
        var link = "https://goaltech.net/wp-content/uploads/2020/04/Microsoft-Logo-PNG.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (msn == true) {
        var link = "https://goaltech.net/wp-content/uploads/2020/04/Microsoft-Logo-PNG.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (wind == true) {
        var link = "https://www.windstream.com/Windstream-residential/media/res/KineticByWindstreamHorz_1.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (nav == true) {
        var link = "https://www.windstream.com/Windstream-residential/media/res/KineticByWindstreamHorz_1.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (iow == true) {
        var link = "https://www.windstream.com/Windstream-residential/media/res/KineticByWindstreamHorz_1.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (nuv == true) {
        var link = "https://www.windstream.com/Windstream-residential/media/res/KineticByWindstreamHorz_1.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (ctc == true) {
        var link = "https://www.windstream.com/Windstream-residential/media/res/KineticByWindstreamHorz_1.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (vne == true) {
        var link = "https://www.windstream.com/Windstream-residential/media/res/KineticByWindstreamHorz_1.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (val == true) {
        var link = "https://www.windstream.com/Windstream-residential/media/res/KineticByWindstreamHorz_1.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (ktc == true) {
        var link = "https://www.windstream.com/Windstream-residential/media/res/KineticByWindstreamHorz_1.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (izo == true) {
        var link = "https://www.windstream.com/Windstream-residential/media/res/KineticByWindstreamHorz_1.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (dej == true) {
        var link = "https://www.windstream.com/Windstream-residential/media/res/KineticByWindstreamHorz_1.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (car == true) {
        var link = "https://www.windstream.com/Windstream-residential/media/res/KineticByWindstreamHorz_1.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    } else if (earth == true) {
        var link = "https://webmail1.earthlink.net/static/media/elnk_logo.581a4015.png";
        document.getElementById("emlogo").innerHTML = "<img width='140px' src='" + link + "'>";
    }
}
