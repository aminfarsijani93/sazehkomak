

(function (){
    let App = {
        init: function (cnfg) {
            this.dom = cnfg;
            this.bindEvents();
        },



        // Events------------------------------------------------------
        bindEvents: function () {
            this.dom.headerA.forEach(element => {
                element.addEventListener("mouseover" ,this.changeBackgroundNav);
                element.addEventListener("mouseout" , this.backChangeBackgroundNav);                
            });
            this.dom.hamburgerbtn.addEventListener("load" ,this.changeScaleHamburgerBtn);
            this.dom.navA.forEach(element => {
                element.addEventListener("mouseover" ,this.borderTop);
                element.addEventListener("mouseout" , this.deletBorderTop);                
            });
        },


        // functions----------------------------------------------------
        changeBackgroundNav: function () {
            this.style.backgroundColor = "rgba(0,230,130,.5)";
            this.style.padding = ".5em 1em";
            this.style.borderRadius = "1.5em";
            this.style.color = "white";            

        },
        backChangeBackgroundNav: function() {
            this.style.backgroundColor = "transparent";
            this.style.color = "#00e682";
        },
        changeScaleHamburgerBtn: function() {
            setInterval(function () { App.dom.hamburgerbtn.classList.toggle("scaled"); }, 1000);
            App.dom.hamburgerbtn.style.backgroundColor = "transparent" ;
        },
        borderTop: function() {
            this.style.borderTop = "5px solid #00e682";
            this.style.color = "#00e682";
        },
        deletBorderTop: function() {
            this.style.borderTop = "none";
            this.style.color = "black";

        }
    };



    // Doms--------------------------------------------------------------
    App.init({
        headerA: document.querySelectorAll("header div.container div.right a"),
        hamburgerbtn: document.querySelector("img.hambergur"),
        navA: document.querySelectorAll("div.nav-a a"),

    });
})();



const element =  document.querySelector('img.hambergur');
element.classList.add('animated', 'bounceIn')