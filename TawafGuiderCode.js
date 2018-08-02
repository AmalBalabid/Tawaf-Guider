<script>
 tawaf();
function tawaf() {
       var count = 0;
        while (count <= 7) {
            if (area()) {
                count++;
                switch (count) {
                    case 1:
                         document.write("\n First round is done");
                        break;
                    case 2:
                         document.write("Second round is done");
                        break;
                    case 3:
                         document.write("Third round is done");
                        break;
                    case 4:
                        document.write("Fourth round is done");
                        break;
                    case 5:
                        document.write("Fivth round is done");
                        break;
                    case 6:
                        document.write("Sixth round is done");
                        break;
                    case 7:
                        document.write("Tawaf is done");
                        
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




</script>
