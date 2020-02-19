

(function () {
    let App = {
        init: function (cnfg) {
            this.dom = cnfg;
            this.bindEvents();
        },

        // Events------------------------------------------------------
        bindEvents: function () {
            this.dom.headerA.forEach(element => {
                element.addEventListener("mouseover", this.changeBackgroundNav);
                element.addEventListener("mouseout", this.backChangeBackgroundNav);
            });
            this.dom.hamburgerbtn.addEventListener("load", this.changeScaleHamburgerBtn);
            this.dom.navA.forEach(element => {
                element.addEventListener("mouseover", this.borderTop);
                element.addEventListener("mouseout", this.deletBorderTop);
            });

            //section request -----------------------------------------------
            this.dom.divReqRemake.addEventListener("mouseover", this.backgroundReqRemake);
            this.dom.divReqRemake.addEventListener("mouseout", this.undoBackReqRemake);
            this.dom.divReqDesign.addEventListener("mouseover", this.changebackReqDesign);
            this.dom.divReqDesign.addEventListener("mouseout", this.undochangebackReqDesign);
            this.dom.divReqLandscape.addEventListener("mouseover", this.changeBackReqLand);
            this.dom.divReqLandscape.addEventListener("mouseout", this.undoChangeBackReqLand);

            //square----------------------------------------------------------------
            window.addEventListener("load", this.animatedSquare);

            //nav middle -------------------------------------------------------

            this.dom.navMiddle.forEach(el => {
                el.addEventListener("mouseover", this.changeColorNavMiddle);
                el.addEventListener("mouseout", this.undoChangeColorNavMiddle);
            });

            //slider handy------------------------------------------------------

            this.dom.nextIcon.addEventListener("click" ,this.sliderhandler);
            this.dom.backIcon.addEventListener("click" ,this.sliderBefor);
            


            // bigCircle explain ----------------------------------------------------------

                this.dom.smallCircle1.addEventListener("mouseover" ,this.changeBackCircle1);
                this.dom.smallCircle1.addEventListener("mouseout" ,this.undochangeBackCircle1);
                this.dom.smallCircle2.addEventListener("mouseover" ,this.changeBackCircle2);
                this.dom.smallCircle2.addEventListener("mouseout" ,this.undochangeBackCircle2);
                this.dom.smallCircle3.addEventListener("mouseover" ,this.changeBackCircle3);
                this.dom.smallCircle3.addEventListener("mouseout" ,this.undochangeBackCircle3);
                this.dom.smallCircle4.addEventListener("mouseover" ,this.changeBackCircle4);
                this.dom.smallCircle4.addEventListener("mouseout" ,this.undochangeBackCircle4);
                this.dom.smallCircle5.addEventListener("mouseover" ,this.changeBackCircle5);
                this.dom.smallCircle5.addEventListener("mouseout" ,this.undochangeBackCircle5);
                this.dom.smallCircle6.addEventListener("mouseover" ,this.changeBackCircle6);
                this.dom.smallCircle6.addEventListener("mouseout" ,this.undochangeBackCircle6);
                this.dom.smallCircle7.addEventListener("mouseover" ,this.changeBackCircle7);
                this.dom.smallCircle7.addEventListener("mouseout" ,this.undochangeBackCircle7);



        },


        // functions----------------------------------------------------
        changeBackgroundNav: function () {
            this.style.backgroundColor = "rgba(0,230,130,.5)";
            this.style.padding = ".5em 1em";
            this.style.borderRadius = "1.5em";
            this.style.color = "white";
            this.style.transition = "500ms";
        },
        backChangeBackgroundNav: function () {
            this.style.backgroundColor = "transparent";
            this.style.color = "#00e682";
            this.style.transition = "500ms";
        },
        changeScaleHamburgerBtn: function () {
            setInterval(function () { App.dom.hamburgerbtn.classList.toggle("scaled"); }, 1000);
            App.dom.hamburgerbtn.style.backgroundColor = "transparent";
        },
        borderTop: function () {
            this.style.borderTop = "5px solid #00e682";
            this.style.color = "#00e682";
            this.style.transition = "500ms";
        },
        deletBorderTop: function () {
            this.style.borderTop = "none";
            this.style.color = "black";
            this.style.transition = "500ms";

        },

        // section Request -----------------------------------------------------
        backgroundReqRemake: function () {
            this.style.backgroundColor = "rgba(0 , 0 , 0 , .5)";
            this.style.transition = "500ms";
            App.dom.imgReqRemake.style.display = "none";
            App.dom.h4ReqRemake.style.display = "none";
            App.dom.divTehReqRemake.style.display = "flex";
            App.dom.divOthersReqRemake.style.display = "flex";
        },
        undoBackReqRemake: function () {
            this.style.backgroundColor = "transparent";
            this.style.transition = "500ms";
            App.dom.imgReqRemake.style.display = "flex";
            App.dom.h4ReqRemake.style.display = "flex";
            App.dom.divTehReqRemake.style.display = "none";
            App.dom.divOthersReqRemake.style.display = "none";
        },
        changebackReqDesign: function () {
            this.style.backgroundColor = "rgba(0 , 0 , 0 , .5)";
            this.style.transition = "500ms";
            App.dom.imgReqDesign.style.display = "none";
            App.dom.h5ReqDesign.style.display = "none";
            App.dom.divTehReqDesign.style.display = "flex";
            App.dom.divOthersReqDesign.style.display = "flex";
        },
        undochangebackReqDesign: function () {
            this.style.backgroundColor = "transparent";
            this.style.transition = "500ms";
            App.dom.imgReqDesign.style.display = "flex";
            App.dom.h5ReqDesign.style.display = "flex";
            App.dom.divTehReqDesign.style.display = "none";
            App.dom.divOthersReqDesign.style.display = "none";
        },
        changeBackReqLand: function () {
            this.style.backgroundColor = "rgba(0 , 0 , 0 , .5)";
            this.style.transition = "500ms";
            App.dom.imgReqLandscape.style.display = "none";
            App.dom.h5ReqLandscape.style.display = "none";
            App.dom.divTehReqLandscape.style.display = "flex";
            App.dom.divOthersReqLandscape.style.display = "flex";
        },
        undoChangeBackReqLand: function () {
            this.style.backgroundColor = "transparent";
            this.style.transition = "500ms";
            App.dom.imgReqLandscape.style.display = "flex";
            App.dom.h5ReqLandscape.style.display = "flex";
            App.dom.divTehReqLandscape.style.display = "none";
            App.dom.divOthersReqLandscape.style.display = "none";
        },
        animatedSquare: function () {
            setTimeout(() => {
                console.log("hi");
                App.dom.square.style.left = "-100%";
                App.dom.square.style.transition = "2000ms"
            }, 3000);
            setTimeout(() => {
                console.log("bye");
                App.dom.square.style.left = "-5%";
                App.dom.square.style.transition = "2000ms"
            }, 8000);
        },
        changeColorNavMiddle: function () {
            this.style.color = "#00e682";
            this.style.transition = "500ms";
            this.style.border = "2px solid #00e682";
        },
        undoChangeColorNavMiddle: function () {
            this.style.color = "black";
            this.style.transition = "500ms";
            this.style.border = "2px solid black";
        },
        //slider-------------------------------------------------------------

        sliderhandler: function(){
            App.dom.sliderAfter.style.width = "0";
            App.dom.backIcon.style.left = "95%"
            this.style.right = "-5%";
        },
        sliderBefor: function(){
            App.dom.sliderAfter.style.width = "100%";
            this.style.left = "-5%"
            App.dom.nextIcon.style.right = "95%";
        },








        // bigCircle explain ----------------------------------------------------------
        changeBackCircle1: function() {
            this.style.backgroundColor = "#00e682";
            this.style.transition = "500ms";
            App.dom.centerTextBigCircle1.textContent = "جمع آوری اطلاعات";
            App.dom.centerTextBigCircle1.style.opacity = 0;
var Op1 = 0;
var foo1;
foo1 = setInterval(Timer1, 10);
function Timer1()
{
    App.dom.centerTextBigCircle1.style.opacity = Op1;
    Op1 = Op1 + .01;
    if (Op1 > 1)
    {
        clearInterval(foo1);
        foo2 = setInterval(Timer3, 20);
    }
}
            App.dom.centerTextBigCircle2.textContent = "جمع آوری اطلاعات ازشرایط کنونی و نیازها";
            App.dom.centerTextBigCircle2.style.opacity = 0;
            var Op1 = 0;
var foo2;
foo2 = setInterval(Timer2, 10);
function Timer2()
{
    App.dom.centerTextBigCircle2.style.opacity = Op1;
    Op1 = Op1 + .01;
    if (Op1 > 1)
    {
        clearInterval(foo2);
        foo2 = setInterval(Timer3, 20);
    }
}
        },
        undochangeBackCircle1: function() {
            this.style.backgroundColor = "rgb(31, 54, 92)";
            App.dom.centerTextBigCircle1.textContent = "مراحل بازسازی";
            App.dom.centerTextBigCircle2.textContent = "";
        },
        changeBackCircle2: function() {
            this.style.backgroundColor = "#00e682";
            this.style.transition = "500ms";
            App.dom.centerTextBigCircle1.textContent = "مشاوره";
            App.dom.centerTextBigCircle1.style.opacity = 0;
            var Op1 = 0;
            var foo1;
            foo1 = setInterval(Timer1, 10);
            function Timer1()
            {
                App.dom.centerTextBigCircle1.style.opacity = Op1;
                Op1 = Op1 + .01;
                if (Op1 > 1)
                {
                    clearInterval(foo1);
                    foo2 = setInterval(Timer3, 20);
                }
            }
            App.dom.centerTextBigCircle2.textContent = "مشاوره با شرکتهای متخصص در امر بازسازی";
            App.dom.centerTextBigCircle2.style.opacity = 0;
            var Op1 = 0;
var foo2;
foo2 = setInterval(Timer2, 10);
function Timer2()
{
    App.dom.centerTextBigCircle2.style.opacity = Op1;
    Op1 = Op1 + .01;
    if (Op1 > 1)
    {
        clearInterval(foo2);
        foo2 = setInterval(Timer3, 20);
    }
}
        },
        undochangeBackCircle2: function() {
            this.style.backgroundColor = "rgb(31, 54, 92)";
            App.dom.centerTextBigCircle1.textContent = "مراحل بازسازی";
            App.dom.centerTextBigCircle2.textContent = "";
        },
        changeBackCircle3: function() {
            this.style.backgroundColor = "#00e682";
            this.style.transition = "500ms";
            App.dom.centerTextBigCircle1.textContent = "برداشت مهندسی";
            App.dom.centerTextBigCircle1.style.opacity = 0;
            var Op1 = 0;
            var foo1;
            foo1 = setInterval(Timer1, 10);
            function Timer1()
            {
                App.dom.centerTextBigCircle1.style.opacity = Op1;
                Op1 = Op1 + .01;
                if (Op1 > 1)
                {
                    clearInterval(foo1);
                    foo2 = setInterval(Timer3, 20);
                }
            }
            App.dom.centerTextBigCircle2.textContent = "اندازه گیری / تهیه نقشه های ساختمانی";
            App.dom.centerTextBigCircle2.style.opacity = 0;
            var Op1 = 0;
var foo2;
foo2 = setInterval(Timer2, 10);
function Timer2()
{
    App.dom.centerTextBigCircle2.style.opacity = Op1;
    Op1 = Op1 + .01;
    if (Op1 > 1)
    {
        clearInterval(foo2);
        foo2 = setInterval(Timer3, 20);
    }
}
        },
        undochangeBackCircle3: function() {
            this.style.backgroundColor = "rgb(31, 54, 92)";
            App.dom.centerTextBigCircle1.textContent = "مراحل بازسازی";
            App.dom.centerTextBigCircle2.textContent = "";
        },
        changeBackCircle4: function() {
            this.style.backgroundColor = "#00e682";
            this.style.transition = "500ms";
            App.dom.centerTextBigCircle1.textContent = "جمع بندی نهایی";
            App.dom.centerTextBigCircle1.style.opacity = 0;
            var Op1 = 0;
            var foo1;
            foo1 = setInterval(Timer1, 10);
            function Timer1()
            {
                App.dom.centerTextBigCircle1.style.opacity = Op1;
                Op1 = Op1 + .01;
                if (Op1 > 1)
                {
                    clearInterval(foo1);
                    foo2 = setInterval(Timer3, 20);
                }
            }
            App.dom.centerTextBigCircle2.textContent = "براورد هزینه و مدت زمان بازسازی وعقد قرارداد رسمی";
            App.dom.centerTextBigCircle2.style.opacity = 0;
            var Op1 = 0;
var foo2;
foo2 = setInterval(Timer2, 10);
function Timer2()
{
    App.dom.centerTextBigCircle2.style.opacity = Op1;
    Op1 = Op1 + .01;
    if (Op1 > 1)
    {
        clearInterval(foo2);
        foo2 = setInterval(Timer3, 20);
    }
}
        },
        undochangeBackCircle4: function() {
            this.style.backgroundColor = "rgb(31, 54, 92)";
            App.dom.centerTextBigCircle1.textContent = "مراحل بازسازی";
            App.dom.centerTextBigCircle2.textContent = "";
        },
        changeBackCircle5: function() {
            this.style.backgroundColor = "#00e682";
            this.style.transition = "500ms";
            App.dom.centerTextBigCircle1.textContent = "تخریب";
            App.dom.centerTextBigCircle1.style.opacity = 0;
            var Op1 = 0;
            var foo1;
            foo1 = setInterval(Timer1, 10);
            function Timer1()
            {
                App.dom.centerTextBigCircle1.style.opacity = Op1;
                Op1 = Op1 + .01;
                if (Op1 > 1)
                {
                    clearInterval(foo1);
                    foo2 = setInterval(Timer3, 20);
                }
            }
            App.dom.centerTextBigCircle2.textContent = "تخریب نقاط مورد نیازتوسط تیم متخصص";
            App.dom.centerTextBigCircle2.style.opacity = 0;
            var Op1 = 0;
var foo2;
foo2 = setInterval(Timer2, 10);
function Timer2()
{
    App.dom.centerTextBigCircle2.style.opacity = Op1;
    Op1 = Op1 + .01;
    if (Op1 > 1)
    {
        clearInterval(foo2);
        foo2 = setInterval(Timer3, 20);
    }
}
        },
        undochangeBackCircle5: function() {
            this.style.backgroundColor = "rgb(31, 54, 92)";
            App.dom.centerTextBigCircle1.textContent = "مراحل بازسازی";
            App.dom.centerTextBigCircle2.textContent = "";
        },
        changeBackCircle6: function() {
            this.style.backgroundColor = "#00e682";
            this.style.transition = "500ms";
            App.dom.centerTextBigCircle1.textContent = "اجرا";
            App.dom.centerTextBigCircle1.style.opacity = 0;
            var Op1 = 0;
            var foo1;
            foo1 = setInterval(Timer1, 10);
            function Timer1()
            {
                App.dom.centerTextBigCircle1.style.opacity = Op1;
                Op1 = Op1 + .01;
                if (Op1 > 1)
                {
                    clearInterval(foo1);
                    foo2 = setInterval(Timer3, 20);
                }
            }
            App.dom.centerTextBigCircle2.textContent = "اجرا بصورت توالی و با توجه به نیاز";
            App.dom.centerTextBigCircle2.style.opacity = 0;
            var Op1 = 0;
var foo2;
foo2 = setInterval(Timer2, 10);
function Timer2()
{
    App.dom.centerTextBigCircle2.style.opacity = Op1;
    Op1 = Op1 + .01;
    if (Op1 > 1)
    {
        clearInterval(foo2);
        foo2 = setInterval(Timer3, 20);
    }
}
        },
        undochangeBackCircle6: function() {
            this.style.backgroundColor = "rgb(31, 54, 92)";
            App.dom.centerTextBigCircle1.textContent = "مراحل بازسازی";
            App.dom.centerTextBigCircle2.textContent = "";
        },
        changeBackCircle7: function() {
            this.style.backgroundColor = "#00e682";
            this.style.transition = "500ms";
            App.dom.centerTextBigCircle1.textContent = "تحویل پروژه";
            App.dom.centerTextBigCircle1.style.opacity = 0;
            var Op1 = 0;
            var foo1;
            foo1 = setInterval(Timer1, 10);
            function Timer1()
            {
                App.dom.centerTextBigCircle1.style.opacity = Op1;
                Op1 = Op1 + .01;
                if (Op1 > 1)
                {
                    clearInterval(foo1);
                    foo2 = setInterval(Timer3, 20);
                }
            }
            App.dom.centerTextBigCircle2.textContent = "چک کردن لیست اجرایی و تحویل پروژه";
            App.dom.centerTextBigCircle2.style.opacity = 0;
            var Op1 = 0;
var foo2;
foo2 = setInterval(Timer2, 10);
function Timer2()
{
    App.dom.centerTextBigCircle2.style.opacity = Op1;
    Op1 = Op1 + .01;
    if (Op1 > 1)
    {
        clearInterval(foo2);
        foo2 = setInterval(Timer3, 20);
    }
}
        },
        undochangeBackCircle7: function() {
            this.style.backgroundColor = "rgb(31, 54, 92)";
            App.dom.centerTextBigCircle1.textContent = "مراحل بازسازی";
            App.dom.centerTextBigCircle2.textContent = "";
        },

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
        imgReqRemake: document.querySelector("div.req-remake img"),
        h4ReqRemake: document.querySelector("div.req-remake h4"),
        //--------------------------part2----------------
        divReqDesign: document.querySelector("div.req-design"),
        divTehReqDesign: document.querySelector("div.city-teh-design"),
        divOthersReqDesign: document.querySelector("div.city-others-design"),
        imgReqDesign: document.querySelector("div.req-design img"),
        h5ReqDesign: document.querySelector("div.req-design h5"),
        //--------------------------part3-------------------
        divReqLandscape: document.querySelector("div.req-landscape"),
        divTehReqLandscape: document.querySelector("div.city-teh-landscape"),
        divOthersReqLandscape: document.querySelector("div.city-others-landscape"),
        imgReqLandscape: document.querySelector("div.req-landscape img"),
        h5ReqLandscape: document.querySelector("div.req-landscape h5"),
        //square in background main animated ----------------------------------------
        square: document.querySelector("div.square-out"),


        //menu remake middle ---------------------------------------------------------
        navMiddle: document.querySelectorAll("div.nav-middle a"),




        //slider handy ----------------------------------------------------------------
        sliderAfter: document.querySelector("div.slider-after"),
        nextIcon : document.querySelector("img.next"),
        backIcon : document.querySelector("img.back"),




        // bigCircle explain ----------------------------------------------------------
        centerTextBigCircle1: document.querySelector("div.text1-center"),
        centerTextBigCircle2: document.querySelector("div.text2-center"),
        smallCircle1: document.querySelector("div.small-circle1"),
        smallCircle2: document.querySelector("div.small-circle2"),
        smallCircle3: document.querySelector("div.small-circle3"),
        smallCircle4: document.querySelector("div.small-circle4"),
        smallCircle5: document.querySelector("div.small-circle5"),
        smallCircle6: document.querySelector("div.small-circle6"),
        smallCircle7: document.querySelector("div.small-circle7"),









    });
})();



const element = document.querySelector('img.hambergur');
element.classList.add('animated', 'bounceIn');





var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider-main1");
  var dots = document.getElementsByClassName("circle-state");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");

  }   
  slides[slideIndex-1].style.display = "flex"; 
  dots[slideIndex-1].className += " active"; 
  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
};


var slideIndex = 0;
showSlidesSymbol();

function showSlidesSymbol() {
  var i;
  var slides = document.getElementsByClassName("mySlides-symbol");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "flex";  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

