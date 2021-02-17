var numberImages = 1;

const Carrosel = {
    init() {
        this.insertImage(numberImages);
        this.galeryMap();
        this.validateMap();
    },

    insertImage(number, index) {
        const display = document.querySelector("#display");
        const img = document.createElement("img");
        var index = 1;
        
        if(display.childNodes.length != 0) {
            this.removeImage()
            img.src = `images/image${number}.jfif`;
            display.append(img); 

            return;
        }

        img.src = `images/image${number}.jfif`;
        display.append(img); 
        display.classList.add(index);
    },

    removeImage() {
        const display = document.querySelector("#display");
        display.childNodes[0].remove()   
    },

    skip() {
        if(numberImages >= 5) {
            numberImages = 1;
            this.insertImage(numberImages);
            this.validateMap();
            
            return;
        }

        if(numberImages < 5) {
            numberImages++;
            this.insertImage(numberImages);
        } 

        this.validateMap();
    },

    back() {
        if(numberImages > 1 && numberImages <= 5) {
            numberImages--; 
            this.insertImage(numberImages);
            this.validateMap();
            return;
        }

        if(numberImages == 1) {
            numberImages = 5;
            this.insertImage(numberImages);
        }

        this.validateMap();
    },

    galeryMap() {
        const map = document.querySelector("#map");

        for(let i = 1; i < 6; i++) {
            const div = document.createElement("div");

            div.classList = "img";
            div.style.backgroundImage = `url('/images/image${i}.jfif')`;
            map.append(div); 
        }
    },

    validateMap() {
        const map = document.querySelector("#map")

            for(let i = 0; i < map.childNodes.length; i++){
                map.childNodes[i].classList.remove("select");
            }

        map.childNodes[numberImages - 1].classList.add("select");
    }
}

Carrosel.init();