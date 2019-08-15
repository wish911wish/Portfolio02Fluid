
window.onload = function () {

    var timeLine_a0 = new TimelineMax();
    var timeLine_b0 = new TimelineMax();
    var timeLine_c0 = new TimelineMax();

    timeLine_a0.to(a01, 4.8, {morphSVG: "#a02"})
            .to(a01, 4.8, {morphSVG: '#a03'})
            .to(a01, 4.8, {morphSVG: '#a04'})
            .to(a01, 4.8, {morphSVG: '#a05'})
            .to(a01, 4.8, {morphSVG: '#a06'})
            .to(a01, 4.8, {morphSVG: '#a07'})
            .to(a01, 4.8, {morphSVG: '#a08'})
            .to(a01, 4.8, {morphSVG: '#a01'}).repeat(-1)


    timeLine_b0.to(b01, 4.1, {morphSVG: "#b02"})
            .to(b01, 4.1, {morphSVG: '#b03'})
            .to(b01, 4.1, {morphSVG: '#b04'})
            .to(b01, 4.1, {morphSVG: '#b05'})
            .to(b01, 4.1, {morphSVG: '#b06'})
            .to(b01, 4.1, {morphSVG: '#b07'})
            .to(b01, 4.1, {morphSVG: '#b08'})
            .to(b01, 4.1, {morphSVG: '#b01'}).repeat(-1)

    timeLine_c0.to(c01, 4.3, {morphSVG: "#c02"})
            .to(c01, 4.3, {morphSVG: '#c03'})
            .to(c01, 4.3, {morphSVG: '#c04'})
            .to(c01, 4.3, {morphSVG: '#c05'})
            .to(c01, 4.3, {morphSVG: '#c06'})
            .to(c01, 4.3, {morphSVG: '#c07'})
            .to(c01, 4.3, {morphSVG: '#c08'})
            .to(c01, 4.3, {morphSVG: '#c01'}).repeat(-1);
    
    var profile = new Vue({
        el: '#profile-link',
        data: {
            name: 'Vue.js'
        },
        methods:{
            moveProfile:function(e){
                transition(0, -50)
                transitionMain(-100, 0)
            },
            backToTop:function(e){
                transition(-100,-50)
                transitionMain(0, 0)
            },
        }
    })

    var work = new Vue({
        el: '#work-link',
        data: {
            name: 'Vue.js'
        },
        methods:{
            moveWork:function(e){
                transition(-200, 0)
                transitionMain(100, -50)
            },
            backToTop:function(e){
                transition(-100,-50)
                transitionMain(0, 0)
            },
        }
    })

    var contact = new Vue({
        el: '#contact-link',
        data: {
            name: 'Vue.js'
        },
        methods:{
            moveContact:function(e){
                transition(-200, -100)
                transitionMain(100, 50)
            },
            backToTop:function(e){
                transition(-100,-50)
                transitionMain(0, 0)
            },
        }
    })
};

function transition(vw, vh){
    var blobs = document.getElementById("blobs")
    var main = document.getElementById("main")
    blobs.setAttribute("style",`transform: translate(${vw}vw, ${vh}vh);`)
    main.setAttribute("style",`transform: translate(${vw}vw, 0vh);`)
}

function transitionMain(vw, vh){
    var main = document.getElementById("main")
    main.setAttribute("style",`transform: translate(${vw}vw, ${vh}vh);`)
}


