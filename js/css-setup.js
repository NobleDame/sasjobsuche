function updateCSS(){
    /*Hier werden alle CSS-Dinge aktualisiert wenn nötig*/
        /*Acc quadratisch machen*/
        const acc_element_height = document.getElementById("account-element").clientHeight;
        const win_width = document.documentElement.scrollWidth;
        document.getElementById("account-element").style.width = acc_element_height + "px";
        const newAccLeft = win_width - acc_element_height;
        document.getElementById("account-element").style.left = newAccLeft + "px";
        //document.getElementById("account-element").style.left = "0px";
        /*fixedpadding*/
        if(document.getElementById("searchbar") != null){
        const paddingSize = document.getElementById("searchbar").clientHeight +document.getElementById("fixedbar").clientHeight + 10;
        document.getElementById("fixed-padding-expander").style.height = paddingSize + "px";
        }
    }       

window.addEventListener("resize", updateCSS);

