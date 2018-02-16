let data = require('./index.data.js');
//index file in the root for github pages

module.exports = function(){
    return html`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Mini Site Generator</title>
            <link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAFF0lEQVR42mVVXW8TRxQdm9/AT0CoDyjYFAiEBJKQD4KEUNMfALKEIpr+gEgGgYBA+0AA0TxA4vSpCAECBPEDCqASIfFSIZDIgxEFQoiTxpQUAvbuzJ3Tcze7LinHPpqRPXPOvXfvzBoFvP+CkgJgyFXe24z3khfx4+KkZG34AYCyVKvVxmtBLe/hM7qWNOJ9SkRMwggutMbZiCmBpD1gyHUUHnPOVZwInHX09lDMzs5iYmIC9+/fw/zcnP5e4boxjusAb2iYdk5STrxxamLDwIizqd/fzWsGaS7MkbMkrLWeFMXHjx/9L8PD2Lt3L4aHh325XJZqtSpe9CsQ7nFecqghPYlPxjqXChm4CQJvACjVfYBjoOKkIyQIAhAqitWrV0ejQkUVuoZBOEL3cK8MJHpaJp2kI3Fnc5S1IDwRZ4DE4OnTp+js7MS+ffuwsLCQiCvVTEfPL+feOnE5QIxnyQ0D0Fo1ML0yliEqrpvUIDYES4InT56gv78fe/bsqZvoOqX3Sgip8zJ1G0hjpsxfxnlfsFxAWMRIIlPhoaEhjI6OIgxD3Lx5Ez09PZifn08M6kEASlide5HC0TSMoU6WThVmphHop26guH79OjKZDKanp6MOKhQKePPmzX9rvoaPDSvWuqwRQT5y9E50TAy0PJ8/f9aoo+gPHjyImZmZSJRnAEtLS/XIv0a9zHnDSZFz3ciWrD8wNain//r1a4yMjIBtiQTJOhWKxVZmQU0rUjScP4+D8CqqmzRqxdu3b/HgwQNcuXIFxWIRt27dwp07dzA5OanlUmE11WB0z5fZqK2m8dzo0Y//WCF+9+5dnDhxApcvX8bt27cj3rhxI3rIly5dwvHjx/Hw4cMkG923IovY4INmoAYrSqMYGBiI+OzZMy2RdpN2DrOaidr12LFj2L9/Py5cuKBZJtHrGBPLBpw8F/EgvZroXHHo0CGsXfsNmpu3o7W1jYesC11d3Whra8fWrduwaVMjduxoRXv7TmSzG2h0sV4FT1AOVqyWyBfjDHzirjh8+DC+/XYTBTvQ1NSCbduaOTZzbKFhOzZubGQQRygoOH16iIabUSqVkg70zjsauKIRcfnYQP5vkMlsQEdHF6PsWMGdOzv1Px7As1C8fPkKW7Y04erVqyD0ehHtSErljXVBltoVkeQOSkoUGaggS9GmUSt1zqy0LBtx6tTPULx48SfL1oRr166B8HpO9PBSKmt+O2MMDQqsGiyRdEI+n48NOrXWKqysG6xfn8XZs+egGBv7lSXbjKmpKRA2DC0cNd0BGENJoxeTiC1rq6kHiCNHjqpIkoGynkFLy46oJAcO9LGVB9HQkMHJkz+BkOU7zJetBA2kRq8vGXB0OUuoCeHZopoBu6f7C/FWjT56Bm2t7TTaju7uHpw/P8y6h9o7WhrrQsnZQIwNXNoEQbX+wqH4QECAGBwcdGvWrJXGxq0arbZr1EVN7CJtUW3hM2fOwertT2hpOQu8W37hCGltTW/TkNHb1KNHizRxaedsDsBsZaGCixdHfV9fn/T29squnh6/e9du9H73Pfp/+NGPjhRkcXFRNFtGz8K7Wbrklv75Ow1EFUkxI6Pixnu3/IPzaWFq5Dp4jAGo1GpVzM2VeZpfYZoneq48hzhJrbUKV7zIGCz3ODGghg1tijRhEBqFite59GkpNXHvnvnj8eNV796/zzjv8wDGyRL5QSkipWotGA9D4RlCJpTaKkHVOAZJmoSKfwHmDEZaVNa/DQAAAABJRU5ErkJggg==">
            <link href="https://fonts.googleapis.com/css?family=Bungee" rel="stylesheet">
            <link href="main.css" rel="stylesheet">
        </head>
        <body class="text-center">
            <section class="screen-height clr-white bg-black center-section">
                <h1>Mini Site Generator</h1>
                <p><em>It's Just <span class="clr-yellow">JavaScript</span></em></p>
            </section>

            <section class="screen-height center-section">
                <p class="no-wrap">
                    <span class="v-center"><span class="hide-small">____</span>.page.js</span>
                    <svg class="svg-icon fill-yellow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 493.356 493.356">
                        <title>is transformed into</title>
                        <path d="M490.498,239.278l-109.632-99.929c-3.046-2.474-6.376-2.95-9.993-1.427c-3.613,1.525-5.427,4.283-5.427,8.282v63.954H9.136   c-2.666,0-4.856,0.855-6.567,2.568C0.859,214.438,0,216.628,0,219.292v54.816c0,2.663,0.855,4.853,2.568,6.563   c1.715,1.712,3.905,2.567,6.567,2.567h356.313v63.953c0,3.812,1.817,6.57,5.428,8.278c3.62,1.529,6.95,0.951,9.996-1.708   l109.632-101.077c1.903-1.902,2.852-4.182,2.852-6.849C493.356,243.367,492.401,241.181,490.498,239.278z"></path>
                    </svg class="v-center">
                    <span><span class="hide-small">____</span>.html</span>
                </p>
            </section>

            <section class="screen-height clr-white bg-blue center-section text-left">
<pre><code>
module.exports = function(){
    return html&#96;
        &lt;p&gt;It's just <span class="clr-yellow">JavaScript</span>!&lt/p&gt
    &#96;
}
</code></pre>
            </section>

            <section class="screen-height center-section">
                <code class="inline-code">npm install mini-site-generator</code>
            </section>
        </body>
        </html>
    `;
}