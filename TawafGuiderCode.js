tawaf();
function tawaf() {
       var count = 0;
       var audio = new Audio('0.mp3');audio.play();
        while (count <= 7) {
            if (area()) {
                count++;
                switch (count) {
                    case 1:
                         audio = new Audio('1.mp3');audio.play();
                        break;
                    case 2:
                         audio = new Audio('2.mp3');audio.play();
                        break;
                    case 3:
                         audio = new Audio('3.mp3');audio.play();
                        break;
                    case 4:
                         audio = new Audio('4.mp3');audio.play();
                        break;
                    case 5:
                        audio = new Audio('5.mp3');audio.play();
                        break;
                    case 6:
                        audio = new Audio('6.mp3');audio.play();
                        break;
                    case 7:
                        audio = new Audio('7.mp3');audio.play();
                        
                }
                document.write("<br>");
            }
            
        }}
    function area() {
        var area = true;
        if (area) 
            return true;
        return false;    
    }

