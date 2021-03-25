var div = document.getElementById('save');
div.setAttribute('onclick', 'save_image()');

function save_image() {
    window.open(canvas.toDataURL('image/png'));
    var gh = canvas.toDataURL('png');

    var a  = document.createElement('a');
    a.href = gh;
    a.download = 'motivacio.png';

    a.click()
}


function distribute(max_len, words){
    var distributed = [];

    var this_row = '';
    for (var i = 0; i<words.length; i++){

        if ( (this_row + words[i]).length > max_len){
            distributed.push(this_row);
            this_row = '';
        }


        this_row+=(' '+words[i]);

    }

    if (this_row.length > 0) distributed.push(this_row);

    return distributed;

}

function clamp(x, min, max){
    return Math.min(Math.max(x, min), max);
}

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var img = document.getElementById('bg');

    canvas.width = img.width;
    canvas.height = img.height;

    var quote = document.getElementById('quote').innerHTML;

    var fontsize = clamp(2000/(quote.length), 20, 40);

    ctx.font = "italic "+fontsize+"px Georgia";

    ctx.drawImage(img, 0, 0, img.width, img.height);

    quotelist = quote.split(' ');

    const max_row_length = 20;

    var row = '';

    const distributed = distribute(max_row_length, quotelist);

    var currenty = img.height/2 - (distributed.length/2 * fontsize);
       
    ctx.fillStyle = "white";
    for (var i = 0; i<distributed.length; ++i){
        var x = (img.width/2) - (distributed[i].length*((fontsize*3)/5))/2;
        
        ctx.fillText(distributed[i], x, currenty);

        currenty+=fontsize;

    }
}
