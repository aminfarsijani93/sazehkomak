

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

            //section request -----------------------------------------------
            this.dom.divReqRemake.addEventListener("mouseover" ,this.backgroundReqRemake);
            this.dom.divReqRemake.addEventListener("mouseout" ,this.undoBackReqRemake);
            this.dom.divReqDesign.addEventListener("mouseover" ,this.changebackReqDesign);
            this.dom.divReqDesign.addEventListener("mouseout" ,this.undochangebackReqDesign);
            this.dom.divReqLandscape.addEventListener("mouseover" ,this.changeBackReqLand);
            this.dom.divReqLandscape.addEventListener("mouseout" ,this.undoChangeBackReqLand);
            this.dom.square.addEventListener("load",this.animatedSquare);



        },


        // functions----------------------------------------------------
        changeBackgroundNav: function () {
            this.style.backgroundColor = "rgba(0,230,130,.5)";
            this.style.padding = ".5em 1em";
            this.style.borderRadius = "1.5em";
            this.style.color = "white";  
            this.style.transition = "500ms" ;         
        },
        backChangeBackgroundNav: function() {
            this.style.backgroundColor = "transparent";
            this.style.color = "#00e682";
            this.style.transition = "500ms" ;         
        },
        changeScaleHamburgerBtn: function() {
            setInterval(function () { App.dom.hamburgerbtn.classList.toggle("scaled"); }, 1000);
            App.dom.hamburgerbtn.style.backgroundColor = "transparent" ;
        },
        borderTop: function() {
            this.style.borderTop = "5px solid #00e682";
            this.style.color = "#00e682";
            this.style.transition = "500ms" ;         
        },
        deletBorderTop: function() {
            this.style.borderTop = "none";
            this.style.color = "black";
            this.style.transition = "500ms" ;         

        },

        // section Request -----------------------------------------------------
        backgroundReqRemake: function(){    
            this.style.backgroundColor = "rgba(0 , 0 , 0 , .5)";
            this.style.transition = "500ms";
            App.dom.imgReqRemake.style.display = "none";
            App.dom.h4ReqRemake.style.display = "none";
            App.dom.divTehReqRemake.style.display = "flex";
            App.dom.divOthersReqRemake.style.display = "flex";
        },
        undoBackReqRemake: function() {
            this.style.backgroundColor = "transparent";
            this.style.transition = "500ms";
            App.dom.imgReqRemake.style.display = "flex";
            App.dom.h4ReqRemake.style.display = "flex";
            App.dom.divTehReqRemake.style.display = "none";
            App.dom.divOthersReqRemake.style.display = "none";
        },
        changebackReqDesign: function() {
            this.style.backgroundColor = "rgba(0 , 0 , 0 , .5)";
            this.style.transition = "500ms";
            App.dom.imgReqDesign.style.display = "none";
            App.dom.h5ReqDesign.style.display = "none";
            App.dom.divTehReqDesign.style.display = "flex";
            App.dom.divOthersReqDesign.style.display = "flex";
        },
        undochangebackReqDesign: function() {
            this.style.backgroundColor = "transparent";
            this.style.transition = "500ms";
            App.dom.imgReqDesign.style.display = "flex";
            App.dom.h5ReqDesign.style.display = "flex";
            App.dom.divTehReqDesign.style.display = "none";
            App.dom.divOthersReqDesign.style.display = "none";
        },
        changeBackReqLand: function() {
            this.style.backgroundColor = "rgba(0 , 0 , 0 , .5)";
            this.style.transition = "500ms";
            App.dom.imgReqLandscape.style.display = "none";
            App.dom.h5ReqLandscape.style.display = "none";
            App.dom.divTehReqLandscape.style.display = "flex";
            App.dom.divOthersReqLandscape.style.display = "flex";
        },
        undoChangeBackReqLand: function() {
            this.style.backgroundColor = "transparent";
            this.style.transition = "500ms";
            App.dom.imgReqLandscape.style.display = "flex";
            App.dom.h5ReqLandscape.style.display = "flex";
            App.dom.divTehReqLandscape.style.display = "none";
            App.dom.divOthersReqLandscape.style.display = "none";
        },
        animatedSquare: function() {
            console.log("hi");
            
            setInterval(()=>{
                App.dom.square.style.left = "-100%";
                App.dom.square.style.transition = "2000ms"
            } ,3000)
        }
        
    };

   

    // Doms--------------------------------------------------------------
    App.init({
        headerA: document.querySelectorAll("header div.container div.right a"),
        hamburgerbtn: document.querySelector("img.hambergur"),
        navA: document.querySelectorAll("div.nav-a a"),
        //section request---------------part1--------------------------
        divReqRemake: document.querySelector("div.req-remake"),
        divTehReqRemake: document.querySelector("div.city-teh"),
        divOthersReqRemake: document.querySelector("div.city-others"),
        imgReqRemake : document.querySelector("div.req-remake img"),
        h4ReqRemake : document.querySelector("div.req-remake h4"),
        //--------------------------part2----------------
        divReqDesign : document.querySelector("div.req-design"),
        divTehReqDesign: document.querySelector("div.city-teh-design"),
        divOthersReqDesign: document.querySelector("div.city-others-design"),
        imgReqDesign : document.querySelector("div.req-design img"),
        h5ReqDesign : document.querySelector("div.req-design h5"),
        //--------------------------part3-------------------
        divReqLandscape : document.querySelector("div.req-landscape"),
        divTehReqLandscape: document.querySelector("div.city-teh-landscape"),
        divOthersReqLandscape: document.querySelector("div.city-others-landscape"),
        imgReqLandscape : document.querySelector("div.req-landscape img"),
        h5ReqLandscape : document.querySelector("div.req-landscape h5"),
        //square animated ----------------------------------------
        square: document.querySelector("div.square-out"),







    });
})();



const element =  document.querySelector('img.hambergur');
element.classList.add('animated', 'bounceIn')