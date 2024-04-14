function changeImage1() {
    var image = document.getElementById("image");
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMFw5BJC9dflkzu2geJJy3RwzTcaewZfurw&usqp=CAU";
}
function changeImage2() {
    var image = document.getElementById("image");
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_p24d2s2mzMPqunShkVVPixSe6xNrwZ06Q&usqp=CAU";
}
function changeImage3() {
    var image = document.getElementById("image");
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NBs5KASsbgpZ7yKxtQKwj6ov40XMm3kggA&usqp=CAU";
}
function changeImage4() {
    var image = document.getElementById("image");
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rDoSPO-Tci1YnVPnIGw1tHu05MOGAEg3BA&usqp=CAU";
}

const imgLinks = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1vi3JDO-tUFMRkdy4yz3jn9B9kQKEYuLVA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDoCyUA_0U82JXSi7XjL0BlHGPUCC_vSQow&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyWbeKcwVdUeqG7mzp0PXQM09HWGu3eKEdg&usqp=CAU'
];    
let currentIndex = 0;
function setIntervalfunction() {
    document.getElementById('image2').src = imgLinks[currentIndex];
    currentIndex++;
    if (currentIndex >= imgLinks.length) {
        currentIndex = 0;
    }
}